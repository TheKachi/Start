// Declare function accepting a single number or integer 
let newNum = [];

function numCheck (num) {

    if (num % 2 === 0) {
        newNum.push("yu");
    } else if (num % 3 === 0) {
        newNum.push("gi");
    } else if (num % 5 === 0) {
        newNum.push('oh');
    } else if (num % 2===0 && num % 3 ===0) {
        newNum.push("yu-gi")
    } else if (num % 2 === 0 && num % 5 === 0) {
        newNum.push("yu-oh")
    } else if (num % 3 === 0 && num % 5 ===0) {
        newNum.push("gi-oh")
    } else {
        newNum.push(num);
    }     
  
    return newNum;
}
numCheck(100);