import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://cdn.pixabay.com/photo/2019/02/16/14/19/shopping-4000414_1280.jpg");

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${tablet({
    width: "50%",
  })};
  ${mobile({
    width: "70%",
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
  margin: 10px 0;
  padding: 10px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin: 0 auto;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username"></Input>
          <Input placeholder="password"></Input>
          <Button>LOGIN</Button>
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
