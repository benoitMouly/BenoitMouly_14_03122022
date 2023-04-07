import dayjs from 'dayjs'

/**
 * Functions used to check our form fields
 * @param {Object} e props, event target
 * @param {Object} elt props, element
 * @param {Object} bool props, bool if field is Valid
 * @returns {bool} 
 */


/**
 * Function checkin string given
 * @param {Object} e props, event target
 * @param {Object} elt props, element
 * @param {Object} bool props, bool if field is Valid
 * @returns {bool} 
 */

const validateString = (e, elt, bool) => {

    const stringLength = e.length
    if (stringLength === false) {
        elt.style.borderColor = "red";
        bool.push(false)
        return
    } else if (stringLength < 2) {
        elt.style.borderColor = "red";
        bool.push(false)
        return
    } else {
        elt.style.borderColor = "green";
        bool.push(true)
        return bool
    }
}

/**
 * Function checkin number given
 * @param {Object} e props, event target
 * @param {Object} elt props, element
 * @param {Object} bool props, bool if field is Valid
 * @returns {bool} 
 */


const validatePostCode = (e, elt, bool) => {

    const numberLength = e.length
    if (numberLength === false) {
        elt.style.borderColor = "red";
        bool.push(false)
        return
    } else if (numberLength < 2) {
        elt.style.borderColor = "red";
        bool.push(false)
        return
    } else {
        elt.style.borderColor = "green";
        bool.push(true)
    }
}

/**
 * Function checkin date give
 * @param {Object} e props, event target
 * @param {Object} elt props, element
 * @param {Object} bool props, bool if field is Valid
 * @returns {bool} 
 */


const validateDate = (e, elt, bool) => {
    const valueLength = elt.value
    if (!dayjs(valueLength, 'DD/MM/YYYY').isValid()) {
        elt.style.borderColor = "red";
        bool.push(false)
    } else {
        elt.style.borderColor = "green";
        bool.push(true);
    }
}


/**
 * Function checkin empty values
 * @param {Object} obj props, object data given
 * @returns {Object} 
 */


const hasEmptyProperties = (obj) => {
    for (const key in obj) {
        if (obj[key] === '' || obj[key] === null || typeof obj[key] === 'undefined') {
            return true;
        }
    }
    return false;
}

// eslint-disable-next-line
export default { validateString, validatePostCode, validateDate, hasEmptyProperties }