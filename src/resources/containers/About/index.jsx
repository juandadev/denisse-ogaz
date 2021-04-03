import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../components';
import aboutIllustration from '../../svg/about-illustration.svg';
import brainIllustration from '../../svg/brain.svg';
import './About.css';

const About = () => (
  <div className="about" id="about">
    <Container>
      <Row className="about-1">
        <Col className="about__info">
          <div className="about__info--img">
            <img
              src={aboutIllustration}
              alt="Ilustración de la sección Acerca de"
              title="Ilustración de la sección Acerca de"
            />
          </div>

          <h2 className="h2">Acerca de mí</h2>

          <p className="normal-text">
            Egresada del Centro Cultural Universitario, esposa y madre de
            familia, decidí iniciar y desarrollar nuevos campos de estudio,
            tales como la educación y neurociencias, para aportar mi experiencia
            y aprendizaje a la sociedad.
          </p>

          <p className="normal-text">
            Apasionada por el estudio del comportamiento humano, he enfocado mi
            formación profesional en talleres, cursos presenciales y en línea,
            para proporcionar conocimientos que permiten el desenvolvimiento
            personal y profesional; llevando a cabo participaciones en Congresos
            Internacionales en Psicología.
          </p>

          <p className="normal-text">
            He participado como conferencista en temas de Inteligencia
            Emocional, desarrollo psicomotor del niño, neuroeducación,
            autoestima.
          </p>

          <p className="normal-text">
            Participé en campañas de salud mental para el adulto mayor, así como
            charlas de desarrollo socioemocional a nivel bachillerato. Uno de
            mis emprendimientos más importantes, fue contribuir en un proyecto a
            favor de jóvenes en riesgo de delincuencia y adicciones, facilitando
            técnicas y estrategias de bienestar, motivación y superación.
          </p>

          <p className="normal-text">
            Colaboré como auxiliar docente, donde pude observar las carencias
            educativas y del sistema que no permitía el crecimiento tanto
            profesional como de alumnado, a partir de ahí, me nació un
            compromiso por contribuir en múltiples estrategias para cambiar la
            calidad educativa en cada nivel educativo.
          </p>
        </Col>
      </Row>

      <Row className="about-2">
        <Col
          className="about-2__info d-flex flex-column justify-content-center align-items-center"
          md={6}
          xs={12}
        >
          <p className="normal-text">
            Hasta el día de hoy, intervengo como Coordinadora Académica dentro
            del Instituto de Neurociencias Aplicadas al Desarrollo S.C donde por
            más de 5 años se han realizado actividades de investigación,
            talleres, conferencias y cursos de divulgación neurocientífica
            relacionadas con le educación y la autorrealización humana, así como
            co-autora de cursos INAD.
          </p>

          <Button className="align-self-md-start" href="#contact">
            Contáctame
          </Button>
        </Col>

        <Col
          className="about-2__img d-flex justify-content-center"
          md={6}
          xs={12}
        >
          <img
            src={brainIllustration}
            alt="Ilustración de un cerebro con signo de pregunta"
            title="Ilustración de un cerebro con signo de pregunta"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
