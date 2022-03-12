
var apiUrl = `https://pixabay.com/api/?key=25611667-83c4cb097f67d0655d4305c45&q=${entry}&image_type=photo&pretty=true`;

= document.querySelector('');


var buttonClickHandler = function (event) {
    event.preventDefault();                   



    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
            response.json().then(function (data) {
            
            
            }
