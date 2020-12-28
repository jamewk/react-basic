import { Component } from "react";

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
                            <h5 className="text-muted mt-3">{this.state.date.toLocaleTimeString()}</h5>
                        </div>
                    </div>
                </div>
                <div className="hr pb-4"></div>
            </div>
        )
    }
}

export default Header;