//Create a function that print a poem.
function printPoem(){
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are");
}
printPoem();

//Create a function to roll a dice & always display the value of the dice(1 to 6).
function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();

//Create a function that give us average of 3 number.
function calcAvg(a,b,c){
    let avg = (a + b + c)/3;
    console.log(avg);
}
calcAvg(3,3,3);

//Create a function that prints the multiplication table of number.
function calcTable(n){
  for(let i=1; i<=10; i++){
    console.log(`${n} * ${i} = ${n*i}`);
  }
}
calcTable(5);

//Create a function that returns the sum of number from 1 to n.
function getSum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}
console.log(getSum());


//Create a function that returns the concatenation of strings in an array
let str = ["hii" , "hello" , "bye" ,"!"];
function concate(str){
    let result = "";
    for(let i=0; i<str.lenght; i++){
        result += str[i];
    }  
    return result; 
}
console.log(concate(str));