const input = document.querySelector(".numberInput");
const para = document.querySelector("p");

//function fizz(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
  //      return "FIZZ-BUZZ"
    //} else if (num % 3 === 0) {
      //  return "FIZZ";
   // } else if (num % 5 === 0) {
   //     return "BUZZ";
   // }  else {
     //   return num;
//}
//}

function fizz(num) {
    for(i = 1; i <= num; i++) {
        if (num % 3 === 0 && num % 5 === 0) {
            return "FIZZ-BUZZ"
        } else if (num % 3 === 0) {
            return "FIZZ";
        } else if (num % 5 === 0) {
            return "BUZZ";
        }  else {
            return num;
        }
    }
}


input.onchange = function() {
    const num = input.value;
    if (isNaN(num)) {
        para.textContent = "You need to put in a number!";
    } else {
        para.textContent = fizz(num);
    }
}