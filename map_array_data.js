function mapArrayData(data) {
    let result = [];
    let num;
    for (let a = 0; a < data.length; a++) {
        num = 1;
        for (let b = 0; b < data.length;b++) {
            if (a === b) continue;
            num = num * data[b]
        }
        result.push(num);
    }
    return result;
};

const arr = [16,17,4,3,5,2]
console.log(mapArrayData(arr))