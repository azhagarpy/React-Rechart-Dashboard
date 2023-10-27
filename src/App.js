import Layout from "./components/Layout";
import Products from "./pages/Products/Products";
import HomePage from "./pages/home/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
          </Routes>
      </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
