<template>

  <!-- header -->
  <nav class="navbar fixed-top" id="mainNav">
    <div class="header-menu">
      <div class="header-titile">
        <img v-bind:src="img_url" alt="KOKI Ajaku">
      </div>
      <div class="header-sns">
        <a href="https://www.instagram.com/ajaku_ku/?hl=ja" target="_blank">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24.6 24.6" style="enable-background:new 0 0 24.6 24.6;" xml:space="preserve">
            <path class="st0" d="M12.3,2.2c3.3,0,3.7,0,5,0.1c3.3,0.2,4.9,1.7,5.1,5.1c0.1,1.3,0.1,1.7,0.1,5c0,3.3,0,3.7-0.1,5
									c-0.2,3.3-1.7,4.9-5.1,5.1c-1.3,0.1-1.7,0.1-5,0.1c-3.3,0-3.7,0-5-0.1c-3.3-0.2-4.9-1.7-5.1-5.1c-0.1-1.3-0.1-1.7-0.1-5
									c0-3.3,0-3.7,0.1-5C2.4,4,4,2.4,7.3,2.3C8.6,2.2,9,2.2,12.3,2.2z M12.3,0C9,0,8.6,0,7.2,0.1c-4.5,0.2-7,2.7-7.2,7.2
									C0,8.6,0,9,0,12.3s0,3.8,0.1,5.1c0.2,4.5,2.7,7,7.2,7.2c1.3,0.1,1.7,0.1,5.1,0.1s3.8,0,5.1-0.1c4.5-0.2,7-2.7,7.2-7.2
									c0.1-1.3,0.1-1.7,0.1-5.1s0-3.8-0.1-5.1c-0.2-4.5-2.7-7-7.2-7.2C16.1,0,15.7,0,12.3,0z M12.3,6C8.8,6,6,8.8,6,12.3s2.8,6.3,6.3,6.3
									s6.3-2.8,6.3-6.3C18.6,8.8,15.8,6,12.3,6z M12.3,16.4c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1s4.1,1.8,4.1,4.1
									C16.4,14.6,14.6,16.4,12.3,16.4z M18.9,4.3c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5S19.7,4.3,18.9,4.3z" />
          </svg>
        </a>
        <a href="https://twitter.com/Ajaku4505" target="_blank">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.9 24.6" style="enable-background:new 0 0 30.9 24.6;" xml:space="preserve">
            <path class="st0" d="M30.3,2.9c-1.1,0.5-2.3,0.8-3.6,1c1.3-0.8,2.3-2,2.7-3.4c-1.2,0.7-2.5,1.2-4,1.5c-1.1-1.2-2.8-2-4.5-2
									c-4,0-7,3.7-6.1,7.6C9.8,7.4,5.2,4.9,2.1,1.1C0.5,3.9,1.3,7.6,4,9.4c-1,0-2-0.3-2.8-0.8c-0.1,2.9,2,5.6,5,6.2
									c-0.9,0.2-1.8,0.3-2.8,0.1c0.8,2.5,3.1,4.3,5.8,4.3c-2.6,2.1-5.9,3-9.2,2.6c2.8,1.8,6,2.8,9.5,2.8c11.6,0,18.1-9.8,17.7-18.5
									C28.4,5.3,29.5,4.2,30.3,2.9z" />
          </svg>
        </a>
      </div>
    </div>
  </nav>

</template>

<script>

export default {
  data () {
    return {
      img_url: '../img/index/header.png',
    }
  },
}

</script>

<style>

  @charset "utf-8";
  @import url(https://fonts.googleapis.com/earlyaccess/notosansjp.css);

  :root {
    --main-color: #3772FF;
    --sub-color: #3E3A39;
    font-family: "Noto Sans JP", sans-serif;
  }

  ::selection {
    background: #020887;
    color: #FFF;
  }

  /* Reset CSS */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    color: var(--sub-color);
    background: #F9F9F9;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    overflow-x: hidden;
  }

  main {
    display: block;
  }

  .weight100 {
    font-weight: 100;
  }

  .weight300 {
    font-weight: 300;
  }

  .weight500 {
    font-weight: 500;
  }

  .weight700 {
    font-weight: 700;
  }

  .weight900 {
    font-weight: 900;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    background-color: transparent;
    color: var(--sub-color);
    -webkit-transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
            transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
  }

  a:hover {
    opacity: .7;
    -webkit-transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
            transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
  }

  a.external-link {
    text-decoration: underline;
  }

  h1,
  p {
    margin: 0;
  }

  p,
  h2 {
  font-feature-settings: "palt" 1;
  letter-spacing: .12em;
  }

  img {
    border-style: none;
  }

  li {
    list-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input { /* 1 */
    overflow: visible;
  }

  button,
  select { /* 1 */
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

	
  nav#mainNav {
    width: 100%;
    margin: 5px 20px;
    z-index: 1;
    position: absolute;
  }

  nav svg {
    height: 40px;
    margin: 0 10px;
  }

  .header-menu {
    display: flex;
    align-items: center;

  }

  .header-sns {
    margin: 0 40px;
  }

</style>
