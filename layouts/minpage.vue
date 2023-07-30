<template>  
	<div id="minpage">
		
		<common-header/>

		<div class="flex-area">

			<!-- footer -->
			<footer class="fixed-bottom">
				<div class="flex-contents weight300">
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

	#minpage .flex-contents {
		height: 100%;
		display: flex;
		align-content: center;
		flex-wrap: wrap;
	}

	#minpage footer a {
	  text-decoration: none;
	  color: var(--sub-color);
	}

	#minpage .nav-link.nuxt-link-active {
		border-bottom: solid 2px var(--main-color);
	}

	#minpage footer .flex-contents > ul,
	#minpage footer .flex-contents > div {
		width: 100%;
	}

	#minpage .flex-contents .footer-menu {
		margin: 0 20px;
	}

	#minpage .flex-contents .footer-menu li {
		margin-bottom: 30px;
	}
	#minpage .flex-contents .footer-menu .drop_menu {
		margin-bottom: 20px;
	}
	#minpage .flex-contents .footer-menu .sub_menu li {
		margin-bottom: 20px;
		margin-left: 20px;
	}
	#minpage .flex-contents .footer-menu .sub_menu li:last-of-type {
		margin-bottom: 30px;
	}
	#minpage .flex-contents .footer-menu li:last-of-type {
		margin-bottom: 0;
	}

	#minpage .flex-contents .copyright {
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

	#minpage section {
		margin: 100px auto;
	}

	.flex-area {
		display: flex;
		height: 100vh;
	}

	#minpage footer {
		padding: 0;
		width: 20%;
		text-align: left;
		background: none;
		display: none;
	}

	#minpage .main-contents {
	  width: 100%;
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

	#minpage footer {
		width: 100%;
	}

	#minpage section {
		width: 80%;
	}

	#minpage .flex-contents .footer-menu {
		margin: 20px;
	}

	#minpage .flex-contents .footer-menu .sub_menu {
		width: 100%;
	}

	#minpage .footer-menu li,
	#minpage .footer-menu.sub_menu {
		width: 100%;
	}

	#minpage .flex-contents .footer-menu .sub_menu li {
	    margin-bottom: 20px;
	    margin-left: 10px;
	    font-size: .8rem;
	}

	#minpage .flex-contents .copyright {
		width: 100%;
		padding: 10px;
		position: relative;
	}


}

</style>