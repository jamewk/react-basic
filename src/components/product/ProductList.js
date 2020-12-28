import { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {

    showProducts() {
        if(this.props.products){
            return this.props.products.map(v=>(
                <ProductItem key={v.productId} product={v} onAddOrder={this.props.onAddOrder}/>
            ))
        }
    }

    render(){
        return (
            <div className="row">
                {this.showProducts()}
            </div>
        )
    }
}

export default ProductList;