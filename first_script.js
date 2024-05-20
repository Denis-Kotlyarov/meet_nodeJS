const m = 25;
const n = 50;

function primeNum(num) {
    if (num <= 3) return true;
    if ((num <= 1) || (num % 2 === 0 || num % 3 === 0)) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

for (let i = m; i <= n; i++) {
    if (primeNum(i)) {
        console.log(i);
    }
}