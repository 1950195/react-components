/* eslint-disable */
/* tslint:disable */
const { global: vars } = require('sass-extract-loader!./_variables.scss');

export const rgba = (name: string, alpha: number) => {
  const style = vars[name];

  if (style.type !== 'SassColor') {
    return '';
  }

  const { r, g, b } = style.value;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default (name: string) => {
  const style = vars[name];

  switch(style.type) {
    case 'SassColor':
      return style.value.hex;
    case 'SassString':
      return style.value;
    default:
      return '';
  }
}
