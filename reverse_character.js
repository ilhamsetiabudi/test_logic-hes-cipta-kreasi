function reverseChar(input) {
    let char = [];
    const split = input.split(' ');
    for (let x = 0; x < split.length; x++) {
        if (split[x].length > 1) {
            let string = '';
            let isUpper = false;
            for (let a = split[x].length - 1; a >= 0; a--) {
                const cek = split[x].charCodeAt(a);
                if (cek < 97) isUpper = true;
                string += split[x][a];
            };
            if (isUpper) {
                const toLower = string.toLowerCase();
                const firstChar = toLower.substring(0,1).toUpperCase();
                char.push(`${firstChar}${toLower.substring(1, toLower.length)}`);
            } else {
                char.push(string.toLowerCase());
            }
        } else {
            char.push(split[x]);
        }
    }
    const convert = char.toString();
    const result = convert.replace(/,/g, ' ');
    return result;
}
console.log(reverseChar("I am A Great human"));