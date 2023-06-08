// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
	// Get the navbar link for "Home"
	var homeLink = document.querySelector(".link-home");
	var aboutLink = document.querySelector(".link-about");
	var featuresLink = document.querySelector(".link-features");
	var contactLink = document.querySelector(".link-contact");

	// Add click event listener to the "Home" link
	homeLink.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent the default link behavior

		// Scroll to the home section smoothly
		var homeSection = document.getElementById("home-section");
		homeSection.scrollIntoView({ behavior: "smooth" });
	});

	// Add click event listener to the "about" link
	aboutLink.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent the default link behavior

		// Scroll to the about section smoothly
		var aboutSection = document.getElementById("about-section");
		aboutSection.scrollIntoView({ behavior: "smooth" });
	});

	// Add click event listener to the "features" link
	featuresLink.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent the default link behavior

		// Scroll to the features section smoothly
		var featuresSection = document.getElementById("features-section");
		featuresSection.scrollIntoView({ behavior: "smooth" });
	});

	// Add click event listener to the "contact" link
	contactLink.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent the default link behavior

		// Scroll to the contact section smoothly
		var contactSection = document.getElementById("contact-section");
		contactSection.scrollIntoView({ behavior: "smooth" });
	});
});
