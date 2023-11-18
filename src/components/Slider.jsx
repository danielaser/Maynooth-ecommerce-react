import styled from "styled-components";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  Key,
} from "@mui/icons-material";
import { useState } from "react";
import { SLIDER_ITEMS } from "../data";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  width: 93.5%;
  height: 85vh;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  margin: 20px 50px;
  ${mobile({ width: "70%", margin: "0px 50px" })};
  ${tablet({ width: "87%", margin: "20px 50px" })};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideindex * -100}vw);
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${mobile({ width: "35px", height: "35px", top: "20%" })};
  ${tablet({ top: "40%" })};
`;

const Slide = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-item: center;
  background-color: #${(props) => props.bg};
  ${mobile({ flexDirection: "column", height: "100%" })};
  ${tablet({ flexDirection: "column", height: "100%" })};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  ${tablet({ height: "70%" })};
`;

const Image = styled.img`
  height: 100%;
  width: 550px;
  ${mobile({ width: "70%", objectFit: "cover" })};
  ${tablet({ width: "90%", objectFit: "cover" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 70px 50px 50px 50px;
  padding-right: 12em;
  ${mobile({ textAlign: "center", padding: "20px 100px 20px 40px" })};
  ${tablet({ textAlign: "center", padding: "20px 110px 20px 30px" })};
`;

const Title = styled.h1`
  font-size: 60px;
  ${mobile({ fontSize: "24px" })};
  ${tablet({ fontSize: "24px" })};
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "14px", margin: "20px 0px" })};
  ${tablet({ fontSize: "14px", margin: "20px 0px" })};
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      106.5deg,
      rgba(255, 215, 185, 0.91) 23%,
      rgba(223, 159, 247, 0.8) 93%
    );
  }
  ${mobile({ fontSize: "14px" })};
  ${tablet({ fontSize: "14px" })};
`;

const Slider = () => {
  const [slideindex, setSlideIndex] = useState(0);

  function handleClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideindex > 0 ? slideindex - 1 : 2);
    } else {
      setSlideIndex(slideindex < 2 ? slideindex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideindex={slideindex}>
        {SLIDER_ITEMS.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
