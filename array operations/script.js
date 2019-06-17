var pens;
pens =["red","blue","green","black"];

console.log("before:" +pens);

//properties:
//get property of an object by name
console.log("array length is :" + pens.length);

//methods:
//method to reverse the contents of an array:
pens.reverse();

console.log("after reversing : " +pens);

//remove the first element of an array:
pens.shift();
console.log("after shifting :"+pens);

//add comma separated values to the starting of an array:
pens.unshift("yellow","purple");
console.log("after unshifting:"+pens);

//remove the last element of an array:
pens.pop();
console.log("after popping:"+pens);

//add comma separed values to the end of an array:
pens.push("grey","white");
console.log("after pushing:"+pens);

// to find a specified position and remove n number of elements :
pens.splice(3,1); //starts at the 3rd item and removes the next elements
console.log("after splicing:"+pens);

//create a copy of an array and store it in another array:
var pen1 = pens.slice();
console.log("new array:"+pen1);

//returns the first element that matches the search
var result=pens.indexOf("grey",0);
console.log("the index is:"+result);

//to output the elements of an array as a comma separated starting
var arrayString = pens.join(", ");//if you wish to have space between the comma and each element after it
console.log("the array string is :"+arrayString);
