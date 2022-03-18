var prtFinderKey = "li5ll4ilWR4AVVCI3TCQws8WvKagfj1q9XAzUykX36Uu57OZem"


var submitBtn = document.querySelector(".submitbtn")
var factsContainer = document.querySelector("#facts-container")
var picturesContainer = document.querySelector(".pictures");
var catInfo = document.querySelector("#catinfo");

//var inputname = document.getElementById("name")
//var email = document.getElementById("email")
//var phone = document.getElementById("phone")
var submitForm = document.querySelector("#formsubmit");



 submitForm.addEventListener("click", function (event) {
    event.preventDefault();

  var inputName = $('#name').val();
  var inputEmail = $('#email').val();
  var inputPhone = $('#phone').val();
  localStorage.setItem("name", inputName);
  localStorage.setItem("email", inputEmail);
  localStorage.setItem("phone", inputPhone);

    



})


getCatInfo();



var dropMenu = document.getElementById("breed")
submitBtn.addEventListener("click", function () {
    factsContainer.innerHTML = "";
    getData();

})


function getData() {

    var baseUrl = `https://api.thecatapi.com/v1/breeds/search?q=${dropMenu.value}`
    fetch(baseUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {

                        var catDes = data[0].description;
                        var catDes1 = document.createElement("div");
                        // sendEmail(dropmenu.value, catdes); 
                        catDes1.textContent = catDes;
                        factsContainer.appendChild(catDes1);
                        displayImage(data[0].reference_image_id, data[0].name);



                    })
            }

        })
}


function displayImage(imageId, catName) {

    //1. use imageId to construct an image url for our API
    var url = "https://cdn2.thecatapi.com/images/" + imageId + ".jpg";


    console.log(imageId);

    console.log(url);

    document.getElementById("CatPhoto").src = url;
    document.getElementById("CatPhoto").alt = "photo of a " + catName;


    // picturesContainer.appendChild(image);

    //2. create an image element

    //3. add our url to the image element as the 'src' property (BONUS - add an "alt" tag)

    //4. append our brand-spankin-new image element to our 'pictures' element


}

function getCatInfo() {
    var baseUrl = `https://cat-fact.herokuapp.com/facts/random`
    fetch(baseUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        console.log(data)
                        var catInfo1 = data.text;
                        var catInfo2 = document.createElement("p");

                        catInfo2.textContent = catInfo1;
                        catInfo.appendChild(catInfo2);



                    })
            }

        })
}


