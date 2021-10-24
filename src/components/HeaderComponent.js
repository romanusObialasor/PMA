import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Container>
      <Header>
        <HeaderWrapper>
          <MyLink to="/">
            <Logo src="/images/2.png" />
          </MyLink>
          <Right>
            <MyLink to="/register">
              <Button>Register</Button>
            </MyLink>
            <MyLink to="/adminSign">
              <Button>Admin Login</Button>
            </MyLink>
            <MyLink to="/signIn">
              <Button>Sign In</Button>
            </MyLink>
          </Right>
        </HeaderWrapper>
      </Header>
    </Container>
  );
};

export default HeaderComponent;

const Container = styled.div`
  width: 100%;
  background-color: #eeebff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 50px;
`;

const Right = styled.div`
  display: flex;
`;

const Button = styled.div`
  padding: 7px 10px;
  background: blue;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  opacity: 0.8;
  transition: 350ms;
  margin-left: 10px;
  font-size: 14px;
  :hover {
    opacity: 1;
  }
`;

const MyLink = styled(Link)``;
