import { useState, useLayoutEffect } from 'react'
import rough from 'roughjs/bundled/rough.esm'
import Draw from './Draw'
import { Col, Row, Container } from 'react-bootstrap'

const draw = new Draw('pencil')

const App = () => {
  return (
    <>
      <Container className="max-height">
        <Row className="mt-4 mb-4">
          <h3>Whiteboard</h3>
        </Row>

        <Row>

          <Col lg={2} md={2} sm={2}>
            <Row onClick={(e) => draw.setMethod('pencil')}>
              <p>Pencil</p>
            </Row>
            <Row  onClick={(e) => draw.setMethod('circle')}>
              <p>Circle</p>
            </Row>
            <Row onClick={(e) => draw.setMethod('rectangle')}>
              <p>Rectangle</p>
            </Row>
            <Row onClick={(e) => draw.setMethod('line')}>
              <p>Line</p>
            </Row>
          </Col>

          <Col className="max-height" lg={10} md={10} sm={10}>
            <canvas
              id='canvas'
              onClick={(e) => draw.draw()}
              width={window.innerWidth}
              height={document.documentElement.scrollHeight}
              >
            </canvas>
          </Col>

        </Row>
      </Container>
    </>
  )
};

export default App
