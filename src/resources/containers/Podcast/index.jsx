import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Podcast.css';

const podcasts = [
  {
    id: 1,
    title: 'El miedo: ¿saboteador o cualidad humana?',
    url: 'https://www.youtube.com/embed/CjsWNI4u0rQ',
  },
  {
    id: 2,
    title: 'Dependencia emocional',
    url: 'https://www.youtube.com/embed/B4RdNMcYt0w',
  },
  {
    id: 3,
    title: 'Crianza Positiva',
    url: 'https://www.youtube.com/embed/3-NPM7KMEmg',
  },
];

const Podcast = () => {
  const [title, setTitle] = useState(
    'El miedo: ¿saboteador o cualidad humana?'
  );
  const [video, setVideo] = useState(
    'https://www.youtube.com/embed/CjsWNI4u0rQ'
  );

  const changePodcast = (title, url) => {
    setTitle(title);
    setVideo(url);
  };

  const handleKeyPress = () => {};

  return (
    <div className="podcast" id="podcast">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="h2">Podcast</h2>

            <p className="normal-text podcast--desc">
              Escucha también mis colaboraciones en el podcast Cerebralmente de
              INAD
            </p>
          </Col>

          <Col lg={6} xs={12}>
            {podcasts.map((podcast) => (
              <div
                key={`podcast-${podcast.id}`}
                className={`d-flex align-items-center podcast-item podcast-${podcast.id}`}
                onClick={() => changePodcast(podcast.title, podcast.url)}
                role="button"
                tabIndex={podcast.id - 1}
                onKeyPress={handleKeyPress}
              >
                <div className="play-icon">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.68258 13.8927C3.98732 8.3304 8.3304 3.98732 13.8927 2.68258V2.68258C17.9097 1.74031 22.0903 1.74031 26.1073 2.68258V2.68258C31.6696 3.98732 36.0127 8.3304 37.3174 13.8927V13.8927C38.2597 17.9097 38.2597 22.0903 37.3174 26.1073V26.1073C36.0127 31.6696 31.6696 36.0127 26.1073 37.3174V37.3174C22.0903 38.2597 17.9097 38.2597 13.8927 37.3174V37.3174C8.33041 36.0127 3.98732 31.6696 2.68258 26.1073V26.1073C1.74032 22.0903 1.74032 17.9097 2.68258 13.8927V13.8927Z"
                      stroke="#000000"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M24.5037 17.6472C26.1377 18.6929 26.1377 21.3071 24.5037 22.3528L18.989 25.882C17.355 26.9277 15.3125 25.6205 15.3125 23.5292L15.3125 16.4708C15.3125 14.3795 17.355 13.0723 18.989 14.118L24.5037 17.6472Z"
                      stroke="#000000"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                <p className="podcast-title">{podcast.title}</p>
              </div>
            ))}
          </Col>

          <Col lg={6} xs={12} className="d-flex justify-content-center">
            <iframe
              width={560}
              height={315}
              src={video}
              title={`Podcast ${title}`}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Podcast;
