function fibonaccci(params) {
    let fib = [];
    for (let a = 0; a < params; a++) {
        if (fib.length <= 1) {
            fib.push(a);
        } else {
            const add = fib[a-2] + fib[a-1];
            fib.push(add);
        };       
    };
    return fib;
}

function result(input) {
    let count = 0;
    let margin = 0;
    for (let a = 0; a < input.length; a++) {
        count += input[a]
    };
    const toFib = fibonaccci(count);
    for (let b = 0; b < toFib.length; b++) {
        if (toFib[b] < count) {
            if (margin < 1) {
                margin = count - toFib[b];
            } else if (margin > count - toFib[b]) {
                margin = count - toFib[b];
            }
        } else if (toFib[b] > count && margin > (toFib[b] - count)) {
            margin = toFib[b] - count;
        };
    };
    return margin;
}

console.log(result([15,1,3]))