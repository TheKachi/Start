// Declare function accepting a single number or integer 
function numCheck (num) {
    // create new array
    let newNum = [];
    // loop through integer
    for (let i = 1; i <= num; i++) {
         if (i % 2===0 && i % 3 ===0) {
            // replace integer index
            newNum.push("yu-gi");
        } else if (i % 2 === 0 && i % 5 === 0) {
            newNum.push("yu-oh")   
        } else if (i % 3 === 0 && i % 5 ===0) {
            newNum.push("gi-oh")
        } else if (i % 2 === 0) {
            newNum.push("yu");
        } else if (i % 3 === 0) {
            newNum.push("gi");
        } else if (i % 5 === 0) {
            newNum.push('oh');
        } else {
            newNum.push(i);
        }    
    }   
    return newNum;
}

numCheck(100);

numCheck(23);