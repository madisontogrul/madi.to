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