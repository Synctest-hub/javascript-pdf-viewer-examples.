import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, 
         ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
// Replace the "localhost:44396" with the actual URL of your server
pdfviewer.serviceUrl = 'https://localhost:44396/pdfviewer';
// Replace  correct PDF Document URL want to load
pdfviewer.documentPath ="https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');