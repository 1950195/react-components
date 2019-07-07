/* eslint-disable */
/* tslint:disable */
const { global: vars } = require('sass-extract-loader!./_variables.scss');

export default (name: string) => {
  const style = vars[name];

  switch(style.type) {
    case 'SassColor':
      return style.value.hex;
    default:
      return style.value;
  }
}
