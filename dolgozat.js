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
function filter_list(l) {
    return l.filter(l => typeof l === 'number');
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
function divisors(integer) {
    const result = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            result.push(i);
        }
    }
    return result.length > 0 ? result : `${integer} is prime`;
}