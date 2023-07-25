// length
var arr = [1,2,3,4,5];
console.log(arr.length);


// push
console.log("push:");

arr.push(6);
arr.push("Qualquer coisa");
console.log(arr);


// pop
console.log("pop:")

arr.pop();
console.log(arr);


// unshift
console.log("unshift:");

arr.unshift(0);
console.log(arr);


// shift
console.log("shift:");

arr.shift();
console.log(arr);


// acessar o último elemento
console.log("Último elemento:")

console.log(arr[arr.length - 1]);


// splice
console.log("splice:");

var arr2 = [1,2,3,4,5,]
arr2.splice(2, 0, 999);
console.log(arr2);


// indexOf
console.log("indexOf:");

console.log(arr2.indexOf(2));


// join
console.log("join:");

var arr3 = ["O", "rato", "roeu", "a", "roupa"];
console.log(arr3.join(" "));