<template>
	<!-- footer -->
	<footer class="fixed-bottom">
		<div class="flex-contents weight300">
			<ul class="footer-menu">
				<li><a href="index">Home</a></li>
				<li><a href="index">MyCar</a></li>
				<li class="sub_menu"><a href="accord">Accord</a></li>
				<li class="sub_menu"><a href="accord">Cultus</a></li>
				<li class="sub_menu"><a href="accord">WagonR</a></li>
				<li><a href="index">Design</a></li>
				<li><a href="index">Photo</a></li>
				<li class="space">
					<div></div>
				</li>
				<li><a class="external-link" href="munakata2020">Munakata2020</a></li>
				<li><a class="external-link" href="IW2021">IW2021</a></li>
				<li><a class="external-link" href="daydream2021">DayDream2021</a></li>
			</ul>
			<div class="copyright">
				<p>© Ajaku(Koki Oyama) 2022 All Rights Reserved.</p>
			</div>
		</div>
	</footer>
</template>


<style>

	.flex-contents {
				height: 100%;
		display: flex;
		align-content: center;
		flex-wrap: wrap;
	}

	footer .flex-contents > ul,
	footer .flex-contents > div {
		width: 100%;
	}


	.flex-contents .footer-menu {
		margin: 20px 0;
	}

	.flex-contents .footer-menu li {
		margin-bottom: 30px;
	}
	.flex-contents .footer-menu li.sub_menu {
		margin-bottom: 10px;
		margin-left: 10px;
	}
	.flex-contents .footer-menu li:last-of-type {
		margin-bottom: 0;
	}

</style>
