import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../components';
import carlaHero from '../../img/carla-hero.png';
import './Hero.css';

const Hero = () => (
  <div className="hero" id="hero">
    <Container>
      <Row>
        <Col lg={6} xs={12}>
          <div className="hero--header">
            <h1 className="h1">Denisse Ogaz</h1>
            <p className="hero--subtitle">Lic. en Psicología</p>
          </div>

          <div className="hero--content">
            <p className="normal-text">
              Mis años como estudiante aún no han terminado, ¿sabes por qué? La
              sociedad está en constante cambio y mi mente no me permite
              quedarme atrás en información. Ser un medio para facilitar lo
              aprendido es una gran satisfacción del proceso. Contribuir a
              transformar la educación es una emoción inigualable.
            </p>

            <Button href="#contact">Contáctame</Button>
          </div>
        </Col>

        <Col
          lg={6}
          xs={12}
          className="d-flex justify-content-center hero--image"
        >
          <img
            src={carlaHero}
            alt="Fotografía de Carla Denisse"
            title="Fotografía de Carla Denisse"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Hero;
