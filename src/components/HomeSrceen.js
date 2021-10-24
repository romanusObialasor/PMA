import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

const HomeSrceen = () => {
  return (
    <>
      <HeaderComponent />
      <Container>
        <Wrapper>
          <Holder>
            <Left>
              <Head>Simple helps teams move work forward.</Head>
              <Text>
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with Trello.
              </Text>
              <MyLink to="/signUp">
                <Button2>Sign Up</Button2>
              </MyLink>
            </Left>
            <Img src="/images/1.webp" />
          </Holder>
        </Wrapper>
      </Container>
    </>
  );
};

export default HomeSrceen;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  background-color: #eeebff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 35%;
`;

const Head = styled.div`
  font-family: "Charlie Display", sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
`;

const Text = styled.div`
  font-size: 20px;
  line-height: 30px;
`;

const Button2 = styled.div`
  width: 120px;
  height: 40px;
  background: blue;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  opacity: 0.8;
  transition: 350ms;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 1;
  }
`;

const MyLink = styled(Link)``;
