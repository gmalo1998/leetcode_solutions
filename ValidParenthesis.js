/*Input: s = "()"
Output: true
Example 2:
Input: s = "()[]{}"
Output: true
Example 3:
Input: s = "(]"
Output: false */


//(Best)Approach 1: Using replace method to remove valid parenthesis until no more can be removed.

function isValidParenthesis(str) {
    if(str.length===0) return false;
    const map={
        ')':'(',
        '}':'{',
        ']':'['
    }

    let stack=[];
    for(let element of str){
        if(element==='('||element==='{'||element==='[')
            stack.push(element);
        else {
            if(stack.pop()!==map[element])
                return false;
        }
    }
    return stack.length===0?true:false;
}



//Approach 2: Using stack data structure to keep track of opening brackets and match them with closing brackets.
function isValid(str){
    const stack=[];
   if(str.length===0) return false;
   for(let element of str){
    if(element==='('||element==='{'||element==='['){
        stack.push(element);
    }
    else{
        if(element===')'){
            if(stack[stack.length-1]==='(')
                stack.pop();
            else
                return false;
        }
        else if(element==='}'){
            if(stack[stack.length-1]==='{')
                stack.pop();
            else
                return false;
        }else if(element===']'){
             if(stack[stack.length-1]==='[')
            stack.pop();
        else
            return false;
        
    }
   }
}
   return stack.length!==0?false:true;
}

console.log(isValid("[")) 
console.log(isValidParenthesis("["));