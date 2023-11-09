 //while loop
 var i = 1;
 while (i < 2) {
    console.log(i);
    i++;
 }
 // Solution to the 99 bottles of beer song lyrics using while-loop.

 var numberOfBottles = 99
 while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleword + " of beer,");
    console.log("Take one down, pass it around,");
         numberOfBottles--;
    console.log(numberOfBottles + " " + bottleword + " of beer on the wall.");
 }