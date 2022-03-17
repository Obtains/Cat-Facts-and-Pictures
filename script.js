var prtfinderkey = "li5ll4ilWR4AVVCI3TCQws8WvKagfj1q9XAzUykX36Uu57OZem"


var submitbtn = document.querySelector(".submitbtn")
var factscontainer = document.querySelector("#facts-container")
var picturesContainer = document.querySelector(".pictures");
var catInfo = document.querySelector("#catinfo");

getcatinfo();


var dropmenu = document.getElementById("breed")
submitbtn.addEventListener("click", function () {
    factscontainer.innerHTML = "";
    getdata();
  
   })


function getdata() {

    var baseurl = `https://api.thecatapi.com/v1/breeds/search?q=${dropmenu.value}`
    fetch(baseurl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                       
                        var catdes = data[0].description;
                        var catdes1 = document.createElement("div");

                        catdes1.textContent = catdes;
                        factscontainer.appendChild(catdes1);
                        displayImage(data[0].reference_image_id,data[0].name);
                        


                    })
            }

        })
}


function displayImage(imageId,catname) {
    
    //1. use imageId to construct an image url for our API
    var url = "https://cdn2.thecatapi.com/images/" + imageId + ".jpg";
    

    console.log(imageId);
    
    console.log(url);
    
    document.getElementById("CatPhoto").src = url;
    document.getElementById("CatPhoto").alt = "photo of a " + catname;


    // picturesContainer.appendChild(image);
    
    //2. create an image element

    //3. add our url to the image element as the 'src' property (BONUS - add an "alt" tag)

    //4. append our brand-spankin-new image element to our 'pictures' element


    }

    function getcatinfo(){
        var baseurl = `https://cat-fact.herokuapp.com/facts/random`
        fetch(baseurl)
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
    

    