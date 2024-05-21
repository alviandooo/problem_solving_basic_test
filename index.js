const basicTest = require('./basic_test/index')

/* 
    problem solving basic - test 1
    arguments :
    - args 1 = array dari angka yang diinput
    - args 2 = jumlah element yang ingin ditambahkan (dari contoh dibawah berarti 4 element pertama & 4 element terakhir)
*/ 
const resultTest1 = basicTest.test1([1,3,5,7,9], 4)
console.log('problem solving basic - test 1')
console.log(resultTest1)

console.log('======================================')

/* 
    problem solving basic - test 2
    arguments :
    - args 1 = array dari angka yang diinput
*/ 
console.log('problem solving basic - test 2')
const resultTest2 = basicTest.test2([1,1,0,-1,-1])
console.log(resultTest2)

console.log('======================================')

/* 
    problem solving basic - test 2
    arguments :
    - args 1 = array dari angka yang diinput
*/ 
console.log('problem solving basic - test 3')
const time = '12:00:01AM'
const resultTest3 = basicTest.test3(time)
console.log(resultTest3)