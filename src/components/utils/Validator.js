import dayjs from 'dayjs'

const validateString = (e, elt, bool) => {

    const stringLength = e.length
    if(stringLength == false){
        elt.style.borderColor = "red";
        bool.push(false)
        return 
    } else if(stringLength < 2){
        elt.style.borderColor = "red";
        bool.push(false)
        return 
    } else {
        elt.style.borderColor = "green";
        bool.push(true)
        // return { bool }
        return bool
    }
}


const validatePostCode = (e, elt, bool) => {

    const numberLength = e.length
    if(numberLength == false){
        elt.style.borderColor = "red";
        bool.push(false)
        return 
    } else if(numberLength < 2){
        elt.style.borderColor = "red";
        bool.push(false)
        return
    } else {
        elt.style.borderColor = "green";
        bool.push(true)
      
        // return true
    }
}

const validateDate = (e, elt, bool) => {
    const valueLength = elt.value
    if(!dayjs(valueLength, 'DD/MM/YYYY').isValid()){
        elt.style.borderColor = "red";
        bool.push(false)
    } else {
        elt.style.borderColor = "green";
        bool.push(true);
    }
}



const hasEmptyProperties = (obj)=> {
        for (const key in obj) {
          if (obj[key] === '' || obj[key] === null || typeof obj[key] === 'undefined') {
            return true;
          }
        }
        return false;
}
export default {validateString, validatePostCode, validateDate, hasEmptyProperties}