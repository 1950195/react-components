import 'bootstrap-scss/bootstrap.scss';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }

	html, body, #root, #root > div {
    height: 100%;
  }

  #root > div {
    display: flex;
    flex-direction: column;

    header {
      flex-shrink: 0;
    }

    #main {
      flex: 1 0 auto;
    }
  }
`;
