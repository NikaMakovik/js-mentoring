// 5. solve all tasks at the end of the chapter
// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

console.log(reverseNum (32243))
console.log('is palindrome? ', isPalindrome(' nurses run'))
console.log(allCombinations('dog'))
console.log(alphabeticalOrder('webmaster'))
console.log(firstLettersToUpper('the quick brown fox'))
console.log(longestWord('Web Development Tutorial'))
console.log(countVowels('the quick brown fox'))
console.log('is prime?', isPrime(31))
console.log(whatTypeIs(true))
console.log(getMatrix(5))
console.log(secondGreatestLowest([1, -9, -12, 4, 2, 32]))
console.log('is perfect?', isPerfect(496))
console.log(getFactors(12))
console.log(amountTocoins(46, [25, 10, 5, 2, 1]))
console.log(pow(8, 2))
console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"))
console.log(eachLetterOccurrences('asfgfhdfsd'))
console.log(binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6))
console.log(arrayElementsLargerThan([25, 10, 5, 2, 1], 2))
console.log(generateString(5))
console.log(getSubset([1, 2, 3, 4, 5], 4))
console.log(howManyLetters('w3resource.com', 'o'))
console.log(notRepeatedCharacter('abacddbec'))
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))
console.log(substringWithoutRepeating('australia'))
console.log(longestPalindrome('bananas'))
console.log(funcAsParameter(notRepeatedCharacter, 'hhkn'))
console.log(getFuncName())

// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
function reverseNum (number)
{
    number = String(number)
    return number.split("").reverse().join("");
}

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(str) {
    str = str.replace(/ /g, '')
    palindrome = true
    for (i = 0; i <= str.length; i++) {
        if (str[i] != str[str.length - 1 - i]) palindrome = false
    }
    return palindrome
}

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
function allCombinations(str) {
    maxArr = []
    for (i = 0; i < str.length; i++) {
        combination = ''
        for (j = i; j < str.length; j++) {
            combination += str[j]
            maxArr.push(combination)
        }
    }
    return maxArr.join(', ')
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function alphabeticalOrder(str) {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    newstring = []
    for (i = 0; i < alphabet.length; i++) {
        regexp = new RegExp(alphabet[i], 'g');
        match = str.match(regexp)
        newstring.push (match)
    }
    return newstring.join('').replace(/,/g, '')
}

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the 
//      string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function firstLettersToUpper(str) {
    arr = str.split(' ')
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
    }
    return arr.join(' ')
}

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function longestWord(str) {
    arr = str.split(' ')
    maxLength = 0
    index = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            index = i
            maxLength = arr[i].length
        }
    }
    return arr[index]
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
function countVowels(str) {
    match = str.match(/a|e|i|o|u/g)
    return match.length
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(number) {
    prime = true
    for (i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) prime = false
    }
    return prime
}

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function whatTypeIs(argument) {
    return typeof(argument)
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function getMatrix(n) {
    // var newarr = new Array [n, n]
    var newarr = Array.apply(null, new Array(n)); 
    newarr = newarr.map(
        function(x, i) {
            return newarr.map(
            function(y, j) {
                if (i == j) return 1 
                else return 0
            })
        })
    return newarr
}

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest 
//     numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
function secondGreatestLowest(arr) {
    arr.sort((a, b) => a - b)
    return [arr[1], arr[arr.length - 2]]
}

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of 
// its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. 
// Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function isPerfect(number) {
    perfect = false
    divisors = []
    sum = 0
    for (i = 1; i <= number/2; i++) {
        if (number % i == 0) {
            divisors.push(i)
            sum += i
        }
    }
    if (sum == number) perfect = true
    return perfect
}

// 13. Write a JavaScript function to compute the factors of a positive integer.
function getFactors(number) {
    divisors = []
    for (i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            divisors.push(i)
        }
    }
    return divisors
}

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
function amountTocoins(amount, coins) {
    neededCoins = []
    for (i = 0; i < coins.length; i++) {
        num = Math.floor(amount / coins[i])
        if (num >= 1) {
            for (j = 0; j < num; j++) {
                neededCoins.push(coins[i])
                amount -= coins[i]
            }
        }
    }
    return neededCoins
}

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
//     Accept b and n from the user and display the result.
function pow(b, n) {
    var bn = 1
    for (i = 0; i < n; i++) {
        bn *= b;
    }
    return bn
}

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function uniqueCharacters(str) {
    newstring = []
    for (i = 0; i < str.length; i++) {
        if (!newstring.includes(str[i])) newstring.push(str[i])
    }
    return newstring.join('').replace(/,/g, '')
}

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
function eachLetterOccurrences(str) {
    newstring = []
    letters = []
    for (i = 0; i < str.length; i++) {
        if (!letters.includes(str[i])) {
            letters.push(str[i])
            regexp = new RegExp(str[i], 'g');
            match = str.match(regexp)
            newstring.push([str[i], match.length])
        }
    }
    return newstring.join(' ').replace(/,/g, '-')
}

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(arr, number) {
    var middle = Math.floor(arr.length / 2)
    if (arr[middle] == number) return middle
    else if (arr[middle] > number) return binarySearch(arr.slice(0, middle), number)
    else if (arr[middle] < number) {
        var newarr = arr.slice(middle + 1)
        var res = binarySearch(newarr, number)
        return res + middle + 1
    }
}
// 19. Write a JavaScript function that returns array elements larger than a number.
function arrayElementsLargerThan(arr, number) {
    newarr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > number) newarr.push(arr[i])
    }
    return newarr
}
// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateString(len) {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    newstr = ''
    for (i = 0; i < len; i++) {
        newstr += characters[Math.floor(Math.random() * characters.length)]
    }
    return newstr
}
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function getSubset(arr, n) {
    result = []
    for(var i = 0; i < Math.pow(2, arr.length); i++) {
        newarr = [];
        k = arr.length - 1; 
        do {
            if ((i & (1 << k)) !== 0) newarr.push(arr[k])
        } while(k--);
        if (newarr.length == n) result.push(newarr)
    }

    return result; 
}
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of 
//     occurrences of the specified letter within the string.
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2
function howManyLetters(str, letter) {
    regexp = new RegExp(letter, 'g');
    match = str.match(regexp)
    return match.length
}
// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
function notRepeatedCharacter(str) {
    var uniqueCharacter
    for (i = 0; i < str.length; i++) {
        regexp = new RegExp (str[i], 'g')
        match = str.match(regexp)
        if (match.length == 1) {
            uniqueCharacter = str[i]
            break;
        }
    }
    if (uniqueCharacter) return uniqueCharacter
    else return 'no such letter'
}
// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by 
//        repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are 
//        in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
    let needToSwap;
    let n = arr.length - 1;
    do {
        needToSwap = false;
        for (i = 0; i < n; i++)
        {
            if (arr[i] < arr[i+1])
            {
               let buff = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = buff;
               needToSwap = true;
            }
        }
        n--;
    } while (needToSwap);
 return arr; 
}
// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function Longest_Country_Name(arr) {
    maxLength = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length
            index = i
        }
    }
    return arr[index]
}
// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function substringWithoutRepeating(str) {
    newstr = ''
    finalstr = ''
    for (i = 0; i < str.length; i++) {
        if (!newstr.match(str[i])) {
            newstr += str[i]
        }
        else if (newstr[0] == str[i]) {
            newstr = newstr.substring(1, newstr.length)
            newstr += str[i]
        }
        else newstr = ''
        if (finalstr.length < newstr.length) finalstr = newstr
        
    }
    return finalstr
}
// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem 
//       is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, 
//       the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; 
//       for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are 
//       two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves 
//       palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning 
//       the maximum length of a palindromic substring.
function is_Palindrome(str) {
    var rev = str.split("").reverse().join("");
    return str == rev;
}

function longestPalindrome(str) {
    var maxLength = 0,
    maxp = '';
    for(var i = 0; i < str.length; i++) {
        var subs = str.substr(i, str.length);
        for(var j=subs.length; j>=0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1) continue;
            if (is_Palindrome(sub_subs_str)) {
                if (sub_subs_str.length > maxLength) {
                    maxLength = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }
        
    return maxp;
               
}
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function funcAsParameter(func, str) {
    return func(str)
}
// 29. Write a JavaScript function to get the function name. 
function getFuncName() {
    return arguments.callee.name
}
