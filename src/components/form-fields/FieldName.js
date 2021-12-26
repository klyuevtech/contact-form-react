import React from "react";

const FieldName = ({value, onChange, ...props}) => {
    return (
        <div className="form-field">
            <label className="label-name" htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required={true}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default FieldName;