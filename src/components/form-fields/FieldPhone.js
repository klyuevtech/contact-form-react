import React from "react";

const FieldPhone = ({value, onChange, ...props}) => {
    return (
        <div className="form-field">
            <label className="label-phone" htmlFor="phone">Phone</label>
            <div className="phone-form-elem-background">
                <span className="phone-form-elem-hint">+X(XXX)XXX-XXXX</span>
                <span className="phone-form-elem-overlay"/>
            </div>
            <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Phone"
                required={true}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default FieldPhone;