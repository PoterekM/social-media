import React from "react";
import NavBar from "./NavBar";
import Post from "./Post";
import ProfileList from "./ProfileList";
import About from "./About";
import SideBox from "./SideBox";
import { Button }  from "react-bootstrap";
import { Container, Row, Col } from "react-grid-system";

function App(props){

  return (
    <div>
      <NavBar/>

    <Container>
      <Row>
        <Col sm={4}>
          <ProfileList />
        </Col>
        <Col sm={4}>
          <Post />
        </Col>
        <Col sm={4}>
          <SideBox/>
        </Col>
      </Row>
    </Container>


    </div>
  );
}

export default App;
