import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroSection = styled.div`
  margin-bottom: 30px;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin: 0;

    span {
      color: #ff6600;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 18px;
    color: #555;
    margin-top: 10px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  max-width: 350px;
  width: 100%;
  height: auto;

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const ShopButton = styled.button`
  padding: 12px 25px;
  background-color: #ff6600;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e65c00;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 14px;
    padding: 12px;
  }
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <h1>
          Welcome to <span>QuickKart</span>
        </h1>
        <p>Your one-stop shop for all your needs. Shop smart, shop quick!</p>
      </HeroSection>

      {/* Logos in Flexbox */}
      <LogosWrapper>
        <Logo src="offerElect.png" alt="Electronics Offer" />
        <Logo src="offerBeauty.png" alt="Beauty Offer" />
      </LogosWrapper>

      {/* Call to Action */}
      <ShopButton onClick={() => navigate("/products")}>Shop Now</ShopButton>
    </HomeContainer>
  );
};

export default Home;
