

function LongestCommonPrefix(arr){

    if(arr.length===0) return "";
    let prefix=arr[0];
    let i=1;
    while(i<arr.length){
        if(arr[i].startsWith(prefix)){
            i++;
        }
        else{
            prefix=prefix.substring(0,prefix.length-1);
        } 
    }
    return prefix;

}

/*  optimized approach
if (arr.length === 0) return "";
for (let i = 0; i < arr[0].length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[j][i] !== arr[0][i]) {
            return arr[0].slice(0, i);
        }
    }
}

*/




console.log(LongestCommonPrefix([])); // "fl"