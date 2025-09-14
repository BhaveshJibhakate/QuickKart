import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../Redux/cartActions";
import styled from "styled-components";

// Styled button
export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #abe55f;
  font-weight: bold;
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 4px;

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 10px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
`;

const ProductImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

const Details = styled.div`
  flex: 2;
  margin-left: 15px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const SubtotalSection = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

interface CartCardProps {
  id: number;
  title: string;
  price: number;
  images: string;
  quantity: number;
}

const CartCard: React.FC<CartCardProps> = ({ id, title, price, images, quantity }) => {
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      {/* Left - Image */}
      <ProductImage src={images} alt={title} />

      {/* Middle - Details */}
      <Details>
        <p style={{ fontWeight: "bold", fontSize: "16px", margin: 0 }}>{title}</p>
        <p style={{ margin: "5px 0" }}>Price: Rs.{price}</p>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
          <span>Qty:</span>
          <StyledButton onClick={() => dispatch(increaseQuantity(id))}>+</StyledButton>
          <span>{quantity}</span>
          <StyledButton onClick={() => dispatch(decreaseQuantity(id))}>-</StyledButton>
        </div>
      </Details>

      {/* Right - Subtotal & Remove */}
      <SubtotalSection>
        <p style={{ margin: "5px 0" }}>Subtotal: Rs.{(price * quantity).toFixed(2)}</p>
        <button
          onClick={() => dispatch(removeFromCart(id))}
          style={{
            border: "none",
            fontSize: "12px",
            padding: "8px 18px",
            cursor: "pointer",
            backgroundColor: "#d66436",
            color: "white",
            borderRadius: "8px",
          }}
        >
          Remove
        </button>
      </SubtotalSection>
    </CardWrapper>
  );
};

export default CartCard;
