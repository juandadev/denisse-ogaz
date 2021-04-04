import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../components/Button';
import './Courses.css';
import autismoCover from '../../img/curso-autismo.png';
import tdahCover from '../../img/curso-tdah.jpg';

const Courses = () => (
  <div className="courses" id="courses">
    <Container>
      <h2 className="h2 text-center">Co-autora de cursos destacados como</h2>

      <Row className="courses__container">
        <Col className="courses__container__item" lg={6} xs={12}>
          <img
            src={autismoCover}
            alt="Portada del curso Entendiendo al autismo"
            title="Portada del curso Entendiendo al autismo"
          />

          <p className="card-title">
            Entendiendo al autismo: “Comprendiendo un cerebro complejo”
          </p>

          <Button href="https://plataformainad.com/p/entendiendo-el-autismo">
            Ver curso
          </Button>
        </Col>

        <Col className="courses__container__item" lg={6} xs={12}>
          <img
            src={tdahCover}
            alt="Portada del curso Aproximación al TDAH"
            title="Portada del curso Aproximación al TDAH"
          />

          <p className="card-title">
            Aproximación al TDAH: “Entendiendo un cerebro en movimiento”
          </p>

          <Button href="https://plataformainad.com/p/aproximacion-al-tdah">
            Ver curso
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Courses;
