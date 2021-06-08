import React, { Component } from 'react'
import {useState, useEffect} from 'react'

function SearchBar(){
    const [state, setState] = useState([])
    
    let suggestions = [];
    let apiKey = "416019e3dffee85fe9e04994b2ccb8cb"
    let secret = "58a82837aba5ce59"

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=APIKEY&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1",
        "method": "GET",
        "headers": {}
      }


      



useEffect(() => {
    // getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e)=>{
let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
"nightmare",
"airplane",
"reductions",
"southampton",
"istanbul",
"impose",
"organisms",
"sega",
"telescope",
"viewers",
"asbestos",
"portsmouth",
"cdna",
"meyer",
"enters",
"pod",
"savage",
"advancement",
"wu",
"harassment",
"willow",
"resumes",
"bolt",
"gage",
"throwing",
"existed",
"whore",
"generators",
"barbie",
"dat",
"favour",
"soa",
"knock",
"urge",
"smtp",
"generates",
"potatoes",
"thorough",
"replication",
"inexpensive",
"kurt",
"receptors",
"peers",
"roland",
"optimum",
"neon",
"interventions",
"quilt",
"huntington",
"creature",
"ours",
"mounts",
"syracuse",
"internship",
"lone",
"refresh",
"aluminium",
"snowboard",
"beastality",
"webcast",
"michel",
"evanescence",
"subtle",
"coordinated",
"notre",
"shipments",
"maldives",
"stripes",
"firmware",
"antarctica",
"cope",
"shepherd",
"lm",
"canberra",
"cradle",
"chancellor",
"mambo",
"lime",
"kirk",
"flour",
"controversy",
"legendary",
"bool",
"sympathy",
"choir",
"avoiding",
"beautifully",
"blond",
"expects",
"cho",
"jumping",
"fabrics",
"antibodies",
"polymer",
"hygiene",
"wit",
"poultry",
"virtue",
"burst",
"examinations",
"surgeons",
"bouquet",
"immunology",
"promotes",
"mandate",
"wiley",
"departmental",
"bbs",
"spas",
"ind",
"corpus",
"johnston",
"terminology",
"gentleman",
"fibre",
"reproduce",
"convicted",
"shades",
"jets",
"indices",
"roommates",
"adware",
"qui",
"intl",
"threatening",
"spokesman",
"zoloft",
"activists",
"frankfurt",
"prisoner",
"daisy",
"halifax",
"encourages",
"ultram",
"cursor",
"assembled",
"earliest",
"donated",
"stuffed",
"restructuring",
"insects",
"terminals",
"crude",
"morrison",
"maiden",
"simulations",
"cz",
"sufficiently",
"examines",
"viking",
"myrtle",
"bored",
"cleanup",
"yarn",
"knit",
"conditional",
"mug",
"crossword",
"bother",
"budapest",
"conceptual",
"knitting",
"attacked",
"hlbhutan",
"liechtenstein",
"mating",
"compute",
"redhead",
"arrives",
"translator",
"automobiles",
"tractor",
"allah",
"continent",
"ob",
"unwrap",
"fares",
"longitude",
"resist",
"challenged",
"telecharger",
"hoped",
"pike",
"safer",
"insertion",
"instrumentation",
"ids",
"hugo",
"wagner",
"constraint",
"groundwater",
"touched",
"strengthening",
"cologne",
"gzip",
"wishing",
"ranger",
"smallest",
"insulation",
"newman",
"marsh",
"ricky",
"ctrl",
"scared",
"theta",
"infringement",
"bent",
"laos",
"subjective",
"monsters",
"asylum",
"lightbox",
"robbie",
"stake",
"cocktail",
"outlets",
"swaziland",
"varieties",
"arbor",
"mediawiki",
"configurations",
"poison"]
let userData = e.target.value; //user enetered data
let emptyArray = [];
if(userData){
    icon.onclick = ()=>{
        webLink = "https://www.google.com/search?q=" + userData;
        linkTag.setAttribute("href", webLink);
        console.log(webLink);
        linkTag.click();
    }
    emptyArray = suggestions.filter((data)=>{
        //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
    });
    emptyArray = emptyArray.map((data)=>{
        // passing return data inside li tag
        return data = '<li>'+ data +'</li>';
    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "select(this)");
    }
}else{
    searchWrapper.classList.remove("active"); //hide autocomplete box
}
}
function select(element){
let selectData = element.textContent;
inputBox.value = selectData;
icon.onclick = ()=>{
    webLink = "https://www.google.com/search?q=" + selectData;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
}
searchWrapper.classList.remove("active");
}
function showSuggestions(list){
let listData;
if(!list.length){
    let userValue = inputBox.value;
    listData = '<li>'+ userValue +'</li>';
}else{
    listData = list.join('');
}
suggBox.innerHTML = listData;
}
    
})
    async function search(key){
        console.warn(key)
        let result = []
        result = await fetch("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=416019e3dffee85fe9e04994b2ccb8cb&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1")
        console.log(result)
        setState(result)
        
    }
    
    
    return (
        <div className="searchBar">
            <div className="wrapper">
                <div className="search-input">
                  <a href="" target="_blank" hidden></a>
                  <input type="text" onChange={(e)=>{search(e.target.value)}} placeholder="Type to search.."/>
                  <div className="autocom-box">
                  </div>
                  <div className="icon"><i className="fas fa-search"></i></div>
                </div>
              </div>
        </div>
    )
    
}

export default SearchBar


// ImageSearch
// Key:
// 7f8c7f63724b4f149273c95d771f6d4b

// Secret:
// af9749ec1fc33b7d












// useEffect(() => {
//     // getting all required elements
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".icon");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;
// // if user press any key and release
// inputBox.onkeyup = (e)=>{
// let suggestions = [
//     "Channel",
//     "CodingLab",
//     "CodingNepal",
//     "YouTube",
//     "YouTuber",
//     "YouTube Channel",
//     "Blogger",
//     "Bollywood",
//     "Vlogger",
//     "Vechiles",
//     "Facebook",
//     "Freelancer",
//     "Facebook Page",
//     "Designer",
//     "Developer",
//     "Web Designer",
//     "Web Developer",
//     "Login Form in HTML & CSS",
//     "How to learn HTML & CSS",
//     "How to learn JavaScript",
//     "How to became Freelancer",
//     "How to became Web Designer",
//     "How to start Gaming Channel",
//     "How to start YouTube Channel",
//     "What does HTML stands for?",
//     "What does CSS stands for?",
// ];
// let userData = e.target.value; //user enetered data
// let emptyArray = [];
// if(userData){
//     icon.onclick = ()=>{
//         webLink = "https://www.google.com/search?q=" + userData;
//         linkTag.setAttribute("href", webLink);
//         console.log(webLink);
//         linkTag.click();
//     }
//     emptyArray = suggestions.filter((data)=>{
//         //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
//         return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
//     });
//     emptyArray = emptyArray.map((data)=>{
//         // passing return data inside li tag
//         return data = '<li>'+ data +'</li>';
//     });
//     searchWrapper.classList.add("active"); //show autocomplete box
//     showSuggestions(emptyArray);
//     let allList = suggBox.querySelectorAll("li");
//     for (let i = 0; i < allList.length; i++) {
//         allList[i].setAttribute("onclick", "select(this)");
//     }
// }else{
//     searchWrapper.classList.remove("active"); //hide autocomplete box
// }
// }
// function select(element){
// let selectData = element.textContent;
// inputBox.value = selectData;
// icon.onclick = ()=>{
//     webLink = "https://www.google.com/search?q=" + selectData;
//     linkTag.setAttribute("href", webLink);
//     linkTag.click();
// }
// searchWrapper.classList.remove("active");
// }
// function showSuggestions(list){
// let listData;
// if(!list.length){
//     let userValue = inputBox.value;
//     listData = '<li>'+ userValue +'</li>';
// }else{
//     listData = list.join('');
// }
// suggBox.innerHTML = listData;
// }
    
// })