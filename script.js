var prtfinderkey = "li5ll4ilWR4AVVCI3TCQws8WvKagfj1q9XAzUykX36Uu57OZem"

// connects the classes to variables for access 
var submitbtn = document.querySelector(".submitbtn")
var factscontainer = document.querySelector("#facts-container")
var picturesContainer = document.querySelector(".pictures");
var catInfo = document.querySelector("#catinfo");

var inputname = document.getElementById("name")
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var submitform = document.querySelector("#formsubmit");


// add event listener waiting for user click on first submit button
submitform.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(inputname.value);
    console.log(email.value);
    console.log(phone.value);


})
// var Email;
// function sendEmail(cat,data){

// Email.send({
//     Host:"smtp.gmail.com", 
//     Username: "aafaydi@hotmail.com",
//     Password: "123456$",
//     To: email.value,
//     From: "aafaydi@hotmail.com",
//     Subject: `you search ${cat}`,
//     Body: `${data}`

// })
// .then(function(message){console.log("message sent")})

// }



// call the first Api
getcatinfo();


// add event listener waiting for user click on second submit button
var dropmenu = document.getElementById("breed")
submitbtn.addEventListener("click", function () {
    factscontainer.innerHTML = "";
    getdata();

})

// access the second Api date uing fetch then get the info we need from it
function getdata() {

    // get all data
    var baseurl = `https://api.thecatapi.com/v1/breeds/search?q=${dropmenu.value}`
    fetch(baseurl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {

                        //get the description element from data array index 0                         
                        var catdes = data[0].description;
                        // create div and assign it to catdes1                        
                        var catdes1 = document.createElement("div");
                        //put the cat descrip in the div                        
                        // sendEmail(dropmenu.value, catdes); 
                        catdes1.textContent = catdes;
                        // then display it on the second block which is fastscontainer                        
                        factscontainer.appendChild(catdes1);
                        // also from these info call display image and display the image
                        displayImage(data[0].reference_image_id, data[0].name);



                    })
            }

        })
}

// display cats imahgeson the third block
function displayImage(imageId, catname) {

    //1. use imageId to construct an image url for our API
    var url = "https://cdn2.thecatapi.com/images/" + imageId + ".jpg";

    //add our url to the image element as the 'src' property (BONUS - add an "alt" tag)
    document.getElementById("CatPhoto").src = url;
    document.getElementById("CatPhoto").alt = "photo of a " + catname;


}

// The first Api about all cats general facts 
function getcatinfo() {
    var baseurl = `https://cat-fact.herokuapp.com/facts/random`
    fetch(baseurl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {

                        //get the fact from data,.text andd assign it to catinfo1
                        var catInfo1 = data.text;
                        // create paragraph and assing it to catinfo2
                        var catInfo2 = document.createElement("p");
                        // put the field of text into the catinfo2
                        catInfo2.textContent = catInfo1;
                        //display it on the page
                        catInfo.appendChild(catInfo2);



                    })
            }

        })
}
