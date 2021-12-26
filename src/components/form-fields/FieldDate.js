import React from "react";

const FieldDate = ({value, onChange, ...props}) => {
    return (
        <div className="form-field">
            <label className="label-datepicker" htmlFor="datepicker">Date</label>
            <input
                type="date"
                className="form-elem date-picker"
                id="date"
                name="date"
                required={true}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default FieldDate;