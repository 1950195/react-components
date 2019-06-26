/* tslint:disable:max-line-length */
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

  .btn-raised {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:active {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    }

    &:focus {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    }
  }

  body.sb-show-main {
    #story-root {
      padding: 0 2.5rem;
    }
  }
`;
