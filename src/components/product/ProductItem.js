import { Component } from "react";

class ProductItem extends Component {
    render(){
        const {productName , unitPrice , thumbnail} = this.props.product;

        return (
            <div className="col-md-3 col-sm-6">
                <div className="card mb-3">
                    <div className="card-body">
                        <img className="img-fluid img-thumbnail" src={thumbnail} alt=""/>
                        <h5 className="mt-2">{productName}</h5>
                        <div className="row">
                            <div className="col-6">
                                ราคา
                            </div>
                            <div className="col-6 text-right">
                                <p className="title">{unitPrice} THB</p>
                            </div>
                        </div>
                        <button className="btn btn-block btn-info btn-sm title" onClick={() => this.props.onAddOrder(this.props.product)}>
                            เพิ่มในตะกร้า
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem;