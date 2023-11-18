import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://cdn.pixabay.com/photo/2018/07/11/11/14/ecommerce-3530785_1280.jpg");

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  background-color: white;
  ${mobile({
    width: "80%",
  })};
  ${tablet({
    width: "50%",
  })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  mid-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
          <Agreement>
            By creating and account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
