import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
