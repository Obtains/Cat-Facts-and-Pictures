var prtfinderkey = "li5ll4ilWR4AVVCI3TCQws8WvKagfj1q9XAzUykX36Uu57OZem"

// var apiUrl = `https://pixabay.com/api/?key=25611667-83c4cb097f67d0655d4305c45&q=${entry}&image_type=photo&pretty=true`;
var submitbtn = document.querySelector(".submitbtn")
var factscontainer = document.querySelector("#facts-container")
var picturesContainer = document.querySelector(".pictures");

var dropmenu = document.getElementById("breed")
submitbtn.addEventListener("click", function () {
    // console.log(dropmenu.value)
    picturesContainer.innerHTML = "";
    factscontainer.innerHTML = "";
    getdata();
  
    // var name = document.createElement("h2")
    // name.textContent = dropmenu.value
    // factscontainer.appendChild(name)
})


function getdata() {

    var baseurl = `https://api.thecatapi.com/v1/breeds/search?q=${dropmenu.value}`
    fetch(baseurl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        // console.log(data)
                        // console.log(data[0].description);
                        var catdes = data[0].description;
                        var catdes1 = document.createElement("div");

                        catdes1.textContent = catdes;
                        factscontainer.appendChild(catdes1);
                        displayImage(data[0].reference_image_id);



                    })
            }

        })
}


function displayImage(imageId) {
    
    //1. use imageId to construct an image url for our API
    var url = "https://cdn2.thecatapi.com/images/" + imageId + ".jpg";
    //var url = `"https://cdn2.thecatapi.com/images/${imageId}.jpg`;
    console.log(url);
    
    //2. create an image element

    //3. add our url to the image element as the 'src' property (BONUS - add an "alt" tag)

    //4. append our brand-spankin-new image element to our 'pictures' element
}