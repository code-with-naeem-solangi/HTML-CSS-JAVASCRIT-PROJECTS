var imag = 0;

var imgesAll = [
    "chicago.jpg",
    "map.jpg",
    "newyork.jpg",
    "paris.jpg",
    "15f6a3aac562ee0fadbbad3d4cdf47bc.jpg",
    "360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    "nature-2ygv7ssy2k0lxlzu.jpg"
];

function imageschange(num) {
    var newImg = document.getElementById("imegs")
    
    imag += num;

    if (imag == -1) {
        imag = imgesAll.length -1;
    }
    
    if (imag === imgesAll.length){
        imag = 0;
    }
    console.log(imag)
    newImg.src=imgesAll[imag]
    
}