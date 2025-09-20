import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

interface ButtonProps {
    active:boolean;
}
const StyledButton=styled.button<ButtonProps>`
border:none;
padding:5px;
border-radius:5px;
font-size:15px;
font-weight:bold;
background-color:antiquewhite;
cursor:pointer;
color:${(props:any)=>props.active ? "red":"black"};
`
interface CategoriesProps {
    setProducts:Function;
}
const Categories: React.FC<CategoriesProps> = ({setProducts}) => {
  const [activeCategory,setactiveCategory]=useState("")
  const { Allproducts } = useSelector((state: any) => state.products);

  const category = [
    "Mobile-accessories",
    "Mens-watches",
    "Mens-shoes",
    "Mens-shirts",
    "Laptops",
    "Kitchen-accessories",
    "Home-decoration",
    "Groceries",
    "Furniture",
    "Fragrances",
    "Beauty",
  ];

  const handleclick = (cat: string) => {
    if (cat === "all") {
      setProducts(Allproducts);
      setactiveCategory(cat)
    } else {
      const categorywiseProduct = Allproducts.filter(
        (item: any) => item.category === cat.toLocaleLowerCase()
      );
    setProducts(categorywiseProduct)
    setactiveCategory(cat)
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "antiquewhite" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <StyledButton
          onClick={() => handleclick("all")}
          active={activeCategory==="all"}
        >
          All
        </StyledButton>
        {category.map((cat: string) => (
          <StyledButton
            key={cat}
            onClick={() => handleclick(cat)}
            active={activeCategory===cat}
          >
            {cat}
          </StyledButton>
        ))}
      </div>
    </div>
  );
};

export default Categories;
