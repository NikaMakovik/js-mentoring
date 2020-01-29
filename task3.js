//1
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?
//answer: 4


//2
styles = ['jazz', 'blues']
styles.push ('rock n roll')
if (styles.length%2==0) middle=styles.length/2
else middle=styles.length/2-0.5
styles[middle]='classic'
console.log (styles.shift())
styles.unshift('rap', 'reggie')
console.log (styles) //[ 'rap', 'reggie', 'classic', 'rock n roll' ]


//3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?
// answer: a,b,function(){
//     alert(this);
// }


//4
function sumInput()
{
    arrNumbers = []
    sum=0
    while (true) {
        num=prompt('number',0)
        if (num==''||num==null) break;
        arrNumbers.push(+num)
    }
    for(number of arrNumbers) {
        sum+=number;
    }
    alert(sum)
    return sum
}


//5
function getMaxSubSum(arr)
{
    maxArr = []
    maxsum=0
    i=0
    for (i=0; i<arr.length; i++) {
        sum=0
        for (j=i; j<arr.length; j++) {
            sum+=arr[j]
            maxsum=Math.max(maxsum, sum);
        }
    }
    return maxsum
}
console.log(getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log(getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log(getMaxSubSum([1, 2, 3]) ); // 6
console.log(getMaxSubSum([-1, -2, -3]) ); // 0

