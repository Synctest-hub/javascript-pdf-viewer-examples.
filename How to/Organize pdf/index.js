var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/24.2.3/dist/ej2-pdfviewer-lib',
    enablePageOrganizer : false,
    isPageOrganizerOpen : false,
    pageOrganizerSettings : {canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true}


});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
pdfviewer.documentLoad = function (args) {
    var isInitialLoading = true;
    if (isInitialLoading) {
        pdfviewer.isPageOrganizerOpen = true;
        isInitialLoading = false;
    } else {
        pdfviewer.isPageOrganizerOpen = false;
    }
}
document.getElementById('openPageOrganizer').addEventListener('click', function () {
    // Open Page Organizer panel.
    pdfviewer.pageOrganizer.openPageOrganizer();; 
});
document.getElementById('closePageOrganizer').addEventListener('click', function () {
    // Close Page Organizer panel.
    pdfviewer.pageOrganizer.closePageOrganizer(); 
});