function mindleAlphabet(first, last) {
    let data = [];
    let abj = ''
    const alpabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let a = 0; a < alpabet.length; a++) {
        if (alpabet[a] === first) {
            data.push(a+1)
        };
        if (alpabet[a] === last) {
            data.push(a-1)
        };
    };
    const margin = (data[1] - data[0])+1;
    const range = margin % 2;
    console.log(data[0], data[1]);
    if (range === 0) {
        if (data[1] - data[0] === 1) {
            for (let x = data[0]; x <= data[1]; x++) {
                abj += alpabet[x];
            };
        } else {
            const margin2 = (data[1] - (data[0]-1)) / 2;
            abj += `${alpabet[margin2+data[0]-1]}${alpabet[(margin2)+data[0]]}`;
        };
    } else {
        const mid = Math.ceil(margin / 2);
        const index = (mid - 1) + data[0];
        abj += alpabet[index]
    }
    return abj;
}

console.log(mindleAlphabet('R','U'));