function prime(n) {
let count=0;
     for (let j = 1; j <= n; j++) {
         if (n % j == 0) {
             count++;
         }
        }
        return count;
}
   
for (let i = 1; i <= 100; i++) {
     let x= prime(i);
     if(x==2){
            console.log(i);
     }
}
    