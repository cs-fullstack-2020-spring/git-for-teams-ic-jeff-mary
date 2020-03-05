console.log("Team JS Linked");

// Get Reference variables for the three buttons
let buttonOne = document.getElementById("firstButton");
let buttoneTwo = document.getElementById("secondButton");
let buttoneThree = document.getElementById("thirdButton");
let boxDText = docment.getElementById("boxD");
// Debug Check to make sure the right elements were selected
console.log(buttonOne);
console.log(buttoneTwo);
console.log(buttoneThree);
console.log(boxDText);

// Create event listeners & functions(Arrow) to give actions to buttons 
changeBackgroundA = (btn1click) => {

};
buttonOne.addEventListener("click", changeBackgroundA);

changeBackgroundB = (btn2click) => {

};
buttoneTwo.addEventListener("click", changeBackgroundB);

UserChangeText = (btn3click) => {
    let userText = prompt("Enter a word");
    boxDText.innerHTML = userText;
};
buttoneThree.addEventListener("click", UserChangeText);



