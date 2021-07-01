import React from 'react';
import { Row, Col } from 'antd';

// components
import { Header, Footer } from '../_partials';

// icons
import IconAll from '../../static/images/movie_all.svg';
import IconFavorite from '../../static/images/movie_favorite.svg';

// tabs
const tabLinks = [
  { path: '/', label: 'All', icon: IconAll },
  { path: '/favorites', label: 'Favorites', icon: IconFavorite }
];

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
