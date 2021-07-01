import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Col } from 'antd';
import cx from 'clsx';

// icons
import IconAll from '../../static/images/movie_all.svg';
import IconFavorite from '../../static/images/movie_favorite.svg';

// tabs
const tabLinks = [
  { path: '/', label: 'All', icon: IconAll },
  { path: '/favorites', label: 'Favorites', icon: IconFavorite }
];

const TabsLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Col className="tabs-layout__wrapper" span={24}>
      <div className="tabs">
        {tabLinks.map(({ path, label, icon }, index) => (
          <Link key={index} to={path}>
            <div className={cx('tab', pathname === path && 'active')}>
              <img src={icon} alt={label} />
              <span>{label}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="page">
        {children}
      </div>
    </Col>
  );
};

export default TabsLayout;
