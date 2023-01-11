import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/images/logo.png';
import Big from '../assets/images/big.png';

const Header = () => {
  return (
    <div className='header my-5'>
      <Container>
        <Row>
          <Col md={8}>
            <img src={Logo} alt='logo' className='mb-5' />
            <h2>Get Advanced AI</h2>
            <h2>
              + Expert Created <span>Logos</span>
            </h2>
            <p className='mt-4'>
              Boost your sales <span>10x faster</span> with content customized
              by our
              <br />
              unique partnership of{' '}
              <span>human creativity and AI optimization</span>
            </p>
            <h4 className='mt-4 mb-3 heading'>Sign Up For The BETA!</h4>
            <div>
              <input type='text' placeholder='Business Name' />
              <span> would like a beta invite sent to </span>
              <input type='text' placeholder='@email address' />
              <span> when it’s ready!</span>
            </div>
            <div className='mt-4'>
              <button type='button' className='btn-notify me-md-4 mb-4 mb-md-0'>Notify me</button>
              <button type='button' className='btn-signup ms-md-4 mb-4 mb-md-0'>Sign up as a freelance partner</button>
            </div>
          </Col>
          <Col md={4}>
            <img src={Big} alt="retink" className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
