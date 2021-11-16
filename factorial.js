function factorial(n){
    // it will return 1 when input =1 or 0
    var factAnswer = 1;
    for(var i = 1; i <= n; i++){
        factAnswer = factAnswer * i;
    }
    return factAnswer;
}
console.log(factorial(5));
// function factorial(n){
//     var factorialAStd = 1;
//     for(var i = 1; i<=n;){
//         factorialAStd = factorialAStd * i;
//         i = i+1;
//     }
//     return factorialAStd;
// }
// console.log(factorial(5));