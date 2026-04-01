function armstrong(num) {
   let d=0;
        let t=num;
        while(t>0){
            let r=t%10;
            d++;
            t=(t-r)/10;
    }
    let sum = 0;
    t = num;
    while (t > 0) {
        let r = t % 10;
        sum = sum + (r ** d);
        t=(t-r)/10;
    }
    return sum;
}
let n = 153;
    if(armstrong(n) == n){
        console.log(" armstrong number");
    }
        else{ 
            console.log("not armstrong number");
        }

        

        