var toolItem1 = {
    prefixIcon: 'e-icons e-paste',
    id: 'print',
    tooltipText: 'Custom toolbar item',
};
var toolItem2  = {
    id: 'download',
    text: 'Save',
    tooltipText: 'Custom toolbar item',
    align: 'right'
};
var LanguageList = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
var toolItem3 = {
    type: 'Input',
    tooltipText: 'Language List',
    cssClass: 'percentage',
    align: 'Left',
    id: 'dropdown',
    template: new ej.dropdowns.ComboBox({ width: 100, value: 'TypeScript', dataSource: LanguageList, popupWidth: 85, showClearButton: false, readonly: false })  
};
var toolItem4 = {
    type: 'Input',
    tooltipText: 'Text',
    align: 'Right',
    cssClass: 'find',
    id: 'textbox',
    template: new ej.inputs.TextBox({ width: 125, placeholder: 'Type Here', created: OnCreateSearch })
}
var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
                    resourceUrl:'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib',
                    toolbarSettings : { toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm'] }
               });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields);
               
//PDF Viewer control rendering starts
pdfviewer.printScaleFactor=0.5;
pdfviewer.appendTo('#PdfViewer');
pdfviewer.toolbarClick = function (args) {
    if (args.item && args.item.id === 'print') {
        pdfviewer.printModule.print();
    } else if (args.item && args.item.id === 'download') {
        pdfviewer.download();
    }
};
function OnCreateSearch() {
    this.addIcon('prepend', 'e-icons e-search');
}