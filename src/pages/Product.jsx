import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile, tablet } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "20px", flexDirection: "column" })}
  ${tablet({ padding: "20px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
  border: 1px solid lightgray;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
  ${tablet({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "0px 20px" })}
  ${tablet({ padding: "0px 20px" })}
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "30px" })}
  ${tablet({ fontSize: "30px" })}
`;

const Description = styled.p`
  margin: 20px 0px;
  font-size: 18px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 16px;
  text-decoration: line-through black 1px;
  display: grid;
`;

const Discount = styled.span`
  font-weight: 200;
  font-size: 14px;
  margin-left: 5px;
  border-radius: 15px;
  padding: 3px 10px;
  background-color: lightgray;
`;

const DiscountedPrice = styled.span`
  font-weight: 200;
  font-size: 16px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  ${tablet({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.dummyjson.com/data/products/15/thumbnail.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>VERA WANG FRAGANCE</Title>
          <DiscountedPrice>
            Rp. 2000000
            <Discount> 20% OFF </Discount>
          </DiscountedPrice>
          <Price>Rp. 2500000</Price>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quod accusamus sint esse consequatur in veritatis iste natus ratione
            recusandae corporis laudantium at fuga, beatae nemo quasi
            perferendis molestias et!
          </Description>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
