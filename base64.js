<!DOCTYPE html>
<html>
<head>
	<title>JQuery</title>
	<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
</head>
<body>
	<H1>Select file to upload and convert into base64 string</H1>
	<hr>
	<br>
	<label for="fileUpload">Choose file:</label>
	<input type="file" id="fileUpload" name="fileUpload" />
	<br><br>
	<button id="jsonConvert">Click me to upload file and convert into Base64</button>
</body>
</html>
<script type="text/javascript">
	const toBase64 = file => new Promise((resolve, reject) => {
	    const reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onload = () => resolve(reader.result);
	    reader.onerror = error => reject(error);
	});

	$('#jsonConvert').click(function() {
		const uploadedFile = document.querySelector('#fileUpload').files[0];
		toBase64(uploadedFile)
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		})
	});
</script>