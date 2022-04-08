//define findMatching as a function, with two parameters that will become arguments
//returns matching list of names and is case insensative, matching names are: Bobby and bobby
function findMatching(names,string){
return names.filter(
    (matchedName) =>matchedName.toLowerCase()
    === string.toLowerCase())}


//Create a function named fuzzyMatch, has two parameters which become arguments
//thay questions the array? and then returns all names that begin with provided letters
//the provided letters are: Sa, y, mm(Sarah, Sammy, Sally)
function fuzzyMatch(driversName,string2){
    return driversName.filter(
        (matchedName)=>
   matchedName.toLowerCase().indexOf(string2.toLowerCase())
    ===0)

}
//Create a function matchName, with drivers and string as parameter, that will be arguments. 
//Each driver have keywords? name and hometown? then the function returns each element
//that has a name property that matches the provided string argument?
//drivers should be "Bobby" and hometown should be Pittsburgh and Tampa Bay
function matchName(drivers,hometown){
    return drivers.filter((obj) =>obj.name===hometown)
}
