function search(array,num){
    let l=array.length;
    for(let i=0;i<l;i++){
        if(array[i]===num){

            return i;

        }
    }
    return 0;

}
let array=["hello","hi","sher","cheetah","rampal","harpal"];
let num="sher";
let x=search(array,num);
if(x!=0){
    console.log(num,"found",x);
}
else{
    console.log(num,"not found");
}
