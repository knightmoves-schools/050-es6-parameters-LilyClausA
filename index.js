let calculateTotal = function (a, b = 2.50){
    return a + b;
}
let printTopThreeHeadlines = function (...value){

    return headlines.slice(0, 3).join("\n");

}

//result = printTopThreeHeadlines(`first headline, second headline, third headline`)


document.getElementById("result").innerHTML = printTopThreeHeadlines;


//    ✕ should create a function named printTopThreeHeadlines that takes a rest
//  parameter list of string headlines named headlines and returns the top three
//  headlines with a new line between each headline (127 ms)
//
//    expect(received).toBe(expected) // Object.is equality
//  
  //    - Expected  - 3
    //  + Received  + 1
  //
    //  - first headline
      //- second headline
//      - third headline
  //    + second headline
      //
     //  expect(result.trim()).toBe(`first headline\nsecond headline\nthird headline`)
