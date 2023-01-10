function alternateCase(character) {
    let text = ''
    for (let a = 0; a < character.length; a++) {
        if (character.charCodeAt(a) >= 97) {
            text += character[a].toUpperCase()
        } else {
            text += character[a].toLowerCase()
        };    
    };
    return text;
}
const input = 'Hello World'
console.log(alternateCase(input));