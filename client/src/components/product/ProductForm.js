import React from 'react';
import { Link } from 'react-router-dom';
import TextField from "../../widgets/inputs/TextField";
import CheckBox from "../../widgets/inputs/CheckBox";
import SelectField from "../../widgets/inputs/SelectField";

const ProductForm = ({ 
    formName,
    name, 
    supplier, 
    category, 
    quantity, 
    price, 
    stock, 
    order, 
    reorderLevel, 
    onSubmit, 
    onChange,
    discontinued, 
    optionsSupplier, 
    optionsCategory, 
    submitText 
    }) => (
        <form className="app-form" onSubmit={ onSubmit }>
                <fieldset>
                    <legend>Product Name</legend>
                    <TextField
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={onChange}
                        textFieldClass="form__input"
                    />
                </fieldset>
            <div className="app-form__row">
                <fieldset>
                    <legend>Category</legend>
                    <SelectField
                        placeholder="Category"
                        name="category"
                        onChange={onChange}
                        options={optionsCategory}
                        selectFieldClass="app-form__select"
                    />
                    <Link className="app-form__link" to='/admin/add-category'>Add Category</Link>
                </fieldset>

                <fieldset>
                    <legend>Supplier</legend>
                    <SelectField
                        placeholder="Supplier"
                        name="supplier"
                        onChange={onChange}
                        options={optionsSupplier}
                        selectFieldClass="app-form_select"
                    />
                    <Link className="app-form__link" to='/admin/add-supplier'>Add Supplier</Link>
                </fieldset>
            </div>
            <div className="app-form__row">
                <fieldset>
                    <legend>Quantity</legend>
                    <TextField
                        type="text"
                        name="quantity"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={onChange}
                        textFieldClass="form__input"
                    />
                </fieldset>

                <fieldset>
                    <legend>Price</legend>
                    <TextField
                        type="text"
                        name="price"
                        placeholder="Price"
                        value={price}
                        onChange={onChange}
                        textFieldClass="form__input"
                    />
                </fieldset>
            </div>

            <div className="app-form__row">
                <fieldset>
                    <legend>Stock</legend>
                    <TextField
                        type="text"
                        name="stock"
                        placeholder="Stock"
                        value={stock}
                        onChange={onChange}
                        textFieldClass="form__input"
                    />
                </fieldset>            

                <fieldset>
                    <legend>Order</legend>
                    <TextField
                        type="text"
                        name="order"
                        placeholder="Order"
                        value={order}
                        onChange={onChange}
                        textFieldClass="form__input"
                    />
                </fieldset>
            </div>
            <div className="app-form__row">
                <fieldset>
                    <legend>Reorder Level</legend>
                    <TextField
                        type="text"
                        name="reorderLevel"
                        placeholder="Re-Order"
                        value={reorderLevel}
                        onChange={onChange}
                        textFieldClass="form__input"
                    />
                </fieldset>
            </div>
            <div className="app-form__row">
                <fieldset>
                <legend className="checkbox-container">Discontinued ?</legend>
                    <CheckBox
                        className="app-form__checkbox"
                        name="discontinued"
                        onChange={onChange}
                        value="yes"
                    />
                </fieldset>
            </div>
            <button className="app-btn app-btn--submit-form">{submitText}</button>
        </form>
    )


export default ProductForm;
