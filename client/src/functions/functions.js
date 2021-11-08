import { ASC, MINOR } from "../constantes/filters";

export const validateName = (value) => {
    return (!/[^A-Za-z\s\,]/.test(value) && value);
}
export const validateText = (value) => {
    return (!!value.length);
}
export const validateUrl = (value) => {
    return (/^(ftp|http|https):\/\/[^ "]+$/.test(value) && !!value);
}
export const validateOptions = (value) => {
    return ( !!value.length );
}
export const validateRating = (value, min, max) => {
    return (value >= min && value <= max);
}
export const getActualDate = () => {
    const date = new Date();
    const dia = date.getDay() <= 9 ? "0"+ date.getDay() : date.getDay()
    const mes = (date.getMonth() + 1) <= 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
    const año = date.getFullYear()
    return `${año}-${mes}-${dia}`
  }


export const sortArrayByNameOrRating = (array, key, order) => {
    let newArray = [];
    if( key !== "name" && key !== "rating" ) return newArray;
    if( key === "name" ){
       newArray = array.sort((a, b) =>
       order === ASC 
        ? a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        : b.name.toLowerCase().localeCompare(a.name.toLowerCase())
      );
    } else {
        newArray = array.sort((a, b) => {
            if (a.rating < b.rating)
              return order === MINOR ? -1 : 1;
            if (a.rating > b.rating)
              return order === MINOR ? 1 : -1;
            return 0;
          });
    }
    return newArray;
}



/*
    /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/

-- Comprueba uno o ninguno de los siguientes: ftp: //, http: // o https: //
-- Se requiere www.
-- Comprueba cualquier número de caracteres válidos.
-- Finalmente, verifica que tenga un dominio y que ese dominio tenga al menos 2 caracteres.

*/