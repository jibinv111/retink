import { Col, Container, Row } from 'react-bootstrap';
import Image1 from '../assets/images/img1.png';
import Image2 from '../assets/images/img2.png';
import Image3 from '../assets/images/img3.png';
import Image4 from '../assets/images/img4.png';
import Image5 from '../assets/images/img5.png';
import Image6 from '../assets/images/img6.png';

const Transform = () => {
  return (
    <div className='transform'>
      <h4 className='text-center mb-4 heading'>
        Transform your Creation Process
      </h4>
      <p className='text-center fs-20'>
        With a new approach toordering content, you can now stop juggling
        multiple
        <br />
        documents and meetings and start publishing content faster and on demand
      </p>
      <h4 className='text-center mb-4 heading mt-5'>
        Activate your business growth with RetinkContent.
      </h4>
      <p className='text-center fs-20 mb-5'>
        Save time and maintain your brand identity within your budget range or
        <br />
        sign up for affordable plans and still access multiple content services
        like:
      </p>
      <Container>
        <Row>
          <Col md={4}>
            <img src={Image1} alt='Logos' />
            <h5 className='mt-3'>Logos</h5>
            <p className='mb-5 mt-4'>
              Have a unique & creative logo designed to express and represent
              your brand identity.
            </p>
          </Col>
          <Col md={4}>
            <img src={Image2} alt='Blog Writing' />
            <h5 className='mt-3'>Blog Writing</h5>
            <p className='mb-5 mt-4'>
              Write SEO enriched blog posts as long or short articles on any
              topic of your choice.
            </p>
          </Col>
          <Col md={4}>
            <img src={Image3} alt='Animated Videos' />
            <h5 className='mt-3'>Animated Videos</h5>
            <p className='mb-5'>&nbsp;</p>
          </Col>
          <Col md={4}>
            <img src={Image4} alt='Product Demo' />
            <h5 className='mt-3'>Product Demo</h5>
            <p className='mb-5 mt-4'>
              Introduce your product to potential customers in a clear and
              creative video.
            </p>
          </Col>
          <Col md={4}>
            <img src={Image5} alt='Copywriting' />
            <h5 className='mt-3'>Copywriting</h5>
            <p className='mb-5 mt-4'>
              Have creative and compelling copies written to boost your product,
              brand, service or company.
            </p>
          </Col>
          <Col md={4}>
            <img src={Image6} alt='Social Media Ads' />
            <h5 className='mt-3'>Social Media Ads</h5>
            <p className='mb-5 mt-4'>
              Boost sales and awareness with tailor made ads from experts.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Transform;
