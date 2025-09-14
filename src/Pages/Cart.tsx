import React from "react";
import CartCard from "../Component/CartCard";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CartContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: aliceblue;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const CartItems = styled.div`
  flex: 3;
`;

const CartSummary = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  height: fit-content;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;

  img {
    width: 150px;
    height: 150px;
  }
`;

const ProceedButton = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 12px 20px;
  background-color: #3deb40ff;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: #2dc32f;
  }
`;

const Cart: React.FC = () => {
  const { cartItems } = useSelector((state: any) => state.cart);

  // total price
  const totalPrice = cartItems.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  // total items
  const totalItems = cartItems.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0
  );

  return (
    <>
      {cartItems.length > 0 ? (
        <CartContainer>
          {/* Left side - Cart items */}
          <CartItems>
            {cartItems.map((item: any) => (
              <CartCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                images={item.images[0]}
                quantity={item.quantity}
              />
            ))}
          </CartItems>

          {/* Right side - Summary */}
          <CartSummary>
            <h3>Cart Summary</h3>
            <p>
              Total Items: <b>{totalItems}</b>
            </p>
            <p>
              Total Price: <b>Rs.{totalPrice.toFixed(2)}</b>
            </p>
            <ProceedButton>Proceed to Buy</ProceedButton>
          </CartSummary>
        </CartContainer>
      ) : (
        <EmptyCart>
          <img
            src="empty-cart.png"
            alt="empty cart"
          />
        </EmptyCart>
      )}
    </>
  );
};

export default Cart;
