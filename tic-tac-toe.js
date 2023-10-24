window.onload = code;

function code(){
    console.log("Hey Sun Ray!");
    // let boxes = Array.from(document.getElementById('board').children);
    let boxes = document.getElementById('board').children;
    console.log(boxes);
    for (i = 0; i < boxes.length; i++){
        boxes[i].setAttribute("class", '.square');
    }
}