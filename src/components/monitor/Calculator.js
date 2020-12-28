import { Component } from "react";

class Calculator extends Component {
    showOrders(orders){
        if(!orders || orders.length === 0){
            return <li className="text-right text-muted title">ไม่มีสินค้า</li>
        }else{
            return orders.map((v, i)=>(
                <li key={i} className="text-right text-success title">
                    {v.product.productName} x {v.quantity} = {v.quantity * v.product.unitPrice}
                    <label
                        onClick={()=> this.props.onDelOrder(v.product)}
                        type="button"
                        className="btn mr-1 mb-1 btn-sm">x
                    </label>
                </li>
            ))
        }
    }

    render(){
        const { totalPrice, orders } = this.props;

        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="text-left">ตะกร้าของฉัน</h4>
                    <h1 className="text-right">{totalPrice} THB</h1>
                    <hr />
                    <ul className="list-unstyled">
                       {this.showOrders(orders)}
                    </ul>
                    <hr />
                    <div className="row">
                        <div className="col-12 text-right">
                            <button className="btn btn-block btn-sm btn-success title mr-1" onClick={() => this.props.onConfirmOrder()}>ยืนยัน</button>
                            <button className="btn btn-block btn-sm btn-danger title" onClick={() => this.props.onCancelOrder()}>ยกเลิก</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;