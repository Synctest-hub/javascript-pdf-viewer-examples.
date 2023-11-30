<script>
	const initializeRemarkable = () => {
		let pdfViewer = new ej.pdfviewer.PdfViewer({
			// Change serviceUrl to the host link for your local PDF viewer server.
			serviceUrl : 'https://services.syncfusion.com/js/production/api/pdfviewer',
			// Change the documentPath to your preferred load document path.
			documentPath : 'FormDesigner.pdf',
		});
	pdfViewer.appendTo('#pdfViewer');
	}
</script>

<svelte:head>
	<!-- Essential JS 2 PDF Viewer's global script -->
	<script src="https://cdn.syncfusion.com/ej2/20.2.48/dist/ej2.min.js" on:load={initializeRemarkable}></script>
	<!-- Essential JS 2 PDF Viewer's global style -->
	<link href="https://cdn.syncfusion.com/ej2/20.2.48/material.css" rel="stylesheet">
</svelte:head>
<main>
	<body style="margin:0px">
		<div style="height: 100%;width: 100%">
		    // Add the PDF Viewer.
			<div id="pdfViewer"style="height: 100vh;width: 100%"></div>
		</div>
	</body>
</main>

