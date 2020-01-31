import React from 'react'

function Product() {
    return (
        <div className="app-product">
            <div className="app-product__row">
                <div className="app-product__item">
                    <img src="./images/products/2.png" alt="product" />
                    <div className="app-product__desc">
                        <h5>Castle Spider</h5>
                        <h5>Rate/Day: R900 </h5>
                        <button className="app-btn app-btn--book">
                            Book
                        </button>
                    </div>
                </div>
                <div className="app-product__item">
                    <img src="./images/products/2.png" alt="product" />
                    <div className="app-product__desc">
                        <h5>Castle Spider</h5>
                        <h5>Rate/Day: R900 </h5>
                        <button className="app-btn app-btn--book">
                            Book
                        </button>
                    </div>
                </div>
                <div className="app-product__item">
                    <img src="./images/products/2.png" alt="product" />
                    <div className="app-product__desc">
                        <h5>Castle Spider</h5>
                        <h5>Rate/Day: R900 </h5>
                        <button className="app-btn app-btn--book">
                            Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
