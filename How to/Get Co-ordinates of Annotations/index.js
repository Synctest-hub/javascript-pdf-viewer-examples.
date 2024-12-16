var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl:'https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.textSearchHighlight = function(args){
  console.log(args);
  var pageNumber = args.pageNumber;
  var bounds = args.bounds;
  pdfviewer.annotation.addAnnotation("Rectangle", {
      offset: {x: bounds.left, y: bounds.top}, 
      pageNumber: pageNumber, 
      width: bounds.width, 
      height: bounds.height,
  });
}  

document.getElementById("searchText").addEventListener("click",function(args){
  pdfviewer.textSearchModule.searchText('PDF',false);
})

document.getElementById("searchNext").addEventListener("click",function(args){
  pdfviewer.textSearch.searchNext();
})

document.getElementById("searchCancel").addEventListener("click",function(args){
  pdfviewer.textSearch.cancelTextSearch();
})
