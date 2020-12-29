import Header from "../components/Header";
import Footer from "../components/Footer";
import MoniTor from "../components/monitor/Monitor"
import { Component } from "react";
import axios from "axios"

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {product: null};
  }

  componentDidMount(){
    axios.get("http://localhost:3001/products").then(res=>{
      this.setState({products: res.data || []});
    })
  }

  render(){
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <MoniTor products={this.state.products} />
        </div>
        <Footer company="Jamewk" email="jamewk01@gmail.com"/>
      </div>
    );
  }

}

export default Home;
