function isEvenOrOdd() {
  var number = document.getElementById("number").value;
  var result = document.getElementById("result");


  if (number % 2 === 0 && number > 0) {
  
    result.innerHTML = `${number} is even`;
    console.log("number is even false "+ number)
  } else {
    result.innerHTML = `${number} is odd`;
    console.log("number is odd true "+  number)
  }
}
