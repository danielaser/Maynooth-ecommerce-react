import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

//Stiled component Product

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  border-radius: 15px;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 40px 30px;
  min-width: 250px;
  height: 250px;
  display: flow;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 15px;
  border: 1px solid lightgray;

  &:hover ${Info} {
    opacity: 1.5;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 15px;
  z-index: 2;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #fde9df;
    transform: scale(1.1);
  }
`;

const Name = styled.p`
  font-size: 20px;
  margin-left: 5px;
  ${mobile({
    fontSize: "15px",
  })};
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-left: 5px;
  ${mobile({
    fontSize: "15px",
  })};
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.thumbnail} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <Name>Product name</Name>
      <Price>Rp. 50000</Price>
    </Container>
  );
};

export default Product;
