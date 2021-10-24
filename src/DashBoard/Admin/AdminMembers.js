import React, { useState, useEffect, useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import styled from "styled-components";
import AdminNav from "./AdminNav";
import { app } from "../../base";
import { GlobalProvider } from "../../Auth/GlobalComponent";

const AdminMembers = () => {
  const currentUser = useContext(GlobalProvider);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const authUser = await app.auth().currentUser;

    if (authUser) {
      await app
        .firestore()
        .collection("Register")
        .doc(authUser.uid)
        .collection("user")
        .onSnapshot((snapshot) => {
          const item = [];
          snapshot.forEach((doc) => {
            item.push({ ...doc.data(), id: doc.id });
          });
          setData(item);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <AdminNav />
      <Container>
        <Wrapper>
          {data?.map((props) => (
            <Holder key={props.id}>
              <Image src={props.image} />
              <Name>{props.name}</Name>
              <Delete />
            </Holder>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default AdminMembers;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 90%;
`;

const Holder = styled.div`
  width: 400px;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  object-fit: cover;
`;

const Name = styled.div`
  width: 300px;
  font-size: 16px;
  font-weight: 600;
`;

const Delete = styled(AiFillDelete)`
  color: red;
  opacity: 0.7;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
