import React, { useState } from "react";
import styled from "styled-components";
import { app } from "../../base";
import HeaderComponent from "../HeaderComponent";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

const Register = () => {
  const history = useHistory();
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [err, setErr] = useState("");
  const [cLogo, setCLogo] = useState("/images/2.png");

  const displayLog = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    console.log(fileUrl);
    setCLogo(fileUrl);
  };

  const RegisterCom = async () => {
    try {
      const authUser = await app
        .auth("Romanus")
        .createUserWithEmailAndPassword(cEmail, cPassword);

      if (authUser) {
        await app
          .firestore()
          .collection("Register")
          .doc(authUser.user.uid)
          .set({
            cName: cName,
            cLogo: cLogo,
            cKey: authUser.user.uid,
            cEmail: cEmail,
            time: firebase.firestore.FieldValue.serverTimestamp(),
          });
      }
    } catch (error) {
      setErr(error.message);
    }
    history.push("/admin");
  };

  return (
    <>
      <HeaderComponent />
      <Container>
        <Wrapper>
          <ImageUpload>
            <Img src={cLogo} />
            <Upload htmlFor="img">Comapny's logo</Upload>
            <input
              style={{
                display: "none",
              }}
              id="img"
              type="file"
              onChange={displayLog}
            />
          </ImageUpload>
          <Inputs>
            <InputHolder>
              <Label>Comapny's name:</Label>
              <Input
                value={cName}
                onChange={(e) => {
                  setCName(e.target.value);
                }}
              />
            </InputHolder>
            <InputHolder>
              <Label>Comapny's email:</Label>
              <Input
                value={cEmail}
                onChange={(e) => {
                  setCEmail(e.target.value);
                }}
              />
            </InputHolder>
            <InputHolder>
              <Label>Password:</Label>
              <Input
                value={cPassword}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
            </InputHolder>
          </Inputs>
          <div>{err}</div>
          <Button
            onClick={() => {
              RegisterCom();
            }}
          >
            Submit
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 400px;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const ImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 75px;
  margin: 20px;
`;

const Upload = styled.label`
  width: 150px;
  background: blue;
  font-size: 13px;
  color: white;
  /* margin: 20px; */
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.05);
  }
`;

const Inputs = styled.div`
  /* margin-top: 10px; */
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  outline: none;
  padding-left: 5px;
  color: grey;
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  color: blue;
`;

const Label = styled.label`
  margin-bottom: 3px;
  font-size: 13px;
`;

const Button = styled.div`
  padding: 5px 10px;
  background: blue;
  color: white;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
  opacity: 0.8;
  transition: 350ms;
  :hover {
    opacity: 1;
  }
`;

// const Wrapper = styled.div``

// const Wrapper = styled.div``

// const Wrapper = styled.div``

// const Wrapper = styled.div``

// const Wrapper = styled.div``

// const Wrapper = styled.div``

// const Wrapper = styled.div``
