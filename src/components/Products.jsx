import { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";

const Title = styled.h1`
  padding: 20px 50px;
  font-size: 40px;
  margin-top: 40px;
  ${mobile({
    marginTop: "0px",
    fontSize: "25px",
    textAlign: "center",
    marginBottom: "-50px",
  })};
`;

const Container = styled.div`
  padding: 10px 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        // Request Products API
        const produsctsResponse = await fetch("https://dummyjson.com/products");

        const productsJson = await produsctsResponse.json();

        // Update state with fetched products
        let sizeArray = 16;

        let shuffledArrayproducts = productsJson.products.sort(
          () => 0.5 - Math.random()
        );

        setProduct(
          shuffledArrayproducts.slice(0, sizeArray).map((item) => item)
        );
        //   console.log("PRODUCTS: " + productsJson);
      } catch (error) {
        console.log(error);
      }
    };

    asyncFunction();
  }, []);

  return (
    <>
      <Title>Recommended for you</Title>
      <Container>
        {product.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
