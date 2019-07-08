import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconName, IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export interface IIconProps {
  name: IconName;
  color?: string;
}

export const Icon = ({
  name,
  color,
}: IIconProps) => {
  const iconLookup: IconLookup = { prefix: 'fas', iconName: name };
  const iconDefinition: IconDefinition = findIconDefinition(iconLookup);

  return <FontAwesomeIcon icon={iconDefinition} color={color} />;
};

export default Icon;
