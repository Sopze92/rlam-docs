// spoiler array
var spoiler = document.getElementsByClassName("spoiler-button");

// spoiler show/hide function w autoscroll
for (var i = 0; i < spoiler.length; i++) {
	spoiler[i].addEventListener("click", function() {
		
			// changes on spoiler title for css styling
			this.classList.toggle("open");
			var open= this.classList.contains("open");
			this.childNodes[0].textContent= open ? "-" : "+";
			
			// changes on spoiler content for showing/hidding
			var content= this.nextElementSibling;
			content.style.maxHeight = (open ? content.scrollHeight : 0) + "px"
			
			// scroll, timeout'd to wait for css transition to complete
			if(open){ setTimeout(() => { scroll(this.parentElement); }, 125); }
		}
	);
}

// scroll function
function scroll(element){
	window.scrollTo({
		top: element.offsetTop,
		behavior: 'smooth',
	});
}