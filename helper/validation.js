const validation = {
    isExist : (data) => {
        const checkIsExist = !data
        if(!data) throw 'Input tidak boleh kosong'
        return !checkIsExist
    },
    isArray : (data) => {
        if(Array.isArray(data) === false) throw 'Input harus berupa array'
        return Array.isArray(data)
    },
    isPositiveNumber : (number) => {
        if(number > -1) return true
        throw 'Input harus berupa angka positive'
    },
    isMaxNumber : (number, maxNumberInput) => {
        if(number <= maxNumberInput) return true
        throw 'Input melebihi batas maksimal'
    },
    isMinNumber : (number, minNumberInput) => {
        if(number >= minNumberInput ) return true
        throw 'Input kurang dari batas minimal'
    },
    isNotString : (number) => {
        if(typeof number != 'string') return true
        throw 'Input harus berupa integer'
    }
}

module.exports = validation
