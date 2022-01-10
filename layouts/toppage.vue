<template>
	<div>

		<!-- header -->

		<nav class="navbar fixed-top" id="mainNav">
			<div class="header-menu">
				<div class="header-titile">
					<img src="img/index/header.png" alt="KOKI Ajaku">
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
								C16.4,14.6,14.6,16.4,12.3,16.4z M18.9,4.3c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5S19.7,4.3,18.9,4.3z"/>
						</svg>
					</a>
					<a href="https://twitter.com/Ajaku4505" target="_blank">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
							 y="0px" viewBox="0 0 30.9 24.6" style="enable-background:new 0 0 30.9 24.6;" xml:space="preserve">
							<path class="st0" d="M30.3,2.9c-1.1,0.5-2.3,0.8-3.6,1c1.3-0.8,2.3-2,2.7-3.4c-1.2,0.7-2.5,1.2-4,1.5c-1.1-1.2-2.8-2-4.5-2
								c-4,0-7,3.7-6.1,7.6C9.8,7.4,5.2,4.9,2.1,1.1C0.5,3.9,1.3,7.6,4,9.4c-1,0-2-0.3-2.8-0.8c-0.1,2.9,2,5.6,5,6.2
								c-0.9,0.2-1.8,0.3-2.8,0.1c0.8,2.5,3.1,4.3,5.8,4.3c-2.6,2.1-5.9,3-9.2,2.6c2.8,1.8,6,2.8,9.5,2.8c11.6,0,18.1-9.8,17.7-18.5
								C28.4,5.3,29.5,4.2,30.3,2.9z"/>
						</svg>
					</a>
				</div>
			</div>
		</nav>

		<nuxt/>

		<!-- footer -->
		<footer class="fixed-bottom">
			<div class="flex-contents weight300">
				<ul class="footer-menu">
					 <li><a href="index">Home</a></li>
					 <li><a href="index">MyCar</a></li>
					 <li><a href="index">Design</a></li>
					 <li><a href="index">Photo</a></li>
					 <li class="space"><div></div></li>
					 <li><a class="external-link" href="munakata2020">Munakata2020</a></li>
					 <li><a class="external-link" href="IW2021">IW2021</a></li>
					 <li><a class="external-link" href="daydream2021">DayDream2021</a></li>
				</ul>
				<div class="footer-profile">
					<img src="img/index/profile.jpg" alt="profile">
				</div>
				<div class="copyright">
					<p>© Ajaku(Koki Oyama) 2022 All Rights Reserved.</p>
				</div>
			</div>
		</footer>

	</div>
</template>

<script>
	export default {
	}
</script>

<style>

	nav#mainNav {
	    width: 100%;
	    margin: 5px 20px;
	    z-index: 1;
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

/* footer */

	footer a {
		text-decoration: none;
		color: #FFF;
	}

	a.external-link {
		text-decoration: underline;
	}

	li {
		list-style: none;
	}

	.space {
	    display: inline-block;
	}

	footer {
		padding:10px;
		text-align: center;
		background: var(--main-color);
		color: #FFF;
	}

	footer .flex-contents {
		display: flex;
		justify-content: space-between;
		text-align: left;
	}

	footer .flex-contents > ul,
	footer .flex-contents > div {
		width: calc(100% / 3);
	}

	.flex-contents .footer-menu {
		margin: 50px 0;
	}

	.flex-contents .footer-menu li {
		margin-bottom: 30px;
	}
	.flex-contents .footer-menu li:last-of-type {
		margin-bottom: 0;
	}

	.flex-contents .footer-profile {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.flex-contents .footer-profile img {
		border-radius: 50%;
	}

	.flex-contents .copyright {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		font-size: .8rem;
	}


</style>