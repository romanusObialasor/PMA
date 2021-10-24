import React from "react";
import styled from "styled-components";
import UserNav from "./UserNav";

const UserCreate = () => {
  return (
    <div style={{ display: "flex" }}>
      <UserNav />
      <Container>
        <Wrapper>
          <Top>Create Projects</Top>
          <Inputs>
            <InputHolder>
              <Label>Title:</Label>
              <Input />
            </InputHolder>
            <InputHolder>
              <Label>Description:</Label>
              <TextArea />
            </InputHolder>
            <InputHolder>
              <Label>Deadline:</Label>
              <Input />
            </InputHolder>
          </Inputs>
          <ButttonHolder>
            <Submit>Create</Submit>
          </ButttonHolder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserCreate;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  background: white;
  height: 80%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: blue;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
`;

const Top = styled.div`
  font-size: 30px;
`;

const Inputs = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextArea = styled.textarea``;

const Submit = styled.div`
  width: 100px;
  height: 35px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transition: 250ms;
  background: blue;
  cursor: pointer;
  border: 1px solid blue;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;

const ButttonHolder = styled.div``;
