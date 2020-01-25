import React from 'react';
// import TextField from "../../widgets/inputs/TextField";
import SelectField from "../../widgets/inputs/SelectField";

const SearchForm = ({ 
    keyword, 
    optionsSupplier,
    optionsCategory,
    onSubmit, 
    onChange, 
    submitText 
    }) => (
        <form className="app-form" onSubmit={ onSubmit }>
            <div className="app-form__search-group">
                {/* <div className="app-from__input-group">
                    <label>Search</label>
                    <TextField
                        type="text"
                        name="keyword"
                        placeholder="Keyword"
                        value={keyword}
                        onChange={onChange}
                        textFieldClass="form__input"
                    />
                </div> */}
                <div className="app-form__input-group">
                    <label>Filter</label>
                    <SelectField
                        placeholder="Category"
                        name="category"
                        onChange={onChange}
                        options={optionsCategory}
                        selectFieldClass="app-form__select"
                    />
                </div>

                <div className="app-form__select-group">
                    <label>Filter</label>
                    <SelectField
                        placeholder="Supplier"
                        name="supplier"
                        onChange={onChange}
                        options={optionsSupplier}
                        selectFieldClass="app-form_select"
                    />
                </div>
                <button className="app-btn">{submitText}</button>
            </div>
        </form>
    )

export default SearchForm;
