let calculateTotal = function (a, b = 2.50){
    return a + b;
}
let printTopThreeHeadlines = function (...value){

    result = printTopThreeHeadlines(`first headline, second headline, third headline`)
   
}

document.getElementById("result").innerHTML = calculateTotal;


//    ✕ should create a function named printTopThreeHeadlines that takes a rest
//  parameter list of string headlines named headlines and returns the top three
//  headlines with a new line between each headline (127 ms)
//
//    TypeError: Cannot read properties of undefined (reading 'trim')

//   expect(result.trim()).toBe(`first headline\nsecond headline\nthird headline`)
