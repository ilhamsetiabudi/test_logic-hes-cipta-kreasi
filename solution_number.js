function solutionNumber(number){
    let max = 0;
    let increment = `${number}=`
    let list = []
    for (let a = 1; a < number; a++) {
        if (number === max) break;
        if (a > 20) break;
        if (a % 3 === 0 || a % 5 === 0) {
            max += a;
            list.push(a);
        }
    };
    if (max !== number) return 'invalid input number';
    const convert = list.toString().replace(/,/g, '+');
    return `${increment}${convert}`
}
console.log(solutionNumber(78))
