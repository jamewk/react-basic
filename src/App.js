import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductItem from "./components/product/ProductItem"

function App() {
  return (
    <div>
      <Header />
      <ProductItem productName="IPhone 10" unitPrice="43000"/>
      <ProductItem productName="IPhone 11" unitPrice="45000"/>
      <ProductItem productName="IPhone 12" unitPrice="50000"/>
      <Footer company="Jamewklab" email="jamewk01@gmail.com"/>
    </div>
  );
}

export default App;
