<template>
	<div>

		<!-- header -->

		<nav class="navbar fixed-top" id="mainNav">
			<div class="header-menu">

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
					 <li><a class="external-link" href="iw2021">IW2021</a></li>
					 <li><a class="external-link" href="/daydram2021">DayDream2021</a></li>
				</ul>
				<div class="footer-profile">
					<img src="#" alt="profile">
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
	}

	.flex-contents .copyright {
		display: flex;
		align-items: flex-end;
	}


</style>