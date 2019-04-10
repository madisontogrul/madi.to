var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myVariable = [1,'Bob','Steve',10];
 /*
Everything in between is a comment.
*/
// This is a comment
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
document.getElementById("result").innerHTML=multiply(5, 20);
function divide(num1,num2) {
  var answer = num1 / num2;
  return answer;
}
document.getElementById("answer").innerHTML=divide(20, 5);
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/happy-squirrel.jpg') {
      myImage.setAttribute ('src','images/madi.jpg');
    } else {
      myImage.setAttribute ('src','images/happy-squirrel.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hey there, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hey there, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}