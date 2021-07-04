// Ejercicio 2

const redButton = document.getElementById("btn-1");
redButton.addEventListener("click", function() {
    document.getElementById("caja").setAttribute("style", "background-color: #e53e3e; border: 1px solid black; width: 100%; height: 100%");
});

const orangeButton = document.getElementById("btn-2");
orangeButton.addEventListener("click", function(){
    document.getElementById("caja").setAttribute("style", "background-color: #dd6b20; border: 1px solid black; width: 100%; height: 100%");
});

const yellowButton = document.getElementById("btn-3");
yellowButton.addEventListener("click", function(){
    document.getElementById("caja").setAttribute("style", "background-color: #faf089; border: 1px solid black; width: 100%; height: 100%");
});

const greenButton = document.getElementById("btn-4");
greenButton.addEventListener("click", function(){
    document.getElementById("caja").setAttribute("style", "background-color: #48bb78; border: 1px solid black; width: 100%; height: 100%");
});

const blueLightButton = document.getElementById("btn-5");
blueLightButton.addEventListener("click", function(){
    document.getElementById("caja").setAttribute("style", "background-color: #81e6d9; border: 1px solid black; width: 100%; height: 100%");
});

const pinkButton = document.getElementById("btn-6");
pinkButton.addEventListener("click", function(){
    document.getElementById("caja").setAttribute("style", "background-color: #d53f8c; border: 1px solid black; width: 100%; height: 100%");
});

/////////////////////////////////////////////////////////

// function buttonsEvent() {
//     if (redButton == true) {
//         document.getElementById("caja").setAttribute("style", "background-color: #e53e3e; border: 1px solid black; width: 100%; height: 100%");
//     };
//     if (orangeButton == true) {
//         document.getElementById("caja").setAttribute("style", "background-color: #dd6b20; border: 1px solid black; width: 100%; height: 100%");
//     };
//     if (yellowButton == true) {
//         document.getElementById("caja").setAttribute("style", "background-color: #faf089; border: 1px solid black; width: 100%; height: 100%");
//     };
//     if (greenButton == true) {
//         document.getElementById("caja").setAttribute("style", "background-color: #48bb78; border: 1px solid black; width: 100%; height: 100%");
//     };
//     if (blueLightButton == true) {
//         document.getElementById("caja").setAttribute("style", "background-color: #81e6d9; border: 1px solid black; width: 100%; height: 100%");
//     };
//     if (pinkButton == true) {
//         document.getElementById("caja").setAttribute("style", "background-color: #d53f8c; border: 1px solid black; width: 100%; height: 100%");
//     };
// };

/////////////////////////////////////////////////////////

// const redButton = document.getElementById("btn-1");
// redButton.addEventListener("click", redButtonEvent);

// const orangeButton = document.getElementById("btn-2");
// orangeButton.addEventListener("click", orangeButtonEvent);

// const yellowButton = document.getElementById("btn-3");
// yellowButton.addEventListener("click", yellowButtonEvent);

// const greenButton = document.getElementById("btn-4");
// greenButton.addEventListener("click", greenButtonEvent);

// const blueLightButton = document.getElementById("btn-5");
// blueLightButton.addEventListener("click", blueLightButtonEvent);

// const pinkButton = document.getElementById("btn-6");
// pinkButton.addEventListener("click", pinkButtonEvent);


// function redButtonEvent() {
//     document.getElementById("caja").setAttribute("style", "background-color: #e53e3e; border: 1px solid black; width: 100%; height: 100%");
// }; 

// function orangeButtonEvent() {
//     document.getElementById("caja").setAttribute("style", "background-color: #dd6b20; border: 1px solid black; width: 100%; height: 100%");
// }; 

// function yellowButtonEvent() {
//     document.getElementById("caja").setAttribute("style", "background-color: #faf089; border: 1px solid black; width: 100%; height: 100%");
// }; 

// function greenButtonEvent() {
//     document.getElementById("caja").setAttribute("style", "background-color: #48bb78; border: 1px solid black; width: 100%; height: 100%");
// }; 

// function blueLightButtonEvent() {
//     document.getElementById("caja").setAttribute("style", "background-color: #81e6d9; border: 1px solid black; width: 100%; height: 100%");
// }; 

// function pinkButtonEvent() {
//     document.getElementById("caja").setAttribute("style", "background-color: #d53f8c; border: 1px solid black; width: 100%; height: 100%");
// }; 