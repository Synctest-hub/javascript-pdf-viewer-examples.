var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/24.2.3/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
document.getElementById('click').addEventListener('click', () => {
    console.log(pdfviewer.zoomPercentage)
});
pdfviewer.appendTo('#PdfViewer');
pdfviewer.documentLoad = function () {
    if (ej.base.Browser.isDevice && !pdfviewer.enableDesktopMode) {
        pdfviewer.maxZoom = 100;
        pdfviewer.minZoom = 10;
    }
    else {
        pdfviewer.zoomMode = 'Default';
    }
}
