import React, { useState, useEffect } from "react";
import {
  Breadcrumbs,
  Button,
  Icon,
  Divider,
  Navbar,
  Popover,
  Menu,
  MenuItem,
  MenuDivider,
  MenuHeader,
  Classes,
  Elevation
} from "@blueprintjs/core";
import logo from "../assets/logo.png";
import sub_logo from "../assets/sub_logo.png";
// import { Card } from "react-bootstrap";
import cover from "../assets/cover.jpg"
import {
  Card,
  CardHeader,
  CardBody,
  CardImgOverlay,
  CardImg
} from "reactstrap";

const levels = (
  <Menu>
    <Menu.Item
      text="Primary"
    // onClick={() => history.push(`/tasks/show/${task.id}`)}
    >
      <Menu.Item
        icon="caret-right"
        text="Grade 1"
      // onClick={() => deleteTask(task.id, index)}
      />
      <Menu.Item
        icon="caret-right"
        text="Grade 2"
      // onClick={() => deleteTask(task.id, index)}
      />
      <Menu.Item
        icon="caret-right"
        text="Grade 3"
      // onClick={() => deleteTask(task.id, index)}
      />
      <Menu.Item
        icon="caret-right"
        text="Grade 4"
      // onClick={() => deleteTask(task.id, index)}
      />
      <Menu.Item
        icon="caret-right"
        text="Grade 5"
      // onClick={() => deleteTask(task.id, index)}
      />
    </Menu.Item>
    <Menu.Item
      text="Elementary"
    // onClick={() => {
    //   history.push(`/tasks/edit/${task.id}`);
    // }}
    />
    <Menu.Item
      text="Secondary"
    // onClick={() => deleteTask(task.id, index)}
    />
  </Menu>
);

function MainPage() {
  return (
    <div id="school_app">
      <div id="mainPageHeader">
        <div className="row">
          <Navbar id="mainNavbar">
            <Navbar.Group>
              <Button className="bp3-minimal" icon="home" text="Home" />
              <Navbar.Divider />
              <Button
                className="bp3-minimal"
                icon="info-sign"
                text="About us"
              />
              <Navbar.Divider />
              <Popover
                position="bottom-left"
                content={levels}
                autoFocus={false}
              >
                <Button
                  id="buu"
                  minimal
                  className="bp3-minimal"
                  icon={"gantt-chart"}
                  text="Levels"
                />
              </Popover>
              <Navbar.Divider />
              <Button className="bp3-minimal" icon="manual" text="Books" />
              <Navbar.Divider />
              <Button
                className="bp3-minimal"
                icon="new-object"
                text="Admission"
              />
              <Navbar.Divider />
              <Button className="bp3-minimal" icon="phone" text="Contact us" />
            </Navbar.Group>
          </Navbar>
        </div>
        <div className="row">
          <div id="logoPart" className="col-md-12 col-sm-12">
            <div id="imageContainer">
              <img src={logo} />
            </div>
            <Button
              className="col mx-auto d-flex justify-content-center"
              id="homeButton"
            >
              Take a tour
            </Button>
          </div>
        </div>
      </div>
      <div className="row mx-auto mt-3">
        {/* <div className="col-md-12 col-sm-12 d-flex justify-content-center">
          <img src={sub_logo} />
        </div> */}
        <h1
          id="goals"
          className="col-md-12 col-sm-12 d-flex justify-content-center mt-0"
        >
          Our Goals
        </h1>
        {/* <p
          id="vision"
          className="col-md-6 col-sm-6 mx-auto d-flex justify-content-center"
        >
          "The function of education is to teach one to think intensively and to
          think critically. Intelligence plus character - that is the goal of
          true education."
        </p> */}

        <blockquote className="blockquote col-md-6 col-sm-6 mx-auto d-flex justify-content-center">
          <p>
            "The function of education is to teach one to think intensively and to
            think critically. Intelligence plus character - that is the goal of
            true education."
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
      <div id="cards_main" className="mt-3">
        <Card id="mainCards" interactive={true} elevation={Elevation.FOUR}>
          {/* <CardHeader>
            <div id="cardTitles">Learn</div>
          </CardHeader> */}
          <CardImg
            src={
              "https://child-testing.com/wp-content/uploads/2018/09/smiling-students-with-backpacks_1098-1220.jpg"
            }
          />
          <CardBody className="d-flex justify-content-center">
            <Button
              className="mx-auto d-flex justify-content-center"
              id="homeButton"
            >
              Take a tour
              </Button>
          </CardBody>
        </Card>
        <Card id="mainCards" interactive={true} elevation={Elevation.FOUR}>
          {/* <CardHeader>
            <div id="cardTitles">Build Your Character</div>
          </CardHeader> */}
          <CardImg
            src={
              "https://www.richereducation.co.uk/wp-content/uploads/2016/07/1.ENGLISH-1024x683.jpg"
            }
          />
          <CardBody className="d-flex justify-content-center mt-0">
            Card content
            </CardBody>
        </Card>
        <Card id="mainCards" interactive={true} elevation={Elevation.FOUR}>
          {/* <CardHeader>
            <div id="cardTitles">Have Fun</div>
          </CardHeader> */}
          <CardImg
            src={
              "https://ak3.picdn.net/shutterstock/videos/17913613/thumb/1.jpg"
            }
          />
          <CardBody className="d-flex justify-content-center">
            Card content
            </CardBody>
        </Card>
      </div>
      <Divider className="mt-3" />
    </div>
  );
}

export default MainPage;
