// // chapter 17-20

// Q NO 1
// var arr=[[1,2,3],["a","b","c"]];

// Q NO 1
// var arr=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];

// Q NO 3

// for (var i=0; i<10; i++)
// document.write(i+"</br>");
// document.write("<br><br>");

// Q NO 4

// var x=+prompt("Enter a number to show its multiplication table");
// var l=+prompt("Enter length multiplication table");
// document.write("Multiplication table of "+x);
// document.write("<br>Length "+l);
// for(var i=1;i<=l;i++){
//     document.write("<br>"+x+" x "+i+" = "+x*i);
// }
// document.write("<br><br>");

// Q NO 5

// var fruits =["apple","banana","mango","orange","stawberry"];
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>");
// }
// for(var i=0;i<fruits.length;i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }
// document.write("<br><br>");

// Q NO 6

// document.write("Counting:");
// for(var i=1;i<=15;i++){
//     document.write(i+", ");
// }
// document.write("<br>Reverse counting:");
// for(var i=10;i>=1;i--){
// //     document.write(i+", ");
// }
// document.write("<br>Even:");
// for(var i=0;i<=20;i+=2){
//     document.write(i+", ");
// }

// document.write("<br>Odd:");
// for(var i=1;i<=19;i+=2){
//     document.write(i+", ");
// }


// document.write("<br>Series:");
// for(var i=2;i<=20;i+=2){
//     document.write(i+"k, ");
// }


// Q NO 7

// var A=["cake","apple pie","cookie","chips","patties"];
// var x=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for (var i=0; i<A.length; i++){
//     if (A[i]=== x) {
//     var a = "found";
//     b = i;
// }
// }
// if (a === "found") {
//     document.write(x + "is available at inbex  " +b+ " in our bakery");
// }
// else {
//     document.write("we are sorry "+x+ " is not avaibale in our bakery");
// }

// document.write("<br><br>")

// Q NO 8

// var A=[24,53,78,91,12];
// document.write("Array items: ");
// document.write(A);
// var max=A[0];
// for(var i=0;i<A.length;i++){
//     if(A[i]>max){
//         max=A[i];
//     }
// }
// document.write("<br>The largest number is "+max);
// document.write("<br><br>");

// Q NO 9
// var A=[24,53,78,91,12];
// document.write("Array items: ");
// document.write(A);
// var min=A[0];
// for(var i=0;i<A.length;i++){
//     if(A[i]<min){
//         min=A[i];
//     }
// }
// document.write("<br>The smallest number is "+min);
// document.write("<br><br>");

// Q NO 10

// var x=5;
// for(var i=1;i<=20;i++){
//     document.write(x*i+", ");
// }


                                            // CHATPTER NO 21 - 25

// Q NO 1

// var firstName=prompt("Enter your First Name:");
// var lastName= prompt("Enter your Last Name: ");
// var fullName = firstName +" "+ lastName;
// document.write("Welcome "+fullName);
// document.write("<br><br>");

// Q NO 2

// var mobile=prompt("Enter your favourite model number");
// var length =mobile.length;
// document.write("my favourite mobile phone is:" +mobile+"<br>");
// document.write("Length of String is:"+length);

// Q NO 3

// var word = "pakistani";
// var index = word.indexOf("n")
// document.write("string: "+ word);
// document.write("<br>Index of 'n': "+index)

// Q NO 4

// var word = "Hello World";
// var index = word.lastIndexOf("l");
// document.write("string: "+ word);
// document.write("<br>Last Index of 'l': "+index);

// Q No 5

// var word = "Pakistani";
// var char = word.charAt(3);
// document.write("String: "+word);
// document.write("<br>Character at index 3: "+char);
// document.write("<br><br>");

// Q NO 6

// var word = "Pakistani";
// var char = word.charAt(3);
// document.write("String: "+word);
// document.write("<br>Character at index 3: "+char);
// document.write("<br><br>");

// Q NO 7

// var firstName=prompt("Enter your First Name:");
// var lastName= prompt("Enter your Last Name: ");
// var fullName = firstName.concat(" ",lastName);
// document.write("Welcome "+fullName);
// document.write("<br><br>");

// Q No 8

// var city = "Hyderabad";
// var part = city.split("Hyder");
// var replaced = part.join("Islam");
// document.write("City: "+city);
// document.write("<br>After replacement: "+replaced);
// document.write("<br><br>");


// Q NO 9

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var part  = message.split("and");
// var replaced = part.join("&");
// document.write(message);
// document.write("<br>"+replaced); 
// document.write("<br><br>");

// Q No10

// var string = "472";
// var number = parseInt(string);
// document.write("Value: "+string);
// document.write("<br>Type: "+typeof(string));
// document.write("<br>Value: "+number);
// document.write("<br>Type: "+typeof(number));

// Q NO 11

// var word = prompt("Enter a word:");
// var capital = word.toUpperCase();
// document.write("User input: "+word);
// document.write("<br>Upper case: "+capital);
// document.write("<br><br>");

// Q NO 12

// var word = prompt("Enter a word:");
// var firstletter = word.charAt(0).toUpperCase();
// var remaingletter = word.slice(1,word.length).toLowerCase();
// var capital = firstletter+remaingletter;
// document.write("User input: "+word);
// document.write("<br>Upper case: "+capital);
// document.write("<br><br>");


// var num = 35.36;
// var string = num.toString().replace(".","");
// document.write("Number: "+num);
// document.write("<br>Result: "+string);
// document.write("<br><br>");z

// Q NO 13

// var x = prompt("Enter your Name:");
// for(var i=0;i<=x.length;i++){
//     if(x[i]=="!" || x[i]=="@" || x[i]=="." || x[i]==","){
//         document.write("Please enter a valid username");
//     }
// }

// Q NO 14

// var A=["cake","apple pie","cookie","chips","patties"]
// var x=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// x = x.toLocaleLowerCase()
// for(var i=0;i<A.length;i++){
//     if(A[i]===x){
//         var a = "found";
//         var b =i;
//     }
// }
// if(a==="found"){
//     document.write(x+" is available at index "+b+" in our bakery");
// }
// else{
//     document.write("We are sorry. "+x+" is not available in our bakery");
// }

// Q NO 16

// var university = "university of karachi";
// var array = university.split(" ");

// for (var i=0;i<array.length;i++){
//     for (var j=0; j<array[i].length;j++){
//         document.write(array[i][j]+"<br>");
//     }
//     document.write("<br>");
// }
// document.write("<br>");


// Q NO 17

var word = prompt ("Enter your word");
var l = word[word.length-1];

document.write("user input:"+word);
document.write("Last character of input:"+l);









