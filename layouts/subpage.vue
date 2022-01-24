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
							<li><router-link class="nav-link" to="/mycar/wagonr">WagonR</router-link></li>
						</div>
						<!--li v-else><router-link class="nav-link" to="/mycar/accord">MyCar</router-link></li-->
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

	mounted() {
		this.$nextTick(() => {
		this.$nuxt.$loading.start()

		setTimeout(() => this.$nuxt.$loading.finish(), 2000)
		})
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

	#subpage .nav-link.nuxt-link-active {
		border-bottom: solid 2px var(--main-color);
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
		bottom: 0px;
		left: 0px;
		width: auto;
		padding: 20px 10px;
		/* bottom: -10px;
		left: -10px;
		width: auto;
		padding: 30px 20px;
		border-radius: 10px; */
	}


	/* mordal */

	#overlay{
	  /* 要素を重ねた時の順番 */
	  z-index:1;

	  /* 画面全体を覆う設定 */
	  position:fixed;
	  top:0;
	  left:0;
	  width:100%;
	  height:100%;
	  background-color:rgba(0,0,0,0.5);

	  /* 画面の中央に要素を表示させる設定 */
	  display: flex;
	  align-items: center;
	  justify-content: center;

	}

	#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}

	/* add css */

	#subpage section {
		width: 90%;
		margin: 100px auto;
	}

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
	  margin-top: 60px;
	  overflow: scroll;
	}

@media screen and (max-width:768px) {

	.flex-area {
		display: flex;
		flex-direction: column-reverse;
		flex-wrap: wrap;
		height: auto;
	}

	.main-contents {
		width: 100%;
		margin-top: 60px;
	}

	#subpage footer {
		width: 100%;
	}

	#subpage section {
		width: 80%;
	}

	#subpage .flex-contents .footer-menu {
		margin: 20px;
	}

	#subpage .flex-contents .footer-menu .sub_menu {
		width: 100%;
	}

	#subpage .footer-menu li,
	#subpage .footer-menu.sub_menu {
		width: 100%;
	}

	#subpage .flex-contents .footer-menu .sub_menu li {
	    margin-bottom: 20px;
	    margin-left: 10px;
	    font-size: .8rem;
	}

	#subpage .flex-contents .copyright {
		width: 100%;
		padding: 10px;
		position: relative;
	}


}

</style>