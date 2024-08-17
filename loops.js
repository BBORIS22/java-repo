// for
for( let i = 0 ; i <= 10 ; i++) {
console.log(`for loop number : ${i}`);
}

// while
// let i = 0
// while (i < 10) {
//     console.log(`for loop number : ${i}`);
//     i++;
// }


let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA"
  };

  for (let code in codes) {
    console.log(+code);
  }