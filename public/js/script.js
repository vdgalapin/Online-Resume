// For the menu button
// This JQUERY will be execute it as soon as the documetn is ready.
// Similar to document.addEventListener("DOMContentLoad")
$(function() {

	$("#navbarToggle").blur(function(event) {
		// If the window size is below 768 then hide the menu when the user clicks outside the button or div.
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
			document.getElementById("navbarToggle").classList.toggle('opened');
			document.getElementById("navbarToggle").setAttribute('aria-expanded', document.getElementById("navbarToggle").classList.contains('opened'));
		}
 	})

 	$("#navbarToggle").click(function(event){
 		$(event.target).focus();
 	})

});




/*

// This is a closure, its a design pattern commonly used in JavaScript
// This calling anonymous function straight away
(function(global) {

	var dc = {};

	// Home Page Snippet
	//var homeHTML = "../../views/partial/home-snippet.html";
	var homeHTML = 'snippets/home-snippet.html';
	// About me Snippte
	var aboutMeHTML = '../../views/partial/about-me-snippet.html'



	// Convenience function for inserting innerHTML for 'select'
	// Usually used to insert to the #main-content
	var insertHtml = function(selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	}




	// Show loading icon inside element identified by 'selector'
	// This is the loading page
	var showLoading = function(selector) {
		var html = "<div class='text-center'>";
		html += "<img src='../../webpage/images/ajax-loader.gif'></div>";
		insertHtml(selector, html);
	}



	// Rename the class 'selected' from home and switch to About Me Button
	var switchAboutMeToSelected = function() {
		// Remove 'selected' from home button
		var classes = document.querySelector("#navHomeButton").className;
		classes = classes.replace(new RegExp("selected", "g"), "");
		document.querySelector("#navHomeButton").className = classes;

		// Add 'selected' to menu button if not already there
		classes = document.querySelector("#navAboutMe").className;
		if (classes.indexOf("selected") == -1) {
			classes += "selected";
			document.querySelector("#navAboutMe").className = classes;
		}

	};



	// Om page load (before images or css)
	document.addEventListener("DOMContentLoaded", function(event) {
		// This is when they first load, who the home view

		// the loading css
		showLoading("#main-content");

		// Gets the home page
		$ajaxUtils.sendGetRequest(homeHTML, 
								  function(responseText) {
								  	document.querySelector("#main-content").innerHTML = responseText;
								  },
								  false);
	});



	// loading the About Me page
	dc.loadAboutMe = function () {


		// the loading css
		showLoading("#main-content");


		// Gets the About me page
		$ajaxUtils.sendGetRequest(aboutMeHTML,
						 		  function(responseText) {
								  	document.querySelector("#main-content").innerHTML = responseText;
								  	switchAboutMeToSelected();
								  },
								  false);
		
	}

	global.$dc = dc;

})(window); */