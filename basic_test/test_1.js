const { isArray, isExist, isPositiveNumber, isMaxNumber, isNotString } = require("../helper/validation");


module.exports = (numbers, sumNumber = 1) => {
    try {
        const maxNumberInput = 1000000000
        
        _validationNumbers(numbers, maxNumberInput)
        _validationSumNumbers(sumNumber, maxNumberInput)

        const length = numbers.length
        let sumMinimum = 0, sumMaximum = 0;

        for (let index = 0; index < length; index++) {
            const element = numbers[index];
            sumMinimum = index < sumNumber ? sumMinimum += element : sumMinimum
            sumMaximum = index >= length - sumNumber ? sumMaximum += element : sumMaximum
        }
        
        return `${sumMinimum} ${sumMaximum}`
    } catch (error) {
        return error
    }
    
}

const _validationNumbers = (numbers, maxNumberInput) => {
    try {
        isExist(numbers)
        let checkIsArray = isArray(numbers)

        let index = 0;
        while(checkIsArray === true && index < numbers.length){
            if(isNaN(numbers[index])) checkIsArray = false
            else {
                isNotString(numbers[index])
                isPositiveNumber(numbers[index]) 
                isMaxNumber(numbers[index], maxNumberInput)
            }
            index++
        }

        return true
    } catch (error) {
        throw error
    }
}

const _validationSumNumbers = (number, maxNumberInput) => {
    try {
        isExist(number)
        isNotString(number)
        isPositiveNumber(number)
        isMaxNumber(number, maxNumberInput)
        return true
    } catch (error) {
        throw error
    }
}

