import React from "react";
import './style.css'
import FieldName from "../form-fields/FieldName";
import FieldEmail from "../form-fields/FieldEmail";
import FieldPhone from "../form-fields/FieldPhone";
import FieldSend from "../form-fields/FieldSend";
import FieldDate from "../form-fields/FieldDate";
import FieldQuestion from "../form-fields/FieldQuestion";
import Validator from "../utils/Validator";

const ContactForm = (props) => {
    const [fieldData, setFieldData] = React.useState({
        name: {value: ''},
        email: {value: ''},
        phone: {value: ''},
        date: {value: ''},
        question: {value: ''}
    });

    const validator = props.validator || Validator();

    const fieldOnChangeHandler = (e) => {
        const elem = e.target;
        let newFieldData = {
            [elem.id]: {
                name: elem.name,
                value: elem.value,
                type: elem.type,
                required: elem.required,
                label: elem.name.charAt(0).toUpperCase() + elem.name.slice(1)
            }
        }

        if (validator) {
            newFieldData = validator.validateFieldData(newFieldData)
        }

        setFieldData({...fieldData, ...newFieldData});
    }

    const formSubmitHandler = (e) => {
        props.passthroughFormFields(fieldData);
        props.onSubmit(e);
    }

    return (
        <div className="contact-form-container">
            <h3>Please ask us a question</h3>
            <form id="contact_form" method="post" action="send" onSubmit={formSubmitHandler}>
                <FieldName
                    className={`form-elem${fieldData.name.isValid ? "" : " error"}${fieldData.name.value ? " has-value" : ""}`}
                    value={fieldData.name.value}
                    onChange={fieldOnChangeHandler}
                />
                <FieldEmail
                    className={`form-elem${fieldData.email.isValid ? "" : " error"}${''!==fieldData.email.value ? " has-value" : ""}`}
                    value={fieldData.email.value}
                    onChange={fieldOnChangeHandler}
                />
                <FieldPhone
                    className={`form-elem${fieldData.phone.isValid ? "" : " error"}${fieldData.phone.value ? " has-value" : ""}`}
                    value={fieldData.phone.value}
                    onChange={fieldOnChangeHandler}
                />
                <FieldDate
                    className={`form-elem${fieldData.date.isValid ? "" : " error"}${fieldData.date.value ? " has-value" : ""}`}
                    value={fieldData.date.value}
                    onChange={fieldOnChangeHandler}
                />
                <FieldQuestion
                    className={`form-elem${fieldData.question.isValid ? "" : " error"}${fieldData.question.value ? " has-value" : ""}`}
                    value={fieldData.question.value}
                    onChange={fieldOnChangeHandler}
                />
                <FieldSend/>
            </form>
        </div>
    )
}

export default ContactForm;