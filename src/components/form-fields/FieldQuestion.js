import React from "react";

const FieldQuestion = ({value, onChange, ...props}) => {
    return (
        <div className="form-field">
            <label className="label-question" htmlFor="question">Question</label>
            <textarea
                className="form-elem"
                id="question"
                name="question"
                placeholder="Question"
                required={true}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default FieldQuestion;