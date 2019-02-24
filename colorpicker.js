"use strict";
const image = document.getElementById("imageCanvas");
const zoom = document.getElementById("zoomCanvas");
let ctx = image.getContext('2d');

window.addEventListener("DOMContentLoaded", init);

function init()
{
    let img = new Image();
    img.src = "cat.jpg";
    img.onload = function() {
        ctx.drawImage(img, 0, 0);};

}

imageCanvas.addEventListener("mousemove", mouseMoved);
function mouseMoved(event){
    console.log(event);
       let x = event.offsetX;
       let y = event.offsetY;

       //the rectangle appears
    ctx.strokeRect(x, y, 20, 20,);
    ctx.strokeStyle="lightgreen";

       console.log(y,x);

    /*let pixel = ctx.getImageData(x, y, 1, 1);
    let data = pixel.data;
    let rgba = 'rgba(' + data[0] + ', ' + data[1] +
        ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    imageCanvas.style.background =  rgba;
    imageCanvas.textContent = rgba;*/
}





// 🎁 Here you go! 🎁
function showColorInfo( rgb ) {

    document.querySelector("#r").textContent = rgb.r;
    document.querySelector("#g").textContent = rgb.g;
    document.querySelector("#b").textContent = rgb.b;

    const hex = "#"+rgb.r.toString(16).padStart(2,"0")
                   +rgb.g.toString(16).padStart(2,"0")
                   +rgb.b.toString(16).padStart(2,"0");

    document.querySelector("#hex").textContent = hex;

    document.querySelector("#colorbox").style.backgroundColor = hex;
}