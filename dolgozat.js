//elso feladat
function getCount(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
//masodik feladat
function filter_list(input) {
    return input.filter(item => typeof item === 'number');
}
//harmadik feladat
function hasUniqueChars(str) {
    const seen = new Set();
    for (let char of str) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }
    return true;
}
//negyedik feladat
function divisors(n) {
    const result = [];
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }
    return result.length > 0 ? result : `${n} is prime`;
}