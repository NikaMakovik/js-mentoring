// 1. create a function of adding two numbers
function addingTwoNumbers(a, b) {
    return a+b
}

// 2. create a  function of determining the name (if your name, then hello + name)
function determiningName(name) {
    if (name == 'Nika') console.log(`hello, ${name}`)
}

// 3. create of calculating the type of argument and output to the console
function whatType(argument) {
    console.log(typeof(argument))
    return typeof(argument) //?
}

// 4. create a function of selecting even elements of the array (returns a new array)
function evenElements(array) {
    newArr = []
    for (i = 0; i < array.length; i+=2) {
        newArr.push (array[i])
    }
    return newArr
}

console.log(addingTwoNumbers(2,3))
determiningName('Nika')
whatType('dd')
console.log(evenElements([-1, 2, 3, -9]))