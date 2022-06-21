import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body{
    font-family: 'M PLUS Rounded 1c', sans-serif;
    margin: 0;
    box-sizing: border-box;
    letter-spacing: -.3px;

  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 3rem 0;
    border-bottom: 1px solid #eee;
  }
  .row-left{
    flex-shrink: 0;
    padding-right: 1rem;
    flex-basis: 18rem;
  }
  .row-right {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .role {
    display: block;
  }
  .time {
    display: block;
    margin-bottom: 1.5rem;
  }
  div{
    display: block;
  }
  @media screen and (max-width: 960px) {
    body, html {
      font-size: 14px;
    }
    .row-left {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      padding-right: 0;
      padding-bottom: 1rem;
    }
    .row {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }

 
  
`;

export default GlobalStyle;