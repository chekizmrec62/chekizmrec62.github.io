function parseNews(url) {
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", url, true);
	xhr.responseType = "document";
	xhr.onload = function() {
		if (this.status >= 200 && this.status <= 299) {
			var log = this.responseXML;
			var post = log.querySelectorAll("post");
			
			for (var i = 0; i < post.length; i++) {
				document.querySelector(".posts").innerHTML += "<div class=\"card-view\"><h2>" + post[i].querySelector("title").innerHTML + "</h2><p>" + post[i].querySelector("text").innerHTML + "</p><div>";
			}
		}
	};
	
	xhr.send();
}

parseNews("../news.xml");
