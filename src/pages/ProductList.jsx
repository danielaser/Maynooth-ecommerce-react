import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile, tablet } from "../responsive";

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
  return (
    <Container>
      <Navbar />
      <Title>Smartphones</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Relevance</FilterText>
        </Filter>
        <Filter>
          <FilterText>Latest</FilterText>
        </Filter>
        <Filter>
          <FilterText>Top Sales</FilterText>
        </Filter>
        <Filter>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>Price (ss)</Option>
            <Option>Price (disc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
