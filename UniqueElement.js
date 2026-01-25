function uniqueElement(arr){
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
            return arr[i];
        }
    }
}
console.log(uniqueElement([1,2,3,2,1])); //3
console.log(uniqueElement(['a','b','c','a','b'])); //c
console.log(uniqueElement([true, false, true])); //false