import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/images/logo.png';
import Facebook from '../assets/images/face.svg';
import Twitter from '../assets/images/twitter.svg';
import Instagram from '../assets/images/insta.svg';
import Linkedin from '../assets/images/link.svg';
import Youtube from '../assets/images/youtube.svg';
import Pinterest from '../assets/images/pin.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social'>
        <Container>
          <Row>
            <Col md={8}>
              <img src={Logo} alt='retink' />
              <Row>
                <Col>
                  <p>
                    <a href='/'>Product by Retink Media UG</a>
                  </p>
                  <p>
                    <a href='/'>Bonn, Germany</a>
                  </p>
                </Col>
                <Col>
                  <p>
                    <a href='/'>Get Early Acess</a>
                  </p>
                  <p>
                    <a href='/'>Provide Feedback</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <h5 className='mb-3'>Connect with Us</h5>
              <div className='d-flex justify-content-between'>
                <a href='/'>
                  <img src={Facebook} alt='' />
                </a>
                <a href='/'>
                  <img src={Twitter} alt='' />
                </a>
                <a href='/'>
                  <img src={Instagram} alt='' />
                </a>
                <a href='/'>
                  <img src={Linkedin} alt='' />
                </a>
                <a href='/'>
                  <img src={Youtube} alt='' />
                </a>
                <a href='/'>
                  <img src={Pinterest} alt='' />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='copyright'>
        <Container>
          <Row>
            <Col>
              <p className='text-center'>Copyright © 2021 Retink</p>
            </Col>
            <Col>
              <div className='text-center'>
                <a href='/' className='pe-4'>
                  Privacy Policy
                </a>{' '}
                <a href='/'>Terms of Service</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
