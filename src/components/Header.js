import { Component } from "react";
import { Link } from "react-router-dom"; 

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate(){
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date: new Date()});
    }

    render(){
        const style = {height: 50};
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 text-left">
                            <h2 className="text-success"><img style={style} src="/images/logo/logo.png" alt=""/> คาเฟ่ คุณอายส์</h2>
                        </div>
                        <div className="col-md-4 text-right">
                            <h5 className="text-muted mt-2">
                                {this.state.date.toLocaleTimeString()}
                            </h5>
                            <ul className="list-inline">
                                <li className="list-inline-item title"><Link className="text-success" to="">หน้าหลัก</Link></li>
                                <li className="list-inline-item title">|</li>
                                <li className="list-inline-item title"><Link className="text-success" to="/orders">รายการสั่งซื้อ</Link></li>
                                <li className="list-inline-item title">|</li>
                                <li className="list-inline-item title"><Link className="text-success" to="/products">สินค้า</Link></li>
                                <li className="list-inline-item title">|</li>
                                <li className="list-inline-item title"><Link className="text-success" to="/about">เกี่ยวกับเรา</Link></li>
                            </ul>  
                        </div>
                    </div>
                </div>
                <div className="hr pb-4"></div>
            </div>
        )
    }
}

export default Header;