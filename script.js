const genButton = document.getElementsByClassName("btn");
const inputBox1 = document.getElementById("pass-1");
const inputBox2 = document.getElementById("pass-2");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function copyFirst(fpass,spass){
    
}
function generatePassword(){
    const userInput = document.getElementById("inputLength").value;

    // let passwordLength = 15;
    let firstPass = "";
    let secondPass = "";

    for (let i = 0; i < userInput; i++) {
        firstPass += characters[Math.floor(Math.random() * characters.length)];
        secondPass += characters[Math.floor(Math.random() * characters.length)];
    }
    inputBox1.value = firstPass;
    inputBox2.value = secondPass;
    let firstInput = firstPass;
    let secondInput = secondPass;
    copyFirst(firstInput,secondInput);
}
inputBox1.addEventListener('keypress', (e) => {
    e.preventDefault();
})