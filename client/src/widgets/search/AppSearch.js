import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductsByFilter } from '../../actions/product_action';
import { getCategories } from '../../actions/category_action';
import { getSuppliers } from '../../actions/supplier_action';
import SearchForm from './SearchForm';

class AppSearch extends Component {

        state = {
            keyword: '',
            supplier: '',
            category: ''
        }

    async componentDidMount() {
        await this.props.getSuppliers();
        await this.props.getCategories();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.product !== prevProps.product) {
            this.setState({
                keyword: '',
                supplier: '',
                category: '',       
            })
        }
    }

    onChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    onSubmit = async e => {
        e.preventDefault();
        const filter = {
            keyword: this.state.name,
            supplier: this.state.supplier,
            category: this.state.category
        }

        // console.log(filter)
        this.props.history.push(`/dashboard/products/results?category=${ filter.category }&supplier=${ filter.supplier }`);
    }

    render() {
        // console.log(this.props);
        const { suppliers } = this.props.supplier;
        const { categories } = this.props.category;
        const loadingSuppliers = this.props.supplier.loading;
        const loadingCategories = this.props.category.loading;
        const {   
        keyword,
        supplier,
        category,
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
                <SearchForm
                    keyword={keyword}
                    supplier={supplier}
                    category={category}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    optionsSupplier={optionsSupplier}
                    optionsCategory={optionsCategory}
                    submitText="Search"
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    supplier: state.supplier,
    category: state.category,
    product: state.product,
});

export default connect(mapStateToProps, { getCategories, getSuppliers, getProductsByFilter })(AppSearch);