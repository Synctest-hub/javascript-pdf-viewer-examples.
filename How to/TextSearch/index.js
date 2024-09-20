var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    // resourceUrl:'https://cdn.syncfusion.com/ej2/24.2.3/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');                              
document.getElementById('textbounds').addEventListener('click', function () {
  // Find and get the bounds of a text
  console.log(pdfviewer.textSearch.findText('adobe', false));
  // Find and get the bounds of a text on the desired page
  console.log(pdfviewer.textSearch.findText('adobe', false, 7));
  // Find and get the bounds of the list of text
  console.log(pdfviewer.textSearch.findText(['adobe', 'pdf'], false));
  // Find and get the bounds of the list of text on desired page
  console.log(pdfviewer.textSearch.findText(['adobe', 'pdf'], false, 7));
});