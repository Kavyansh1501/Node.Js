function fact (num){
    let f=1;
    for(let i=1;i<=num;i++){
        f=f*i;
    }
    return f;
}
function ncr(n, r) {
    let result = fact(n)/(fact(r)*fact(n-r));
    console.log("nCr =", result);
    return result;
}

console.log(ncr(15,4));