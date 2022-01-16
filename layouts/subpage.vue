<template>  
	<div id="subpage">
		
		<common-header/>

		<div class="flex-area">

			<!-- footer -->
			<footer class="fixed-bottom">
				<div class="flex-contents weight300">
					<ul class="footer-menu">
						<li><a v-bind:href="url">Home</a></li>
						<li class="drop_menu"><router-link class="nav-link" to="/mycar/accord">MyCar</router-link></li>
						<div class="sub_menu">
							<li><router-link class="nav-link" to="/mycar/accord">Accord</router-link></li>
							<li><router-link class="nav-link" to="/mycar/cultus">Cultus</router-link></li>
							<li><router-link class="nav-link" to="/mycar/accord">WagonR</router-link></li>
						</div>
						<li><router-link class="nav-link" to="../design">Design</router-link></li>
						<li><router-link class="nav-link" to="../photo">Photo</router-link></li>
					</ul>
					<div class="copyright">
						<p>© Ajaku(Koki Oyama) 2022 All Rights Reserved.</p>
					</div>
				</div>
			</footer>

			<nuxt/>

		</div>

	</div>
</template>

<script>

export default {
 	data () {
		return {
			url: '/',
		}
	},
}

</script>

<style>

	/* footer */

	#subpage .flex-contents {
		height: 100%;
		display: flex;
		align-content: center;
		flex-wrap: wrap;
	}

	#subpage footer a {
	  text-decoration: none;
	  color: var(--sub-color);
	}

	#subpage footer .flex-contents > ul,
	#subpage footer .flex-contents > div {
		width: 100%;
	}

	#subpage .flex-contents .footer-menu {
		margin: 0 20px;
	}

	#subpage .flex-contents .footer-menu li {
		margin-bottom: 30px;
	}
	#subpage .flex-contents .footer-menu .drop_menu {
		margin-bottom: 20px;
	}
	#subpage .flex-contents .footer-menu .sub_menu li {
		margin-bottom: 20px;
		margin-left: 20px;
	}
	#subpage .flex-contents .footer-menu .sub_menu li:last-of-type {
		margin-bottom: 30px;
	}
	#subpage .flex-contents .footer-menu li:last-of-type {
		margin-bottom: 0;
	}

	#subpage .flex-contents .copyright {
		position: absolute;
		font-size: .8rem;
		background: var(--main-color);
		color: #FFF;
    	bottom: 0;
    	left: 0;
    	width: auto;
    	padding: 20px 10px;
	}

	/* add css */

	.flex-area {
	    display: flex;
	    height: 100vh;
	}

	#subpage footer {
		padding: 0;
	  	width: 20%;
	  	text-align: left;
	  	background: none;
	}

	.main-contents {
	  width: 80%;
	}

</style>