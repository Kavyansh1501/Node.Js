function palindrome(string){
    let l=0;
    let r=string.length-1;
    while(l<r){
        if(string[l] !== string[r]){
            return 0;
        }
        l++;
        r--;
    }
    return 1;
}
let string = "nitin";
if(palindrome(string)==1){
    console.log("is a palindrome");
}
else{
    console.log("is not a palindrome");
}
