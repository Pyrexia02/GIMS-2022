let img = document.querySelector('#above');
let windowWidth = window.innerWidth;
if (windowWidth<950){
    img.src = 'pics/gims-gif-vertical.gif';
} else {
    img.src = 'pics/gims-gif.gif';
}