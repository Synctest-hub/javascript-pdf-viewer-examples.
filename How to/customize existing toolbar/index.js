var toolItem = {
    prefixIcon: 'e-icons e-paste',
    id: 'print',
    tooltipText: 'Custom toolbar item',
    align: 'left'
};
var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
                    resourceUrl:'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib',
                    toolbarSettings : { toolbarItems: [toolItem, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm'] }
               });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields);
               
//PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbarClick = function (args) {
    if (args.item && args.item.id === 'print') {
        pdfviewer.printModule.print();
    } else if (args.item && args.item.id === 'download') {
        pdfviewer.download();
    }
};