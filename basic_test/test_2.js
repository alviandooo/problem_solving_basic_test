const { isExist, isArray, isMinNumber, isMaxNumber, isPositiveNumber, isNotString } = require("../helper/validation");

module.exports =  (numbers) => {
    try {
        const maxNumberInput = 100
        const minNumberInput = -100
        _validationNumbers(numbers, minNumberInput, maxNumberInput)

        const length = numbers.length
        let positive = 0, negative = 0, zero = 0

        for (let index = 0; index < length; index++) {
            const element = numbers[index];
            if(element === 0) zero++
            else if(element > 0) positive++
            else negative++
        }

        const result = `${positive/length} ${negative/length} ${zero/length}`
        return result
    } catch (error) {
        return error
    }
    
}

const _validationNumbers = (numbers, minNumberInput, maxNumberInput) => {
    try {
        isExist(numbers)
        let checkIsArray = isArray(numbers)

        let index = 0;
        while(checkIsArray === true && index < numbers.length){
            if(isNaN(numbers[index])) checkIsArray = false
            else {
                isNotString(numbers[index])
                isMaxNumber(numbers[index], maxNumberInput)
                isMinNumber(numbers[index], minNumberInput)
            }
            index++
        }
        return true
    } catch (error) {
        throw error
    }
}