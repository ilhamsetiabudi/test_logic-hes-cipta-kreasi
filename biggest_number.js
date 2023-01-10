function maxReDigit(data) {
    if (!data) {
        return null;
    } else if (typeof(data) !== 'number') {
        return 'data must be a number'
    } else if (data < 1) {
        return null;
    };
    let array = [];
    const string = data.toString();
    for (let a = 0; a < string.length; a++) {
        for (let b = 0; b < string.length; b++) {
            if (string.charAt(a) === string.charAt(b)) {
                return null;
            };
        };
        array.push(Number(string.charAt(a)));
    };
    array.sort();
    const reverse = array.reverse();
    const result = Number(reverse.toString().replace(/,/g,''));
    return result;
}

console.log(maxReDigit(1000));