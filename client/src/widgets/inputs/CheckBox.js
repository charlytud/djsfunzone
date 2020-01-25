import React from "react";

const CheckBox = ({
    name,
    placeholder,
    value,
    onChange,
    checked,
    checkBoxClass
}) => {
    return (
        <div>
            <input
                type="checkbox"
                className={checkBoxClass}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};


export default CheckBox;
