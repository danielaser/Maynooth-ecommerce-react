import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

//Pixabay API for searching images (https://pixabay.com/api/)
async function imageSearch(name) {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=40713992-2d3dd6a2760293a56b8302581&q=${name}&image_type=photo`
    );
    const imagesData = await response.json();
    return imagesData.hits[0].webformatURL;
  } catch (error) {
    console.log(error);
  }
}

// Styled for Categories component

const Title = styled.h1`
  padding: 20px 50px;
  font-size: 40px;
  margin-top: 40px;
  ${mobile({
    fontSize: "25px",
    textAlign: "center",
  })};
`;

const Container = styled.div`
  padding: 10px 45px 20px 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Categories = () => {
  const [changeArrayCategories, setChangeArrayCategories] = useState([]);

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        // Request Products/categories API
        const categoriesResponse = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const categoriesJson = await categoriesResponse.json();

        // Fetch images for each category
        const imagesFetchPromise = categoriesJson.map((element) =>
          imageSearch(element)
        );
        const categoryImages = await Promise.all(imagesFetchPromise);

        // Update state with fetched categories and images
        setChangeArrayCategories(
          categoriesJson.map((element, index) => ({
            title: element,
            img: categoryImages[index],
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    asyncFunction();
  }, []);

  // Get the first five categories of the Category's Array
  let sizeArray = 5;
  let firstElementsArray = changeArrayCategories.slice(0, sizeArray);

  return (
    <>
      <Title>Shop by category</Title>
      <Container>
        {firstElementsArray.map((item) => (
          <CategoryItem key={item.title} item={item} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
