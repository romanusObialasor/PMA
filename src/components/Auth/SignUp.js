import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { app } from "../../base";
import firebase from "firebase";
import HeaderComponent from "../HeaderComponent";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [image, setImage] = useState("/images/1.png");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cKey, setCKey] = useState("");
  const [percent, setPercent] = useState(0);
  const history = useHistory();

  const displayImg = async (e) => {
    const file = e.target.files[0];
    const fileRef = app.storage().ref();
    const storageRef = fileRef.child("avatarPMA/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counted = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(Math.floor(counted));
      },
      (err) => console.log(err.message),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setImage(URL);
          console.log(URL);
        });
      }
    );
  };

  const signUp = async () => {
    const authUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(cKey)
        .collection("user")
        .doc(authUser.user.uid)
        .set({
          name: name,
          email: email,
          image: image,
          time: firebase.firestore.FieldValue.serverTimestamp(),
          createdBy: authUser.user.uid,
        });
      localStorage.setItem("cKey", cKey);
      setImage("/images/1.png");
      setEmail("");
      setName("");
      setPassword("");
    }
    history.push("/user");
  };

  return (
    <>
      <HeaderComponent />
      <Container>
        <Wrapper>
          <Left>
            <Top>Create Account:</Top>
            <Inputs>
              <Inputer type="file" onChange={displayImg} />
              <Inputer
                placeholder="UserName"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
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
              <Inputer
                placeholder="Company's key"
                value={cKey}
                onChange={(e) => {
                  setCKey(e.target.value);
                }}
              />
            </Inputs>
            <Buttons>
              <Button1 onClick={signUp}>Sign Up</Button1>
            </Buttons>
            <Alt>
              Already have an account?{" "}
              <MyLink to="/signIn">
                <span>Sign In</span>
              </MyLink>
            </Alt>
          </Left>
          <Right>
            <RightImage src={image} />
            {percent > 0 && percent < 99.999 ? (
              <Percentage>{percent}</Percentage>
            ) : null}
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default SignUp;

const MyLink = styled(Link)``;

const Percentage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.5);
  color: white;
`;

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
  margin-bottom: 15px;
  width: 300px;
  /* margin-left: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 40px; */
`;

const Inputs = styled.div``;

const Top = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin: 20px;
  /* background-color: white; */
  width: 100%;
  margin-left: 60px;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  background: #5c49d7;
  display: flex;
  align-items: center;
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
