var prtfinderkey = "li5ll4ilWR4AVVCI3TCQws8WvKagfj1q9XAzUykX36Uu57OZem"
// var apiUrl = `https://pixabay.com/api/?key=25611667-83c4cb097f67d0655d4305c45&q=${entry}&image_type=photo&pretty=true`;
var submitbtn = document.querySelector(".submitbtn")
var factscontainer = document.querySelector(".facts")
var dropmenu = document.getElementById("breed")
submitbtn.addEventListener("click", function(){
    console.log(dropmenu.value)
    var name = document.createElement("h2")
    name.textContent = dropmenu.value
    factscontainer.appendChild(name)
})


function getdata(){
    
    var baseurl = `https://api.thecatapi.com/v1/breeds/search?q=${dropmenu.value}`
    fetch(baseurl)
    .then(function (response){
        if(response.ok){
            response.json()
            .then(function(data){
                console.log(data)
            })
        }

    })
}
getdata()

function displayfacts(){
    
}