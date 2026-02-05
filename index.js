let calculateTotal = function (a, b = 2.50){
    return a + b;
}
function printTopThreeHeadlines(...headlines) { 
  return headlines.slice(0, 3).join("\n"); 
} 

document.getElementById("result").innerHTML = printTopThreeHeadlines("first headline", "second headline", "third headline");


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
