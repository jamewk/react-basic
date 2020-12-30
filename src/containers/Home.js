import Header from "../components/Header";
import Footer from "../components/Footer";
import MoniTor from "../components/monitor/Monitor";
import { Component } from "react";
import { connect } from "react-redux";
import { productsFetch } from "../actions";

class Home extends Component {
  componentDidMount(){
    this.props.productsFetch();
  }

  render(){
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <MoniTor products={this.props.products} />
        </div>
        <Footer company="Jamewk" email="jamewk01@gmail.com"/>
      </div>
    );
  }
}

function mapStateToProps({products}){
  return { products };
}

export default connect(mapStateToProps, { productsFetch })(Home);
