import React from "react";

const FieldEmail = ({value, onChange, ...props}) => {
    return (
        <div className="form-field">
            <label className="label-email" htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required={true}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default FieldEmail;