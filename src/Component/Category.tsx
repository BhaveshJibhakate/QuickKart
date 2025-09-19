import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledButton=styled.button`
border:none;
padding:5px;
border-radius:5px;
font-size:15px;
font-weight:bold;
background-color:antiquewhite;
cursor:pointer;
`
interface CategoriesProps {
    setProducts:Function;
}
const Categories: React.FC<CategoriesProps> = ({setProducts}) => {
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
    } else {
      const categorywiseProduct = Allproducts.filter(
        (item: any) => item.category === cat.toLocaleLowerCase()
      );
    //   setProducts(categorywiseProduct);
    setProducts(categorywiseProduct)
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "antiquewhite" }}>
      {/* <h2
        style={{
          marginBottom: "20px",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Shop Products by Category
      </h2> */}

      {/* Category Buttons */}
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
        >
          All
        </StyledButton>
        {category.map((cat: string) => (
          <StyledButton
            key={cat}
            onClick={() => handleclick(cat)}
          >
            {cat}
          </StyledButton>
        ))}
      </div>

      {/* Product Grid */}
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {Products.map((item: any) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            images={item.images[0]}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Categories;
