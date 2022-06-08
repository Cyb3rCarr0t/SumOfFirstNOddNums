function sumOfOdds(n){
    if(n > 0)
        if(n === 1 ) 
            return n; //base case
        else 
            return ((n*2)-1 + sumOfOdds(n-1) ); //formula to find nth odd num + recursive remainding odd nums
   return 0;
            
}

console.log(sumOfOdds(5));
console.log(sumOfOdds(10));
console.log(sumOfOdds(1));
console.log(sumOfOdds(0));
