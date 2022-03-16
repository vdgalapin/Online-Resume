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






// This is a closure, its a design pattern commonly used in JavaScript
// This calling anonymous function straight away
(function(global) {

	var dc = {};

	// Home Page Snippet
	var homeHTML = "snippets/home-snippet.html";

	// About me Snippet
	var aboutMeHTML = 'snippets/about-me-snippet.html'

	// Personal Project Snippet
	var personalProjectHTML = 'snippets/personal-project-snippet.html'

	// Work Experience Snippet
	var workExperienceHTML = 'snippets/work-experience-snippet.html'

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
		html += "<img src='images/ajax-loader.gif'></div>";
		insertHtml(selector, html);
	}


	// Remove the selected to all classes
	var removeSelected = function() {
		// Remove 'selected' to every possible button 

		var classes = document.querySelector("#navHomeButton").className;
		classes = classes.replace(new RegExp("selected", "g"), "");
		document.querySelector("#navHomeButton").className = classes;

		classes = document.querySelector("#navWorkExperience").className;
		classes = classes.replace(new RegExp("selected", "g"), "");
		document.querySelector("#navWorkExperience").className = classes;

		classes = document.querySelector("#navPersonalProject").className;
		classes = classes.replace(new RegExp("selected", "g"), "");
		document.querySelector("#navPersonalProject").className = classes;

		classes = document.querySelector("#navAboutMe").className;
		classes = classes.replace(new RegExp("selected", "g"), "");
		document.querySelector("#navAboutMe").className = classes;		
	}

	// Rename the class 'selected' from home and switch to About Me Button
	var switchHomeToSelected = function() {
		// Remove 'selected' from home button
		removeSelected();

		// Add 'selected' to menu button if not already there
		var classes = document.querySelector("#navHomeButton").className;
		if (classes.indexOf("selected") == -1) {
			classes += "selected";
			document.querySelector("#navHomeButton").className = classes;
		}

	};

	// Rename the class 'selected' from home and switch to About Me Button
	var switchAboutMeToSelected = function() {
		// Remove 'selected' from home button
		removeSelected();

		// Add 'selected' to menu button if not already there
		var classes = document.querySelector("#navAboutMe").className;
		if (classes.indexOf("selected") == -1) {
			classes += "selected";
			document.querySelector("#navAboutMe").className = classes;
		}

	};

	// Rename the class 'selected' from home and switch to About Me Button
	var switchWorkExperienceToSelected = function() {
		// Remove 'selected' from home button
		removeSelected();

		// Add 'selected' to menu button if not already there
		var classes = document.querySelector("#navWorkExperience").className;
		if (classes.indexOf("selected") == -1) {
			classes += "selected";
			document.querySelector("#navWorkExperience").className = classes;
		}

	};

		// Rename the class 'selected' from home and switch to About Me Button
	var switchPersonalProjectedToSelected = function() {
		// Remove 'selected' from home button
		removeSelected();

		// Add 'selected' to menu button if not already there
		var classes = document.querySelector("#navPersonalProject").className;
		if (classes.indexOf("selected") == -1) {
			classes += "selected";
			document.querySelector("#navPersonalProject").className = classes;
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
								  	switchHomeToSelected();
								  },
								  false);
	}); 

	// loading the About Me page
	dc.loadHome = function () {


		// the loading css
		showLoading("#main-content");


		// Gets the About me page
		$ajaxUtils.sendGetRequest(homeHTML,
						 		  function(responseText) {
								  	document.querySelector("#main-content").innerHTML = responseText;
								  	switchHomeToSelected();
								  },
								  false);
		
	}

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


	// loading the personal Project Page
	dc.loadPersonalProject = function () {


		// the loading css
		showLoading("#main-content");


		// Gets the About me page
		$ajaxUtils.sendGetRequest(personalProjectHTML,
						 		  function(responseText) {
								  	document.querySelector("#main-content").innerHTML = responseText;
								  	switchPersonalProjectedToSelected();
								  },
								  false);
		
	}


	// loading the Work Experience Page
	dc.loadWorkExperience = function () {


		// the loading css
		showLoading("#main-content");


		// Gets the About me page
		$ajaxUtils.sendGetRequest(workExperienceHTML,
						 		  function(responseText) {
								  	document.querySelector("#main-content").innerHTML = responseText;
								  	switchWorkExperienceToSelected();
								  },
								  false);
		
	}

	global.$dc = dc;

})(window);