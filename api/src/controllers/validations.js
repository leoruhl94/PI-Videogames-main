const validateText = (value) =>{
    return (typeof value === 'string' && !!value.length)
}
const validateDate = (value) =>{
    return (/^\d{4}([\-\/.])(0?[1-9]|1[0-2])\1(3[01]|[12][0-9]|0?[1-9])$/.test(value))
}
const validateNumber = (value, min, max) =>{
    return (typeof value === 'number' && value >= min && value <= max )
}
const validateArray = (value, type) =>{
    if(value instanceof Array && !!value.length){
        let flag = true;
        value.map(x=>{typeof x !== type ? flag = false : true})
        return flag 
    }
    return false;
}
const validateUrl = (value) => {
    return (/^(ftp|http|https):\/\/[^ "]+$/.test(value) && !!value);
}


module.exports = {
    validateDate,
    validateUrl,
    validateArray,
    validateText,
    validateNumber,
}