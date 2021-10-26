import React from "react";
import styled from "styled-components";
import HomeSrceen from "./components/HomeSrceen";
import Register from "./components/Auth/Register";
import AdminSign from "./components/Auth/AdminSign";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import AdminHome from "./DashBoard/Admin/AdminHome";
import ProjectComponent from "./DashBoard/Admin/ProjectComponent";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminMembers from "./DashBoard/Admin/AdminMembers";
import AdminCreate from "./DashBoard/Admin/AdminCreate";
import UserOverView from "./DashBoard/User/UserOverView";
import UserProject from "./DashBoard/User/UserProject";
import MyProjects from "./DashBoard/User/MyProjects";
import Project from "./DashBoard/User/Project";
import UserCreate from "./DashBoard/User/UserCreate";

const App = () => {
  return (
    <Container>
      {/* Page b4 Register */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeSrceen} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/adminSign" component={AdminSign} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/adminProject/:id" component={ProjectComponent} />
          <Route exact path="/members" component={AdminMembers} />
          <Route exact path="/create" component={AdminCreate} />
          <Route exact path="/user" component={UserOverView} />
          <Route exact path="/userProject/:id" component={UserProject} />
          <Route exact path="/myProjects" component={MyProjects} />
          <Route exact path="/project/:id" component={Project} />
          <Route exact path="/userCreate" component={UserCreate} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background: #eeebff;
  /* display: flex; */
`;
