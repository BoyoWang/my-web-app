import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import ProjCard from "./icons/Card";
import "./Projects.css";

class Projects extends Component {
  state = {
    cards: [
      {
        imgSrc: "assets/project1.png",
        imgOnLeft: true,
        cardTitleText: "TabaTImer",
        cardText: "A simple workout timer\niOS / Android app",
        btnLink: "https://github.com/BoyoWang/my-web-app",
        btnText: "Learn More",
      },
      {
        imgSrc: "assets/project2.png",
        imgOnLeft: false,
        cardTitleText: "Poyao.Wang",
        cardText: "This React webpage app\nDeployed on Firebase.",
        btnLink: "https://github.com/BoyoWang/control-box",
        btnText: "Learn More",
      },
      {
        imgSrc: "assets/project3.png",
        imgOnLeft: true,
        cardTitleText: "Motor Controller",
        cardText: "Raspberry Pi motor controller\nCoded in Python.",
        btnLink: "https://github.com/BoyoWang/control-box",
        btnText: "Learn More",
      },
    ],
  };
  render() {
    return (
      <Container fluid className="proj-div main-divs" id="proj-div">
        <Row className="proj-title justify-content-center">
          <Col xs={11} sm={10} md={8}>
            <h2>My Works</h2>
            <p className="lead">Feel free to browse my works on GitHub</p>
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center align-items-center">
          {this.state.cards.map((project, key) =>
            this.cardWithContent(project, key)
          )}
        </Row>
      </Container>
    );
  }

  cardWithContent(card, key) {
    return (
      <ProjCard
        key={key}
        imgSrc={card.imgSrc}
        imgOnLeft={card.imgOnLeft}
        cardTitleText={card.cardTitleText}
        cardText={card.cardText}
        btnLink={card.btnLink}
        btnText={card.btnText}
      />
    );
  }
}

export default Projects;
