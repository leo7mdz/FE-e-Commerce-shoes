import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { HashRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import CheckOutSucceess from "./pages/checkOutSucceess";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/checkout-success" element={<CheckOutSucceess />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
