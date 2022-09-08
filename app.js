    const number= +prompt("Please enter a number up to 3000:");
    function roman(number){
    if(number >= 3888) return alert("Your number cannot be greater than 3000");
    if(number < 1) return "";
    if(number >= 1000) {return "M" + roman(number - 1000);}
    if(number >= 500) {return "D" + roman(number - 500);}
    if(number >= 100) {return "C" + roman(number - 100);}
    if(number >= 50) {return "L"  + roman(number - 50);}
    if(number >= 10) {return "X" + roman(number - 10);}
    if(number >= 9) {return "IX" + roman(number - 9);}
    if(number >= 5) {return "V"  + roman(number - 5);}
    if(number >= 4) {return "IV" + roman(number - 4);}
    if(number >= 1) {return "I" + roman(number - 1);}
}
console.log(`Roman number equivalent of the number you entered: ${roman(number)}\nThe number you entered: ${number}`);


