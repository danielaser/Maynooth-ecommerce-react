import {
  Call,
  Facebook,
  Instagram,
  LocationOn,
  MailOutline,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  background-color: #f7e5bb;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  ${mobile({ textAlign: "center" })}
  ${tablet({ textAlign: "center" })}
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  ${mobile({ justifyContent: "center" })}
  ${tablet({ justifyContent: "center" })}
`;

const SocialIcon = styled.p`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "white" })}
  ${tablet({ backgroundColor: "white" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MAYNOOTH</Logo>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sed
          obcaecati iure tempore eligendi dicta. Reiciendis, facilis sapiente.
          Hic laboriosam alias harum eos consectetur facilis corporis magni
          praesentium odit numquam!
        </Description>
        <SocialContainer>
          <SocialIcon color="415b90">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="ff5da2">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="a1dfff">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Smartphones</ListItem>
          <ListItem>Laptops</ListItem>
          <ListItem>Fragancies</ListItem>
          <ListItem>Skincare</ListItem>
          <ListItem>Groceries</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} /> 123 fake St, South 1231
        </ContactItem>
        <ContactItem>
          <Call style={{ marginRight: "10px" }} /> +57 322 365 4447
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@maynooth.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
