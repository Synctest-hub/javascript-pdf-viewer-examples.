
var pdfviewer = new ej.pdfviewer.PdfViewer({
     enablePrint: true,
     documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
     serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer',
 });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
pdfviewer.printScaleFactor = 0.5;
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbarClick = function (args) {
     if (args.item && args.item.id === 'print') {
         pdfviewer.printModule.print();
     } 
}

