import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { app } from "../../base";
import { useHistory } from "react-router-dom";
import HeaderComponent from "../HeaderComponent";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [image, setImage] = useState("/images/1.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signUp = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    setImage("/images/1.png");
    setEmail("");
    setPassword("");
    history.push("/user");
  };

  return (
    <>
      <HeaderComponent />
      <Container>
        <Wrapper>
          <Left>
            <Top>Sign In:</Top>
            <Inputs>
              <Inputer
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Inputer
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Inputs>
            <Buttons>
              <Button1 onClick={signUp}>Sign In</Button1>
            </Buttons>
            <Alt>
              Don't have an account?{" "}
              <MyLink to="/signUp">
                <span>Sign up</span>
              </MyLink>
            </Alt>
          </Left>
          <Right>
            <RightImage src={image} />
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default SignIn;

const MyLink = styled(Link)``;

const RightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Alt = styled.div`
  margin-top: 30px;
  span {
    color: red;
    cursor: pointer;
  }
`;

const Button1 = styled(Button)`
  width: 300px;
  background-color: rgba(252, 0, 0, 0.7);
  border: none;
  color: white;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Inputer = styled(Input)`
  margin-bottom: 30px;
  width: 300px;
  /* margin-left: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 40px; */
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Top = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin: 20px;
  /* background-color: white; */
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  background: #5c49d7;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  justify-content: center;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 750px;
  height: 450px;
  background: white;
  display: flex;
  border: black 1px solid;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
`;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
