import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import PizzaPage from "./views/PizzaPage";
import CartPage from "./views/CartPage";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pizza/:id" element={<PizzaPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
