import React from "react";

const TextField = ({
  name,
  placeholder,
  value,
  error,
  type,
  onChange,
  textFieldClass
}) => {
  return (
    <div>
      <input
        type={type}
        className={textFieldClass}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && <div className="invalid">{ error }</div>}
    </div>
  );
};

export default TextField;
