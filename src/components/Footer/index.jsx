import './index.css'
import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png'
import {Link} from 'react-router-dom'
const Footer = () => {

  const year= new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg="3" md="4" sm="6">
        <div className="footer__logo text-start">
          <img src={logo} alt="" />
          <h5>Tasty Treat</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minima laudantium odit, eum 
          </p>
        </div>
        </Col>
        <Col lg="3" md="4" sm="6">
          <h4 className="footer__title">Delivery</h4>
          <ListGroup className='delivery__time-list'>
            <ListGroupItem className="delivery__time-item border-0 ps-0">
              <span>Sunday-Thursday</span>
              <p>10:00am-11:00pm</p>
            </ListGroupItem>
            <ListGroupItem className="delivery__time-item border-0 ps-0">
              <span>Friday-Saturday</span>
              <p>off day</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg="3" md="4" sm="6">
        <h4 className="footer__title">Contact</h4>
          <ListGroup className='delivery__time-list'>
          <ListGroupItem className="delivery__time-item border-0 ps-0">
              <p>Location: DonHolm, Nairobi</p>
              
            </ListGroupItem>
            <ListGroupItem className="delivery__time-item border-0 ps-0">
              <span>Phone:+254702122421</span>
              
            </ListGroupItem>
            <ListGroupItem className="delivery__time-item border-0 ps-0">
              <span>Email: disonobudho233@gmail.com</span>
            
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg="3" md="4" sm="6">
        <h4 className="footer__title">Newsletters</h4>
        <p>Subscribe to our newsletters</p>
        <div className="d-flex justify-content-between newsletter">
            <input type="email" placeholder='Enter your email' />
            <span ><i className="ri-send-plane-line"></i></span>
        </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg="6" mb="6">
          <p className="copyright">&#169; {year}. Website made by Dison Obudho. All rights reserved</p>
        </Col>
        <Col lg="6" mb="6">
          <div className="social__links d-flex align-items-center justify-content-end gap-4">
            <p className='m-0'>Follow:</p>
            <span><Link to="https://www.facebook.com/Dison%20Obudho"><i className="ri-facebook-line"></i></Link></span>
            <span><Link to="https://github.com/DisonUyoga"><i className="ri-github-line"></i></Link></span>
            <span><Link to="https://www.youtube.com"><i className="ri-youtube-line"></i></Link></span>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer;
