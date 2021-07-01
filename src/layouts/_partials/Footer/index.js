import React from 'react';
import { Col } from 'antd';

// assets
import IconLogo from '../../../static/images/logo.svg';
import IconFacebook from '../../../static/images/facebook.svg';
import IconTwitter from '../../../static/images/twitter.svg';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Col className="links" span={24}>
        <ul className="list-line__left">
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
        <div className="logo">
          <img src={IconLogo} alt="logo" />
        </div>
        <ul className="list-line__right">
          <li><a href="#">API</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </Col>
      <Col className="social" span={24}>
        <a
          className="facebook"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={IconFacebook} alt="facebook" />
        </a>
        <a
          className="twitter"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={IconTwitter} alt="twitter" />
        </a>
      </Col>
      <Col className="copyright" span={24}>
        <p>© MVPF Moive, 2021 . All Rights Reserved.</p>
      </Col>
    </div>
  );
};

export default Footer;
