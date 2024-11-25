var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: "https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib",
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

document.getElementById('getBase64').addEventListener('click', function() {
  base64ofloadedDocument();  // Call the function to get the Base64 string
});

// Function to get Base64 of the loaded document
function base64ofloadedDocument() {
pdfviewer.saveAsBlob().then(function(value) {
  var data = value;

  var reader = new FileReader();

  reader.readAsDataURL(data);

  reader.onload = function() {
    var base64data = reader.result;

    console.log(base64data);
    };
  });
}
