document.addEventListener('DOMContentLoaded',() => {
	const uploadButton = document.getElementById('uploadButton');
	const videoFileInput = document.getElementById('videoFile');
	const messageDiv = document.getElementById('message');
	
	uploadButton.addEventListener('click', () => {
		const file = videoFileInput.files[0];
		if (!file) {
			messageDiv.textContent = 'Please select a video file.';
			return;
		}
		
		const formData = new FormData();
		formData.append('videoFile', file);
		
		fetch('/upload', {
			method: 'POST',
			body: formData,
		})
		  .then((response) => response.text())
		  .then((data) => {
			  messageDiv.textContent = data;
		  })
		  .catch((error) => {
			  console.error(error);
			  messageDiv.textContent = 'There was an error uploading your video. Please try again later.';
		  });
	});
});