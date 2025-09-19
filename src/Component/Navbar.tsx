import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../Redux/authActions";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  background-color: #282c35;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 15px;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    margin-top: 10px;
    gap: 10px;
    flex-direction: column;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;

  &:hover {
    color: #61dafb;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CartWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 3px 6px;
`;

const Navbar: React.FC = () => {
  const { cartItems } = useSelector((state: any) => state.cart);
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  const totalItems = cartItems.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0
  );
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logoutUser());
  };
  return (
    <Nav>
      <Logo>QuickKart</Logo>
      <LinksContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/cart">
          <CartWrapper>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
          </CartWrapper>
        </StyledLink>
        {isAuthenticated && <button onClick={handlelogout}>Logout</button>}
      </LinksContainer>
    </Nav>
  );
};

export default Navbar;
