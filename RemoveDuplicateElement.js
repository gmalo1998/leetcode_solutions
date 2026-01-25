//Approach 1: without using map,set 


function removeDuplicateElements(arr){
    if(arr.length===0) return 0;
    arr.sort((a,b)=>b-a);
    let result=[];
    result.push(arr[0]);
    for(let i=1;i<arr.length;i++){
    if(arr[i]!==arr[i-1])
    result.push(arr[i]);
}
return result;
}

console.log(removeDuplicateElements([1,2,2,3,4,4,5,5,5,6])); // [6,5,4,3,2,1]
console.log(removeDuplicateElements([7,7,7,7,7]));


console.log("interviewer ask the order should not be change");

function removeDuplicateElementsPreserveOrder(arr){
    if(arr.length===0) return 0;
    const result=[];
    for(let i=0;i<arr.length;i++){
        let isDuplicate=false;
        for(let j=0;j<i;j++){
            if(arr[i]===arr[j]){
                isDuplicate=true;
                break;
            }
        }
        if(isDuplicate===false){
            result.push(arr[i]);    
    }
}
  return result;
}
console.log("remove duplicates preserving order: " ,removeDuplicateElementsPreserveOrder([1,2,2,3,4,4,5,5,5,6])); // [1,2,3,4,5,6];






//Approach 2: useing set 
const arr=[1,2,2,3,4,4,5,5,5,6];
const removeDuplicates=new Set([...arr]);  //directly converting set to array
console.log(removeDuplicates);

//Aproach 3: using map  will count all the elements and provide only the key 

console.log("Using map to remove duplicates:");

function removeDuplicatesUsingMap(arr){
    let map=new Map();
    for(let element of arr){
        if(map.has(element)){
            map.set(element,map.get(element)+1);
        }else{
            map.set(element,1);
        }
    }
    return Array.from(map.keys());

}

console.log(removeDuplicatesUsingMap([1,2,2,3,4,4,5,5,5,6])); // [1,2,3,4,5,6]
console.log(removeDuplicatesUsingMap([7,7,7,7,7])); // [7]

