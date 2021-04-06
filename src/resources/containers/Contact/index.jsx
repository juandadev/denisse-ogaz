import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from '../../components';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <Container>
      <Row>
        <Col lg={6} xs={12}>
          <p className="h2 text-center">
            ¡Deja aquí tu mensaje para contactarte conmigo!
          </p>
        </Col>

        <Col
          lg={3}
          xs={12}
          className="d-flex flex-column justify-content-center"
        >
          <Form.Group controlId="name">
            <Form.Label>Nombre</Form.Label>

            <Form.Control type="text" placeholder="Tu nombre aquí" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Correo</Form.Label>

            <Form.Control type="email" placeholder="Tu correo aquí" />
          </Form.Group>
        </Col>

        <Col lg={3} xs={12}>
          <Form.Group controlId="message" className="contact--message">
            <Form.Label>Mensaje</Form.Label>

            <Form.Control as="textarea" placeholder="Empieza a escribir aquí" />
          </Form.Group>
        </Col>

        <Col xs={12} className="text-right contact--submit">
          <Button variant="secondary">Enviar</Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
