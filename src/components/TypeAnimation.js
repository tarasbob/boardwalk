import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Revolutionizing',
        1000,
        'Redefining',
        1000,
        'Reimagining',
        1000,
        'Reinventing',
        1000,
        'Reshaping',
        110
      ]}
      wrapper="span"
      speed={410}
      repeat={Infinity}
    />
  );
};

export default TypeAnimationComponent;
