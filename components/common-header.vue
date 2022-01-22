<template>

	<!-- header -->
	<nav class="navbar fixed-top" id="mainNav">
		<div class="header-menu">
			<div class="header-titile">
				<a v-bind:href="url">
					<img v-bind:src="img_url" alt="KOKI Ajaku">
				</a>
			</div>
			<div class="header-sns pc">
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
			<div role="navigation" class="spnav sp" v-bind:class="{active:hoge}">
				<div id="menuToggle">
					<input type="checkbox">
					<div class="nav__bg"></div>
					<span></span>
					<span></span>
					<span></span>
					<ul id="menu">
						<li class="headerNav__item">
							<a v-bind:href="url" class="headerNav__url">
								<h4>ホーム</h4>
								<p>Home</p>
							</a>
						</li>
						<li class="headerNav__item">
							<router-link class="headerNav__url" to="/mycar/accord">
								<h4>痛車遍歴</h4>
								<p>MyCar</p>
							</router-link>
						</li>
						<li class="headerNav__item">
							<router-link class="headerNav__url" to="../design">
								<h4>デザイン</h4>
								<p>Design</p>
							</router-link>
						</li>
						<li class="headerNav__item">
							<router-link class="headerNav__url" to="../photo">
								<h4>写真</h4>
								<p>Photo</p>
							</router-link>
						</li>
						<div class="header-sns">
							<a href="https://www.instagram.com/ajaku_ku/?hl=ja" target="_blank">
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24.6 24.6" style="enable-background:new 0 0 24.6 24.6;" xml:space="preserve">
									<path class="st0" d="M12.3,2.2c3.3,0,3.7,0,5,0.1c3.3,0.2,4.9,1.7,5.1,5.1c0.1,1.3,0.1,1.7,0.1,5c0,3.3,0,3.7-0.1,5
										c-0.2,3.3-1.7,4.9-5.1,5.1c-1.3,0.1-1.7,0.1-5,0.1c-3.3,0-3.7,0-5-0.1c-3.3-0.2-4.9-1.7-5.1-5.1c-0.1-1.3-0.1-1.7-0.1-5c0-3.3,0-3.7,0.1-5C2.4,4,4,2.4,7.3,2.3C8.6,2.2,9,2.2,12.3,2.2z M12.3,0C9,0,8.6,0,7.2,0.1c-4.5,0.2-7,2.7-7.2,7.2C0,8.6,0,9,0,12.3s0,3.8,0.1,5.1c0.2,4.5,2.7,7,7.2,7.2c1.3,0.1,1.7,0.1,5.1,0.1s3.8,0,5.1-0.1c4.5-0.2,7-2.7,7.2-7.2c0.1-1.3,0.1-1.7,0.1-5.1s0-3.8-0.1-5.1c-0.2-4.5-2.7-7-7.2-7.2C16.1,0,15.7,0,12.3,0z M12.3,6C8.8,6,6,8.8,6,12.3s2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3C18.6,8.8,15.8,6,12.3,6z M12.3,16.4c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1s4.1,1.8,4.1,4.1C16.4,14.6,14.6,16.4,12.3,16.4z M18.9,4.3c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5S19.7,4.3,18.9,4.3z" />
								</svg>
							</a>
							<a href="https://twitter.com/Ajaku4505" target="_blank">
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.9 24.6" style="enable-background:new 0 0 30.9 24.6;" xml:space="preserve">
									<path class="st0" d="M30.3,2.9c-1.1,0.5-2.3,0.8-3.6,1c1.3-0.8,2.3-2,2.7-3.4c-1.2,0.7-2.5,1.2-4,1.5c-1.1-1.2-2.8-2-4.5-2c-4,0-7,3.7-6.1,7.6C9.8,7.4,5.2,4.9,2.1,1.1C0.5,3.9,1.3,7.6,4,9.4c-1,0-2-0.3-2.8-0.8c-0.1,2.9,2,5.6,5,6.2c-0.9,0.2-1.8,0.3-2.8,0.1c0.8,2.5,3.1,4.3,5.8,4.3c-2.6,2.1-5.9,3-9.2,2.6c2.8,1.8,6,2.8,9.5,2.8c11.6,0,18.1-9.8,17.7-18.5C28.4,5.3,29.5,4.2,30.3,2.9z" />
								</svg>
							</a>
						</div>
					</ul>
				</div>
			</div>
		</div>
	</nav>

</template>

<script>

export default {
	data () {
		return {
			img_url: '../img/index/header.png',
			url: '/',
			hoge: {}
		}
	},

		methods: {
				handleResize: function() {
						if (window.innerWidth <= 800) {
								this.hoge = true
						} else {
								this.hoge = false
						}
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
		--back-color: #F9F9F9;
		font-family: "Noto Sans JP", sans-serif;
	}

	::selection {
		background: #020887;
		color: #FFF;
	}

	.sp {
		display: none;
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
		background: var(--back-color);
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


@media screen and (max-width:768px) {

	.pc {
		display: none;
	}

	.sp {
		display: block;
	}


	/* ハンバーガーメニュー */

	div.spnav {
		display: block;
		top: 25px;
		right: 0;
		margin-left: auto;
	}

	#menuToggle {
		display: block;
		z-index: 1;
		top: 50px;
		left: 50px;
		margin: 25px;
		margin-right: 25px;
		-webkit-user-select: none;
			 -moz-user-select: none;
			-ms-user-select: none;
				user-select: none;
	}

	#menuToggle a {
		transition: color .4s ease;
		text-decoration: none;
		color: #FFF;
		border-bottom: solid 1px;
	}

	#header:hover .headerNav__url, 
	.head__scroll .headerNav__url {
		color: #FFF;
	}

	#menuToggle input {
		display: block;
		position: absolute;
		z-index: 1000000;
		top: 25px;
		right: 25px;
		width: 35px;
		height: 25px;
		cursor: pointer;
		opacity: 0;
		-webkit-touch-callout: none;
	}

	#menuToggle span {
		display: block;
		position: relative;
		z-index: 10000;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		background: var(--main-color);
		transition: transform .5s cubic-bezier(.77,.2,.05,1.0),
		background .5s cubic-bezier(.77,.2,.05,1.0),
		opacity .55s ease;
		transform-origin: 4px 0;
		border-radius: 3px;
	}

	#menuToggle span:first-child {
		transform-origin: 0 0;
	}

	#menuToggle span:nth-last-child(2) {
		transform-origin: 0 100%;
	}

	#menuToggle input:checked ~ span {
		background: #FFF;
		transform: rotate(45deg) translate(-2px, -1px);
		opacity: 1;
	}

	#menuToggle input:checked ~ span:nth-last-child(3) {
		transform: rotate(0deg) scale(.2, .2);
		opacity: 0;
	}

	#menuToggle input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg) translate(0, -1px);
	}

	#menu {
		position: absolute;
		z-index: 100;
		top: 0;
		width: 300px;
		height: 100vh;
		margin: 0 0 0 -91vw;
		padding: 40px;
		list-style-type: none;
		background: var(--main-color);
		transition: transform .5s cubic-bezier(.77,.2,.05,1.0);
		transform: translate(-100%, 0);
		transform-origin: 0 0;
		-webkit-font-smoothing: antialiased;
	}

	#menu li {
		margin: 20px 0;
	}

	#menu h4 {
		margin-bottom: 5px;
		font-size: 1.25rem;
		line-height: 1;
	}

	#menu p {
		font-size: .8rem;
		margin-bottom: 5px;
	}

	#menuToggle input:checked ~ ul {
		overflow: scroll;
		transform: none;
	}

	.headerNav__url {
		display: block;
		width: auto;
		height: auto;
	}

	.nav__bg {
		visibility: hidden;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: #000;
		transition: all .5s cubic-bezier(.77,.2,.05,1.0);
		opacity: 0;
	}

	#menuToggle input:checked ~ .nav__bg {
		visibility: visible;
		opacity: .7;
	}


	/* add css */

	nav#mainNav {
		position: fixed;
		margin: 0;
		background: var(--back-color);
	}

	.header-titile {
	    margin-left: 10px;
	}

	.header-sns {
		margin: 0;
	}

	#menuToggle .header-sns a {
		border-bottom: none;
	}

	nav svg {
		fill: #FFF;
	}

}

</style>
