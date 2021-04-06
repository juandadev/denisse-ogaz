import React from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col xl={6} xs={12}>
          <div className="footer__name">
            <p className="footer__name--1">Denisse Ogaz</p>

            <p className="footer--text">Lic. en Psicología</p>
          </div>

          <p className="footer--text">
            © 2020 Denisse Ogaz. Todos los derechos reservados
          </p>
        </Col>

        <Col
          className="d-flex justify-content-between flex-wrap"
          xl={6}
          xs={12}
        >
          <NavLink href="#hero">Inicio</NavLink>

          <NavLink href="#about">Acerca de</NavLink>

          <NavLink href="#courses">Cursos</NavLink>

          <NavLink href="#podcast">Podcast</NavLink>

          <NavLink href="#contact">Contacto</NavLink>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
