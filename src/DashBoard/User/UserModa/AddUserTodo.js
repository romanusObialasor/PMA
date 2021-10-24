import React from "react";
import styled from "styled-components";

const AddUserTodo = ({ onToggle }) => {
  return (
    <Container>
      <Main>
        <Holder>
          <Head>Add a Todo</Head>
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
        </Holder>
      </Main>
      <Plus onClick={onToggle}>+</Plus>
    </Container>
  );
};

export default AddUserTodo;

const Plus = styled.div`
  color: white;
  font-size: 40px;
  position: absolute;
  transition: 350ms;
  right: 20px;
  top: 10px;
  cursor: pointer;
  opacity: 0.7;
  transform: rotate(45deg);
  :hover {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Main = styled.div`
  color: white;
  z-index: 1;
  width: 30%;
  height: 80%;
  background: white;
  color: black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Holder = styled.div`
  /* flex: 0.8; */
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  height: 90%;
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
  height: 35px;
`;

const Head = styled.div`
  font-size: 30px;
`;

const Inputs = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: red; */
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
