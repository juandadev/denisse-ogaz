import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './Button.css';

const CustomButton = ({ children, href, variant }) => (
  <Button variant={variant} href={href}>
    {children}
  </Button>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  variant: PropTypes.string,
};

CustomButton.defaultProps = {
  href: '',
  variant: 'primary',
};

export default CustomButton;
