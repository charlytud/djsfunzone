import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { addProduct, getProducts } from '../../actions/product_action';
import { getCategories } from '../../actions/category_action';
import { getSuppliers } from '../../actions/supplier_action';

class CreateProduct extends Component {
    state = {
        name: '',
        supplier: '',
        category: '',
        quantity: '',
        price: '',
        stock: '',
        order: '',
        reorderLevel: '',
        discontinued: false,
        errors: {}
    }

    async componentDidMount() {
        await this.props.getSuppliers();
        await this.props.getCategories();
    }

    componentDidUpdate(prevProps) {
        if (this.props.product !== prevProps.product) {
            this.setState({
                name: '',
                supplier: '',
                category: '',
                quantity: '',
                price: '',
                stock: '',
                order: '',
                reorderLevel: '',
                discontinued: false,
                errors: {}
            })
        }
    }

    onChange = e => {
        const { name, value, type, checked } = e.target
        type === "checkbox" ? this.setState({ [name]: checked, discontinued: true }) : this.setState({ [name]: value })
    }

    onSubmit = async e => {
        e.preventDefault();
        const product = {
            name: this.state.name,
            supplier: this.state.supplier,
            category: this.state.category,
            quantity: this.state.quantity,
            price: this.state.price,
            stock: this.state.stock,
            order: this.state.order,
            reorderLevel: this.state.reorderLevel,
            discontinued: this.state.discontinued
        }
        // console.log(product);
        await this.props.addProduct(product);
        await this.props.getProducts();
    }

    render() {
        const { suppliers } = this.props.supplier;
        const { categories } = this.props.category;
        const loadingSuppliers = this.props.supplier.loading;
        const loadingCategories = this.props.category.loading;
        const {   
        name,
        supplier,
        category,
        quantity,
        price,
        stock,
        order,
        reorderLevel,
        discontinued,
        errors: {} 
        } = this.state;
        let optionsSupplier = [];
        let optionsCategory = [];
        if (!loadingSuppliers) {
            optionsSupplier = [{ label: 'Select Supplier', value: 0 }, ...suppliers.map(supplier => {
                return {
                    label: supplier.companyName,
                    value: supplier._id
                }
            })]
            // console.log(optionsSupplier);
        }
        if (!loadingCategories) {
            optionsCategory = [{ label: 'Select Category', value: 0 }, ...categories.map(category => {
                return {
                    label: category.categoryName,
                    value: category._id
                }
            })]
        }
        return (
            <div>
                <section className="forms">
                    <h2>Add Product</h2>
                    <Link to="/dashboard" className="btn-back">
                        Back
                    </Link>
                    <ProductForm
                        formName="Product Form"
                        name={name}
                        supplier={supplier}
                        category={category}
                        quantity={quantity}
                        price={price}
                        stock={stock}
                        order={order}
                        reorderLevel={reorderLevel}
                        discontinued={false}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        optionsSupplier={optionsSupplier}
                        optionsCategory={optionsCategory}
                        submitText="Add Product"
                    />
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    supplier: state.supplier,
    category: state.category,
    product: state.product,
});

export default connect(mapStateToProps, { addProduct, getCategories, getSuppliers, getProducts })(CreateProduct);