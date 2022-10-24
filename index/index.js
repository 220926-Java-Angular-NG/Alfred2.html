// document.getElementById("myButton").onclick = function(){
//     var myName = document.getElementById("myText").value;
//     console.log("Hello",myName)
// }
// function myFunction(){
//     let myText = document.getElementById("myText");
//     let message = document.getElementById("message");

//     message.innerHTML = "Welcome to my webpage, " + myText.value + ", you're an AWESOME PERSON";
// }
// function myFunction(){
//     let myText = document.getElementById("myText");
//     let message = document.getElementById("message");
// }
let boardDiv = document.getElementById("board");
let displayButton = document.getElementById("myButton");

displayButton.addEventListener('click', (event)  =>{
    event.preventDefault();
    let myText = document.getElementById("myText");
    let nickName = document.getElementById("nickname");
    let favSong = document.getElementById("song");
    let message = " Hello, " + myText.value + ", aka " + nickName.value + ", who's favorite song is " + favSong.value + ".  You're an AWESOME PERSON! HAVE A GREAT DAY!";

    let newItem = document.createElement('h3');
    newItem.innerHTML = message;

    //adding a new element to our DOM
    boardDiv.appendChild(newItem);

    textInput.value = '';
});








