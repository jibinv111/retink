import { Col, Container, Row } from 'react-bootstrap';
import Icon1 from '../assets/images/icon1.svg';
import Icon2 from '../assets/images/icon2.svg';
import Icon3 from '../assets/images/icon3.svg';
import Icon4 from '../assets/images/icon4.svg';
import Icon5 from '../assets/images/icon5.svg';
import Video from '../assets/images/video.png';

const Explainer = () => {
  return (
    <div className='explainer mb-5'>
      <h4 className='text-center mb-4 heading'>EXPLAINER VIDEO</h4>
      <p className='text-center my-5'>
        <img src={Video} alt='Video' className='img-fluid' />
      </p>
      <Container>
        <Row>
          <Col md={4}>
            <div className='box'>
              <p>
                <img src={Icon1} alt='Icon' />
              </p>
              <h4>MakeAI-assisted Content Choices</h4>
              <p>
                Access and Order from an extensive catalogue in any language and
                on your budget’s terms. If unsure, our AI guides you to the
                best.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className='box'>
              <p>
                <img src={Icon2} alt='Icon' />
              </p>
              <h4>Upload and Maintain your Brand Identity</h4>
              <p>
                Add your preferences and brand assets to ensure the contents is
                consistent with your brand identity. No brand asset? We can make
                for you!
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className='box'>
              <p>
                <img src={Icon3} alt='Icon' />
              </p>
              <h4>Be informed as we create</h4>
              <p>
                Your details are translated and sent to the AI,{' '}
                <a href='/'>FP</a>, or both (per your choice) as you relax and
                receive continuous updates.
              </p>
            </div>
          </Col>
          <Col md={4} className='mt-5'>
            <div className='box'>
              <p>
                <img src={Icon4} alt='Icon' />
              </p>
              <h4>Receive and Review</h4>
              <p>
                The finished content is delivered and you can make corrections
                that we will effect to satisfy your requirements.
              </p>
            </div>
          </Col>
          <Col md={4} className='mt-5'>
            <div className='box'>
              <p>
                <img src={Icon5} alt='Icon' />
              </p>
              <h4>Publish and Monitor your contents’ progress</h4>
              <p>
                The finished content is delivered and you can make corrections
                that we will effect to satisfy your requirements.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Explainer;
