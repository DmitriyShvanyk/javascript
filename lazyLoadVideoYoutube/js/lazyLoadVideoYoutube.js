;
(function () {

	"use strict";

	function lazyLoadVideoYoutube() {

		let video = document.querySelectorAll('.video__inner');

		for (let i = 0; i < video.length; i++) {
			let videoImagePoster = "https://img.youtube.com/vi/" + video[i].dataset.embed + "/sddefault.jpg";

			// load async image video poster
			let image = new Image();
			image.src = videoImagePoster;
			image.addEventListener('load', function (i) {
				video[i].appendChild(image);
			}.bind(this, i));

			video[i].addEventListener('click', function() {
				let iframe = document.createElement('iframe');
				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
				this.innerHTML = '';
				this.appendChild(iframe);
			});

		}

	}

	lazyLoadVideoYoutube();


})();