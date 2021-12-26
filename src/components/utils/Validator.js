import React from "react";

const Validator = () => {
    let validatedData = {}
    return {
        validateFieldData(data) {
            for (const [fieldId, fieldData] of Object.entries(data)) {
                switch (fieldId) {
                    case 'name':
                        fieldData.value = this.sanitizeNameValue(fieldData.value);
                        fieldData.isValid = (!fieldData.required || '' !== fieldData.value);
                        break;
                    case 'email':
                        fieldData.value = this.sanitizeEmailValue(fieldData.value);
                        fieldData.isValid = ((!fieldData.required || '' !== fieldData.value)
                            && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                .test(fieldData.value));
                        break;
                    case 'phone':
                        fieldData.value = this.sanitizePhoneValue(fieldData.value);
                        fieldData.isValid = ((!fieldData.required || '' !== fieldData.value)
                            && /^[\+]?[0-9][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                                .test(fieldData.value));
                        break;
                    case 'date':
                        fieldData.value = this.sanitizeDateValue(fieldData.value);
                        fieldData.isValid = (!fieldData.required || '' !== fieldData.value);
                        break;
                    case 'question':
                        fieldData.value = this.sanitizeQuestionValue(fieldData.value);
                        fieldData.isValid = (!fieldData.required || '' !== fieldData.value);
                        break;
                    default:break;
                }

                validatedData = {
                    [fieldId]: {...validatedData, ...fieldData}
                };
            }

            return validatedData;
        },

        sanitizeNameValue(value) {
            return value
        },

        sanitizeEmailValue(value) {
            return value
        },

        sanitizePhoneValue(value) {
            value = value.replace(/[\D]/g,'');

            if (value.length > 0) {
                value = '+' + value;
            }

            let correctedValue = '';
            value.split('').forEach((char,index) => {
                if (2 === index) {
                    correctedValue += '(';
                }
                if (5 === index) {
                    correctedValue += ')';
                }
                if (8 === index) {
                    correctedValue += '-';
                }

                correctedValue += char;
            });

            return correctedValue;
        },

        sanitizeDateValue(value) {
            return value
        },

        sanitizeQuestionValue(value) {
            return value
        },
    }
}

export default Validator;