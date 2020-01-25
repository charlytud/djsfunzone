import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getProducts } from '../../actions/product_action';
import Spinner from "../../widgets/spinner/Spinner";
import AppSearch from "../../widgets/search/AppSearch";
import AppModal from "../../widgets/modal/AppModal";

class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            products: [],
            loading: true,
        }

        this.renderHeader = this.renderHeader.bind(this);
        this.renderRows = this.renderRows.bind(this);
        this.triggerToggleModal = this.triggerToggleModal.bind(this);
    }
    
    async componentDidMount(){
        await this.props.getProducts(); 
        // console.log("DATA");
        // console.log(this.props.product);
        if(!this.props.product.loading){
            this.setState({
                products: this.props.product.products,
                loading: this.props.product.loading
            });
        } 
    }
    
    // componentWillReceiveProps(prevProps){
    //     // console.log("I feel it");
    //     if(this.props.product.products !== prevProps.product.products){
    //     // console.log("I can do it");
    //         this.setState({
    //             products: this.props.product.products,
    //             loading: this.props.product.loading
    //         });
    //     console.log("New Products");
    //     console.log(this.props.product.products);
    //     }
    // }

    componentDidUpdate(prevProps){
        // console.log("I feel it");
        if(this.props.product.products !== prevProps.product.products){
            // console.log("I can do it");
            this.setState({
                products: this.props.product.products,
                loading: this.props.product.loading
            });
        }
        // console.log("New Products");
        // console.log(this.props.product.products);
    }

    renderHeader = function(products){   
        const header = Object.keys(products[0]);
        // console.log(header);
        return header.map((key, index) => {
            if(key !== "_id" && key !== "__v"){
                return <th key={index}>{ key }</th>
            }
        })
    }

    renderRows = function(products){
       return products.map((product, index) => {
            return(
                <tr key={ index }>
                    <td>{ product.reorderLevel }</td>
                    <td>{ product.discontinued }</td>
                    <td>{ product.productName }</td>
                    <td>{ product.supplierId.companyName }</td>
                    <td>{ product.categoryId.categoryName }</td>
                    <td>{ product.quantityPerUnit }</td>
                    <td>{ product.unitPrice }</td>
                    <td>{ product.unitsInStock }</td>
                    <td>{ product.unitsInOrder }</td>
                    <td>{ moment(product.createdAt).format('MM/DD/YYYY') }</td>
                    <td>{ moment(product.updatedAt).format('MM/DD/YYYY') }</td>
                </tr>
            );
        })
    }

    triggerToggleModal = function(){
        this.refs.app_modal.toggleModal();
    }

    render() {
        const {
            loading,
            products
        } = this.state;

        return (
            <div>
                <div className="dash-search">
                    <div className="app-wrapper app-wrapper__row">
                        <AppSearch { ...this.props }/>
                        <button className="app-btn" onClick={this.triggerToggleModal}>Add new product</button>
                    </div>
                </div>
                <div className="dash-body">
                    <div className="app-wrapper">
                        { 
                            loading 
                            ? 
                            <Spinner className="spinner1" /> 
                            :
                            (
                            <div className="dash-table">  
                                <table>
                                    <tbody> 
                                        <tr>
                                            { this.renderHeader(products) }
                                        </tr> 
                                        { this.renderRows(products) }
                                    </tbody>
                                </table>
                            </div>
                            )
                        }
                    </div>
                </div>
                <AppModal
                    ref="app_modal"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
    }
}

export default connect(mapStateToProps, { getProducts })(Dashboard);