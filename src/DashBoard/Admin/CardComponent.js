import React from "react";
import styled from "styled-components";
import { AiOutlinePaperClip } from "react-icons/ai";

const CardComponent = ({ title, description, image, members }) => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Title>
            <div>.</div>
            {title}
          </Title>
          <AiOutlinePaperClip cursor="pointer" />
        </Top>
        <Desciption>{description} </Desciption>

        <Images>
          {members?.map((props) => (
            <Image src={props.image} />
          ))}
        </Images>
      </Wrapper>
    </Container>
  );
};

export default CardComponent;

const Container = styled.div`
  background: white;
  width: 270px;
  margin-top: 15px;
  height: auto;
  min-height: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  width: 90%;
  height: auto;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-top: -20px;
    font-size: 30px;
    margin-right: 3px;
    color: green;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Desciption = styled.div`
  height: auto;
  min-height: 100px;
  font-size: 14px;
  color: grey;
`;
const Images = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  position: absolute;
  object-fit: cover;
`;
