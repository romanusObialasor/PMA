import React from "react";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineFolderOpen,
  AiOutlineMessage,
  AiOutlineCalendar,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { app } from "../../base";

const AdminNav = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>.studio</Header>
          <Top>
            <MyLink to="/admin">
              <Holder>
                <AiOutlineHome />
                <span>OverView</span>
              </Holder>
            </MyLink>
            <Holder>
              <BsBarChart />
              <span>Stats</span>
            </Holder>
            <MyLink to="/create">
              <Holder>
                <AiOutlineFolderOpen />
                <span> Create Projects</span>
              </Holder>
            </MyLink>
            <Holder>
              <AiOutlineMessage />
              <span>Charts</span>
            </Holder>
            <MyLink to="/members">
              <Holder>
                <AiOutlineCalendar />
                <span>Members</span>
              </Holder>
            </MyLink>
          </Top>
          <Bottom>
            <Holder>
              <AiOutlineSetting />
              <span>Settings</span>
            </Holder>
            <Holder
              onClick={() => {
                app.auth().signOut();
              }}
            >
              <AiOutlineLogout />
              <span>Log out</span>
            </Holder>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default AdminNav;

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Container = styled.div`
  width: 300px;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  /* z-index: 1000000; */
`;

const Wrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  height: 60%;
  margin-bottom: 10px;
`;

const Holder = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  transition: 350ms;
  cursor: pointer;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
  span {
    margin-left: 20px;
    font-weight: 500;
    color: black;
    /* font-size: 17px; */
  }
`;

const Bottom = styled.div`
  /* flex: 1; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
