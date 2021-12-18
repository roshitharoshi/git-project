function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    display(data.cards)
})


function display(mb){
    var deck=document.querySelector(".card-deck")
    deck.classList.add("text-center")
   console.log(deck)

   for(var i in mb){
    var caddiv=document.createElement("div")
    caddiv.classList.add("card")
    var cadimg=document.createElement("img")
    cadimg.src=mb[i].img
    caddiv.appendChild(cadimg)
    deck.appendChild(caddiv)
    

    //name 

    var cname=document.createElement("h2")
    cname.textContent=mb[i].name;
    caddiv.appendChild(cname)

    //name rate
var rate=document.createElement("h3")
rate.textContent=mb[i].rate;
caddiv.appendChild(rate)

//offer

var offer=document.createElement("h3")
offer.textContent="off/-"+mb[i].offer;
caddiv.appendChild(offer)

//button
var btn=document.createElement("button")
btn.classList.add("bn-danger")
btn.textContent=mb[i].button;
caddiv.appendChild(offer)
    

}    

}