<template>

  <div>

	<common-header />

	<nuxt />

	<!-- footer -->
	<footer class="fixed-bottom">
		<div class="flex-contents weight300">
			<ul class="footer-menu">
				<li><a v-bind:href="url">Home</a></li>
						<li><router-link class="nav-link" to="/mycar/accord">MyCar</router-link></li>
						<li><router-link class="nav-link" to="design">Design</router-link></li>
						<li><router-link class="nav-link" to="photo">Photo</router-link></li>
				<li class="space">
					<div></div>
				</li>
				<li><a class="external-link" href="munakata2020" target="_blank">Munakata2020</a></li>
				<li><a class="external-link" href="IW2021" target="_blank">IW2021</a></li>
				<li><a class="external-link" href="daydream2021" target="_blank">DayDream2021</a></li>
			</ul>
			<div class="footer-profile">
				<img src="img/index/profile.jpg" alt="profile" loading="lazy">
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
	data () {
		return {
			url: '#',
		}
	},

  	mounted() {
    	this.$nextTick(() => {
      	this.$nuxt.$loading.start()

      	setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    	})
  	}

}

</script>

<style>

	.space {
			display: inline-block;
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

	footer {
		padding:10px;
		text-align: center;
		background: var(--main-color);
		color: #FFF;
	}

	footer a {
		text-decoration: none;
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


@media screen and (max-width:768px) {

	footer .flex-contents {
	    display: grid;
	    text-align: center;
	}

	.flex-contents .footer-menu {
		display: flex;
		grid-row: 2;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		margin: 55px 0;
	}

	footer .flex-contents > ul, 
	footer .flex-contents > div {
		width: 100%;
	}

	.flex-contents .footer-profile {
		margin-top: 50px;
	}

	.flex-contents .footer-menu li {
		width: 50%;
		margin-bottom: 15px;
	}

	.flex-contents .copyright {
		justify-content: center;
	}

}

</style>
