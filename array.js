var a=["ravipati","surya","ocean"];
a.push(7); //adding element at the end
console.log(a);
a.pop(); //deleting element at the end
console.log(a);
a.unshift(3); //adding element at the first
console.log(a);
a.shift(); //delecting element at end 
console.log(a);
a.reverse() //reversing the element
console.log(a);
console.log(a.indexOf("ocean")); //finding the value of index value 
console.log(a.includes("ravipati")); //finds thats the element includes are not
console.log(a.sort()); //to sort the element
console.log(a.join(" ")); //to change the array into string

var b=["boravelli","ocean","surya"];
b.push("nani");
b.shift();
console.log(b);

var c=[0,1,2,3,4];
console.log(c.reverse());
console.log(c.join(" "));

var d=["ravipati","surya","dhara"];
console.log(d.sort());
d.shift();
console.log(d);

var e=["charan","boravelli","nani","pallavi"];
e.unshift("ocean","deva");
e.shift();
console.log(e.length);

var f=["boravelli","ravipati"]
var ff=["charan","surya"]
var result=f.concat(ff)
result.shift();
console.log(result);