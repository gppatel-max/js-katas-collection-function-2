function sum(a,b) {
    return a + b
}
console.log(sum(2,4))

function multiply(a,b){
    let count = 0
    let total = 0
    
    while (count < b) {
        total = sum (a,total)
      count ++
    }
    return total
}
console.log(multiply(6,4))

function power(x,n) {
let count = 0
let total = 1

while(count < n) {
total = multiply(x, total)
// console.log(count,x)
count ++
 }
return total
}
console.log(power(2,8))

function power(x,n) {
    let count = 0
    let total = 1
    
    while(count < n) {
    total = multiply(x, total)
    // console.log(count,x)
    count ++
     }
    return total
    }
    console.log(power(3,4))

   function fact(x){
       let count = 0
       let total = 1

       while (count < x){
           total=multiply(x -count,total)
           count ++
           
       }
       return total
   }
   console.log(fact(5))

   function fibonacci(n) {
   let num1 = 0
   let num2 = 1
   let sum 
   let i = 2
   while (i < n) {
       sum=num1+num2
       num1=num2
       num2=sum
       i ++
   }
   return num2
   }
console.log(fibonacci(8))
