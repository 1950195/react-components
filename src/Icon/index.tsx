import React from 'react';
import ReactDOMServer from 'react-dom/server';
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

export const encodeIcon = ({ name, color }: IIconProps) =>
  `url(data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<Icon {...{ name, color }} />),
  )})`;
