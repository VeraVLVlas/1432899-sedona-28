var searchButton = document.querySelector(".button-search");
var form = document.querySelector(".interactive-form"); 
var cell = form.querySelector(".cell-first");
var formSending = form.querySelector(".form");
var numberAdults = form.querySelector(".cell-little");
var numberChildren = form.querySelector(".children");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("quantity");
} catch (err) {
  isStorageSupport = false;
}

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("visitors");
} catch (err) {
  isStorageSupport = false;
}

searchButton.addEventListener("click", function () {
	form.classList.toggle(".interactive-form");
	form.classList.toggle("form-hide");
	cell.focus();
});

formSending.addEventListener ("submit", function (evt) {
	evt.preventDefault();
    if (!numberAdults.value || !numberChildren.value)	{ evt.preventDefault();
	} else {
	  if (isStorageSupport) {
    localStorage.setItem("quantity", numberAdults.value);
  }
 }
});

formSending.addEventListener ("submit", function (evt) {
	evt.preventDefault();
    if (!numberAdults.value || !numberChildren.value)	{ evt.preventDefault();
	} else {
	  if (isStorageSupport) {
    localStorage.setItem("visitors", numberAdults.value);
  }
 }
});