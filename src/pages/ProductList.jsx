import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile, tablet } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 50px;
  border-bottom: 1px solid #000;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "5px" })};
  ${tablet({ margin: "5px" })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  ${mobile({ fontSize: "15px" })};
  ${tablet({ fontSize: "15px" })};
`;

const Select = styled.select`
  font-size: 20px;
  font-weight: 600;
  border: none;

  ${mobile({ fontSize: "15px" })};
  ${tablet({ fontSize: "15px" })};
`;
const Option = styled.option`
  font-size: 20px;
  font-weight: 600;

  ${mobile({ fontSize: "15px" })};
  ${tablet({ fontSize: "15px" })};
  }
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("price");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Title>Smartphones</Title>
      <FilterContainer>
        <Filter>
          <FilterText name="relevance" onChange={handleFilters}>
            Relevance
          </FilterText>
        </Filter>
        <Filter>
          <FilterText name="latest" onChange={handleFilters}>
            Latest
          </FilterText>
        </Filter>
        <Filter>
          <FilterText name="topsales" onChange={handleFilters}>
            Top Sales
          </FilterText>
        </Filter>
        <Filter>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="price">Price</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;
