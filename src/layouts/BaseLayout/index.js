import React from 'react';
import { Row, Col } from 'antd';

// partials
import { Header, Footer } from '../_partials';

const BaseLayout = ({ children }) => {
  return (
    <Row className="base-layout__wrapper">
      {/* Header */}
      <Header />

      {/* Content */}
      <Col className="content" span={24}>
        {children}
      </Col>

      {/* Footer */}
      <Footer />
    </Row>
  );
};

export default BaseLayout;
