import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import CheckOutSucceess from "./pages/checkOutSucceess";
import Banner from "./components/Banner";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/checkout-success" element={<CheckOutSucceess />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
