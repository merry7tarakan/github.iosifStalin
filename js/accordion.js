window.addEventListener("DOMContentLoaded", function () {
	"use strict";
  
	const accordion = () => {
	  const btns = document.querySelectorAll(".accordion-head");
	  btns.forEach((btn) => {
		btn.addEventListener("click", function () {
		  this.classList.toggle("active-style");
		  const block = this.nextElementSibling;
		  block.classList.toggle("active-content");
  
		  if (block.classList.contains("active-content")) {
			block.style.maxHeight = block.scrollHeight + "px";
		  } else {
			block.style.maxHeight = "0";
		  }
		});
	  });
	};
	accordion();
});