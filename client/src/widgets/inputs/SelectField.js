import React from "react";

const SelectField = ({
     name, 
     value, 
     info, 
     onChange, 
     options,
     selectFieldClass
}) => {
  const selectOptions = options.map(option => (
    <option key={ option.value } value={ option.value }  >
      { option.label }
    </option>
  ));
  return (
    <div className={ selectFieldClass }>
      <select
        name={name}
        onChange={onChange}
      >
        { selectOptions }
      </select>
      { info && <small className="">{info}</small>}
    </div>
  );
};

export default SelectField;
