/*function myFunction() {
   
   document.getElementById("demo").innerHTML = Math.floor(-2.2);

   console.log(NumberFloor);
}

myFunction();
*/

// randomnumber between 0 and 1 displayed in console
function RandomNumber() {

    //document.getElementById("demo2").innerHTML =Math.random();
  
    let randomNumber = Math.random();
    console.log(randomNumber);
}

RandomNumber();


// random number displayed in console


function RandomNumberNoDecimals() {

    //document.getElementById("demo2").innerHTML =Math.random();
  
    let randomNumberNoDec = Math.floor((Math.random() * 10) + 1);
    console.log(randomNumberNoDec);
}

RandomNumberNoDecimals();