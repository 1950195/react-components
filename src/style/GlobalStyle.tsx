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

  @keyframes bounceout {
      0%  { transform:scale(0)}
      25% { transform:scale(.8)}
      50% { transform:scale(1.4)}
      75% { transform:scale(1.2)}
      100%{ transform:scale(1)}
  }

  body.sb-show-main {
    #root {
      > div:first-of-type {
        > div:not(#story-root) {
          > div:first-of-type {
            border: 0 none !important;
          }
        }
      }

      #story-root {
        padding: 0 2.5rem;

        > button ~ button,
        > input[type=radio] ~ input[type=radio],
        > input[type=checkbox] ~ input[type=checkbox] {
          margin-left: .5rem;
        }

        > span ~ span {
          margin-left: 1.5rem;
        }

        > input[type=text] ~ input[type=text] {
          margin-top: .5rem;
        }
      }
    }
  }
`;
