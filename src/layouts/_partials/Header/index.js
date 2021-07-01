import React from 'react';

// components
import { Button } from '../../../components/atoms';

// assets
import IconLogo from '../../../static/images/logo.svg';

const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        <a className="logo" href="/">
          <img src={IconLogo} alt="logo" />
          <span>match react exercise</span>
        </a>
        <div className="sign-in">
          <Button variant="link">
            Sign In
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
