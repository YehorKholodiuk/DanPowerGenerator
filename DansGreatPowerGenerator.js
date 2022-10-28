function danspower(num, power) {
    let res = Math.pow(num,power)
    return res % 2 ? Math.round(res/10) * 10 :res;
}
console.log(danspower(2,4))
