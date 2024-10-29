var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                            ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');                              
var pageSizes = [];
pdfviewer.ajaxRequestSuccess = function (args) {
  if (args.action === 'Load') {
    let objLength = Object.keys(args.data.pageSizes).length;
    for (var x = 0; x < objLength; x++) {
      var pageSize = args.data.pageSizes[x];
      pageSizes.push(pageSize);
    }
  }
};


pdfviewer.exportSuccess = function (args) {
  console.log(args.exportData);
  const blobURL = args.exportData;

  // Converting the exported blob into object
  convertBlobURLToObject(blobURL)
    .then((objectData) => {
      console.log(objectData);
      var datas = objectData;
      var shapeAnnotationData = datas['pdfAnnotation'][0]['shapeAnnotation'];
      shapeAnnotationData.map(data => {
        if (data && data.rect && parseInt(data.rect.width)) {

          //var pageHeight=parseInt(data.rect.height);
          var pageHeight = pageSizes[parseInt(data.page)].Height

          // Converting PDF Library values into PDF Viewer values. 
          var rect = {
            x: (parseInt(data.rect.x) * 96) / 72,
            y: (parseInt(pageHeight) * 72 / 96 - parseInt(data.rect.height)) * 96 / 72,
            width: (parseInt(data.rect.width) - parseInt(data.rect.x)) * 96 / 72,
            height: (parseInt(data.rect.height) - parseInt(data.rect.y)) * 96 / 72,
          };
        }
        if ((data.type == 'Line' || data.type == 'Arrow') && data.start && data.end) {
          // Split and parse the start and end points
          const [startX, startY] = data.start.split(',').map(Number);
          const [endX, endY] = data.end.split(',').map(Number);

          // Convert to PDF Viewer coordinates
          const pageHeight = pageSizes[parseInt(data.page)].Height;
          const pdfStartX = (startX * 96) / 72;
          const pdfStartY = (parseInt(pageHeight) * 72 / 96 - startY) * 96 / 72;
          const pdfEndX = (endX * 96) / 72;
          const pdfEndY = (parseInt(pageHeight) * 72 / 96 - endY) * 96 / 72;

          rect = {
            x: Math.min(pdfStartX, pdfEndX),
            y: Math.min(pdfStartY, pdfEndY),
            width: Math.abs(pdfEndX - pdfStartX),
            height: Math.abs(pdfEndY - pdfStartY),
          };
        }
        if (rect != null && data.type!='Text') {
          console.log(data.name);
          console.log(rect);
          console.log("-------------------------");
        }
      });
    })
    .catch((error) => {
      console.error('Error converting Blob URL to object:', error);
    });
};

function convertBlobURLToObject(blobURL) {
  return fetch(blobURL)
    .then((response) => response.blob())
    .then((blobData) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(JSON.parse(reader.result));
        };
        reader.onerror = reject;
        reader.readAsText(blobData);
      });
    });
}
