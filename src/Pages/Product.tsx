import React, { useEffect } from "react";
import ProductCard from "../Component/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsRequest } from "../Redux/productAction";
import { ClipLoader } from "react-spinners";

const Products: React.FC = () => {
  const { loading, error, Allproducts } = useSelector(
    (state: any) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px", backgroundColor: "antiquewhite" }}>
      <h2
        style={{
          marginBottom: "20px",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Our Products
      </h2>

      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ClipLoader color="red" size={80} />
        </div>
      )}

      {error && (
        <h2 style={{ color: "red", textAlign: "center" }}>
          Something went wrong
        </h2>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {Allproducts.map((item: any) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            images={item.images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
