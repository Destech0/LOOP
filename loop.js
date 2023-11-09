for (i=0; i=2; i++) {
    //Do Something
}
/* i=0 => starting point
   i=2 => Ending point
   i++ => Changing direction
*/
   for(var i=1; i<2; i++) {
    console.log(i);
   }

   //Exercise: FIBONACCI sequence challenge
   function fibonacciGenerator (n) {
    var output = [];
    if (n===1) {
        output = [0];
    }
    else if (n===2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];
        for (var i=2; i<n; i++) {
            output.push(output[output.length-2] + output[output.length-1]);
        }
    }
    return output;
   }
   output = FibonacciGenerator(n);
   console.log(output)
   (n) = 5 // [0, 1, 1, 2, 3].