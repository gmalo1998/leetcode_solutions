//approach 1 : use map good for large arrays O(n) complexity

function uniqueElementFunction(arr){
    const result=[];
const map=new Map();
for(let element of arr){
    if(map.has(element)){
        map.set(element,map.get(element)+1);
    }
    else
    map.set(element,1);
}
for(let [key,value] of map){
    if(value===1){
        result.push(key);
    }
}
return result;
}
console.log("New :",uniqueElementFunction([1,2,3,2,1])); //3
console.log("New :" ,uniqueElementFunction([0, 0, 1, 1, 2, 2, 3, 3, 8, 4, 4, 9])); //8,9
console.log("New :",uniqueElementFunction(['a','b','c','a','b'])); //c
console.log("New :",uniqueElementFunction([true, false, true])); //false


//approach 2 : use indexOf and lastIndexOf  (not a good approach for large arrays due to O(n^2) complexity)

function uniqueElement(arr){
    const newarr=[];
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(uniqueElement([1,2,3,2,1])); //3
console.log(uniqueElement([0, 0, 1, 1, 2, 2, 3, 3, 8, 4, 4, 9])); //8,9
console.log(uniqueElement(['a','b','c','a','b'])); //c
console.log(uniqueElement([true, false, true])); //false