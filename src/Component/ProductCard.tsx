import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartActions";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  images: string;
}

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgb(243, 183, 183);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 5px 0;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Rating = styled.p`
  color: black;
  margin-bottom: 10px;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const AddButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: rgb(85, 152, 225);
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background-color: rgb(65, 130, 200);
  }

  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 14px;
  }
`;

const ProductCard: React.FC<ProductProps> = ({
  id,
  title,
  price,
  rating,
  images,
}) => {
  const notify = () =>
    toast.success("Added Successfully", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  const { Allproducts } = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const handleclick = (id: number) => {
    const AddableProduct = Allproducts.find((items: any) => items.id === id);
    dispatch(addToCart(AddableProduct));
    notify();
  };

  return (
    <Card>
      <ProductImage src={images} alt={title} loading="lazy" />
      <Title>{title}</Title>
      <Price>Price: Rs.{price}</Price>
      <Rating>⭐ {rating}</Rating>
      <AddButton onClick={() => handleclick(id)}>Add to Cart</AddButton>
      <ToastContainer />
    </Card>
  );
};

export default ProductCard;
