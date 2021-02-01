import React from 'react';

//import './custom-button.styles.scss';

import { ButtonStyles } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <ButtonStyles {...otherProps}
  >
    {children}
  </ButtonStyles>
);

export default CustomButton;
