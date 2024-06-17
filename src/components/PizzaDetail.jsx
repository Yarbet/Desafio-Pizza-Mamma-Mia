import React from "react";
import { Container, Row, Col, Button, ButtonGroup, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import pizzas from "../assets/data/pizzas.json";
import { useCart } from "../context/CartContext";
import { capitalize } from "../utils";

const PizzaDetail = () => {
  const { id } = useParams();
  const pizza = pizzas.find((p) => p.id === id);
  const { cart, dispatch } = useCart();

  const addToCart = (pizza) => {
    dispatch({ type: "ADD_TO_CART", payload: pizza });
  };

  const removeFromCart = (pizzaId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: pizzaId });
  };

  const getCartCount = (pizzaId) => {
    const pizzaInCart = cart.filter((item) => item.id === pizzaId);
    return pizzaInCart.length;
  };

  return (
    <Container className="my-4">
      <Row>
        <Col lg={6}>
          <img src={pizza.img} alt={pizza.name} className="img-fluid rounded" />
        </Col>
        <Col lg={6}>
          <h2>{capitalize(pizza.name)}</h2>
          <p>{pizza.desc}</p>
          <hr />
          <div>
            <strong>Ingredientes:</strong>
            <ul className="ingredient-list">
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span role="img" aria-label="pizza" className="ingredient-icon">
                    🍕
                  </span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <h4>Precio: ${pizza.price.toLocaleString()}</h4>
          <ButtonGroup className="align-items-center btn-group-sm">
            {getCartCount(pizza.id) > 0 ? (
              <>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => removeFromCart(pizza.id)}
                >
                  -
                </Button>
                <span className="cart-count">{getCartCount(pizza.id)}</span>
                <Button variant="primary" className="btn-sm" onClick={() => addToCart(pizza)}>
                  +
                </Button>
              </>
            ) : (
              <Button variant="danger" className="btn-sm" onClick={() => addToCart(pizza)}>
                Añadir
                <span role="img" aria-label="shopping cart">
                </span>
              </Button>
            )}
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default PizzaDetail;
