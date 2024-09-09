import React from 'react';

interface ISvgProps {
  name: string;
}

const SvgIcon = ({ name }: ISvgProps) => {
  return <img src={`icons/${name}.svg`} alt={`${name} icon`} />;
};

export default SvgIcon;
