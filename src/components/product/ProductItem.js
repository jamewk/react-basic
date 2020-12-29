import React, { Component } from "react";

class ProductItem extends Component {

    render() {
        const {productName, unitPrice, thumbnail} = this.props.product;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt=""/>
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right" >{unitPrice} THB</p>
                {this.props.onAddOrder &&  <button className="btn btn-block btn-info btn-sm title" onClick={() => this.props.onAddOrder(this.props.product)} >
                    ซื้อ
                </button>}
                {this.props.onEditProduct && <button className="btn btn-info btn-sm  col-5 title" onClick={() => this.props.onEditProduct(this.props.product)} >
                    แก้ไข
                </button>}
                {this.props.onDelProduct &&  <button className="btn btn-danger btn-sm float-right  col-5 title" onClick={() => this.props.onDelProduct(this.props.product)} >
                    ลบ
                </button>}
                <hr />
            </div>
        )
    }
}

export default ProductItem;