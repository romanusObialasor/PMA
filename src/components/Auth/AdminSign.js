import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { app } from "../../base";
import HeaderComponent from "../HeaderComponent";
import { useHistory } from "react-router-dom";

const AdminSign = () => {
  const [image, setImage] = useState("/images/1.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
    setImage(image);
    history.push("/admin");
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
              <Button1 onClick={signIn}>Sign In</Button1>
            </Buttons>
            <Alt>
              Note: you need to register company in order to sign in as an admin
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

export default AdminSign;

const Alt = styled.div`
  width: 80%;
  text-align: center;
  margin-top: 20px;
`;

const RightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  /* height: 4%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Top = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin: 20px;
  /* background-color: white; */
  /* width: 100%; */
  /* margin-left: 60px; */
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  background: #5c49d7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
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
