/* tslint:disable:max-line-length */
import 'bootstrap-scss/bootstrap.scss';
import { createGlobalStyle } from 'styled-components';
import './_font.scss';

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

  body.sb-show-main {
    #root {
      > div:first-child {
        > div {
          > div:first-child {
            border: 0 none !important;
          }
        }
      }

      #story-root {
        padding: 0 2.5rem;
        border-left: 1px solid #eee;
      }
    }
  }
`;
