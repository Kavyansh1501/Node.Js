function largest(array){
    let large=array[0];
    let l=array.length;
    for(let i=1;i<l;i++){
        if(array[i]>large){
            large=array[i];
        }
    }
    return large;

}
let array=[1,209,3,76,5,7,89,789,103,14,5,2,33];
console.log(largest(array));
