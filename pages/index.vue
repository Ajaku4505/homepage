<template>
	
	<div>

		<!-- Page Header -->
		<header class="masthead">
			<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<div class="site-heading">
						<div class="catch-copy weight100">
							<p>0から1を生み出し</p>
							<p>1を10に磨き上げる</p>
							<p class="space"></p>
							<p>それがデザイン</p>
						</div>
						<div class="mainvisual">
							<slick ref="slick" class="slick-outer" :options="slick_imgOptions">
								<img src="img/index/mv_01.jpg" alt="mainvisual01">
								<img src="img/index/mv_02.jpg" alt="mainvisual02">
							</slick>
						</div>
					</div>
				</div>
			</div>
			</div>
		</header>

		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<section id="about" class="contents-area sec01">
						<div class="secWrap">
							<div class="section-text">
							<h1 class="section-title weight700">About</h1>
							</div>
							<div class="section-contents">
								<div class="textBox weight300">
									<h2 class="weight500">きれいで素敵なものを生み出し<br>見た人の気持ちが少しでも変われば－</h2>
									<p>何のためにデザインしたりカメラを回してるのかっていうと</p>
									<p>やっぱ言い表せないんですけど楽しいんです</p>
									<p class="space"></p><br class="sp">
									<p>パチンコで大当たりしたり、好きな本を読んだり、スポーツで汗を流す</p>
									<p>それぞれが感じていることと同じような楽しさだと僕は思っています</p><br class="sp">
									<p class="space"></p><br class="sp">
									<p>自分が作ったものが誰かのきっかけになるって</p>
									<p>とても喜ばしいことかなと思ってます笑</p>
								</div>
								<div class="imgBox" v-observe-visibility='{callback: visibilityChanged01, once: true}' v-bind:class='{active:isVisible01}'>
									<img src="img/index/about-img.jpg" alt="about-img" loading="lazy">
								</div>
							</div>
						</div>
					</section>

					<section id="mycar" class="contents-area sec02">
						<div class="secWrap">
							<div class="section-text">
							<h1 class="section-title weight700">MyCar</h1>
							</div>
							<div class="section-contents">
								<div class="imgBox" v-observe-visibility='{callback: visibilityChanged02, once: true}' v-bind:class='{active:isVisible02}'><img src="img/index/mycar-img.jpg" alt="mycar-img" loading="lazy"></div>
								<div class="textBox weight300">
									<p class="meta">2021 / 09 / 21</p><br class="sp">
									<p>Honda AccordWagon 1994</p><br class="sp">
									<p>Character : YuzukiRoa (NIJISANJI)</p>
								</div>
								<div class="link">
									<router-link class="nav-link" to="/mycar/accord">
										<div class="more button">more</div>
									</router-link>
								</div>
							</div>
						</div>
					</section>

					<section id="design" class="contents-area sec03">
						<div class="secWrap">
							<div class="section-text">
							<h1 class="section-title weight700">Design</h1>
							</div>
							<div class="section-contents">
								<div class="imgBox multiple">
									<div v-observe-visibility='{callback: visibilityChanged03, once: true}' v-bind:class='{active:isVisible03}'>
										<img src="img/index/design-img_01.jpg" alt="design-01" loading="lazy">
									</div>
									<div v-observe-visibility='{callback: visibilityChanged03, once: true}' v-bind:class='{active:isVisible03}'>
										<img src="img/index/design-img_02.jpg" alt="design-02" loading="lazy">
									</div>
								</div>
								<div class="textBox weight300">
									<p>箱ステ・痛車のデザイン・Webデザイン、なんでも楽しそうなことはやってます</p><br class="sp">
									<p>強いていえば、アパレルデザインまだやったことないです...</p><br class="sp">
									<p class="space"></p><br class="sp">
									<p>デザインで一番こだわってるのはファーストインパクトと色の鮮やかさです</p>
								</div>
								<div class="link">
									<router-link class="nav-link" to="design">
										<div class="more button">more</div>
									</router-link>
								</div>
							</div>
						</div>
					</section>

					<section id="photo" class="contents-area sec04">
						<div class="secWrap">
							<div class="section-text">
								<h1 class="section-title weight700">Photo</h1><span class="section-subtitle weight700">by<img src="img/index/karasuzu.png" alt="カラスズ印刷" loading="lazy"></span>
							</div>
							<div class="section-contents">
								<div class="imgBox multiple">
									<div v-observe-visibility='{callback: visibilityChanged04, once: true}' v-bind:class='{active:isVisible04}'>
										<img src="img/index/photo-img_01.jpg" alt="photo-01" loading="lazy">
									</div>
									<div v-observe-visibility='{callback: visibilityChanged04, once: true}' v-bind:class='{active:isVisible04}'>
										<img src="img/index/photo-img_02.jpg" alt="photo-02" loading="lazy">
									</div>
									<div v-observe-visibility='{callback: visibilityChanged04, once: true}' v-bind:class='{active:isVisible04}'>
										<img src="img/index/photo-img_03.jpg" alt="photo-03" loading="lazy">
									</div>
									<div v-observe-visibility='{callback: visibilityChanged04, once: true}' v-bind:class='{active:isVisible04}'>
										<img src="img/index/photo-img_04.jpg" alt="photo-04" loading="lazy">
									</div>
									<div v-observe-visibility='{callback: visibilityChanged04, once: true}' v-bind:class='{active:isVisible04}'>
										<img src="img/index/photo-img_05.jpg" alt="photo-05" loading="lazy">
									</div>
									<div v-observe-visibility='{callback: visibilityChanged04, once: true}' v-bind:class='{active:isVisible04}'>
										<img src="img/index/photo-img_06.jpg" alt="photo-06" loading="lazy">
									</div>
								</div>
								<div class="textBox weight300">
									<p>カメラはフルサイズのNikon D750とマイクロフォーサーズのOLYMPUS E-M10 Markiiを愛用しています</p><br class="sp">
									<p>写真もデザインと同じで自分の色が出る面白い趣味だと思っています</p>
								</div>
								<div class="link">
									<router-link class="nav-link" to="photo">
										<div class="more button">more</div>
									</router-link>
								</div>
							</div>
						</div>
					</section>

				</div>
			</div>
		</div>

	</div>

</template>


<script>

	import Vue from 'vue'
	import VueObserveVisibility from 'vue-observe-visibility'
	Vue.use(VueObserveVisibility)
	import Slick from 'vue-slick'
	import '../node_modules/slick-carousel/slick/slick.css'

	export default {
		layout: "toppage",


		components: { Slick },

		data(){
			return {
				isVisible01: true,
				isVisible02: false,
				isVisible03: false,
				isVisible04: false,

				slick_imgOptions:{
					arrows: false,
					dots: false,
					autoplay: true,
					infinity: true,
					autoplaySpeed: 3000,
					fade: true,
					speed: 600,
					swipe: false,
					lazyLoad: 'progressive',
					pauseOnFocus: false,
			        pauseOnHover: false
				}

			}
		},
		methods: {
			visibilityChanged01(isVisible01, entry) {
				this.isVisible01 = isVisible01
			},
			visibilityChanged02(isVisible02, entry) {
				this.isVisible02 = isVisible02
			},
			visibilityChanged03(isVisible03, entry) {
				this.isVisible03 = isVisible03
			},
			visibilityChanged04(isVisible04, entry) {
				this.isVisible04 = isVisible04
			},
		},

	}

</script>

<style>

/* イメージスライダー */

	.imgBox,
	.imgBox > div {
		display: inline-block;
		position: relative;
		overflow: hidden;
	}

	.imgBox.active::before,
	.imgBox > div.active::before {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background: var(--back-color);
		animation-name: slideWhite;
		animation-timing-function:cubic-bezier(0.66, 0.09, 0.08, 0.94);
		animation-duration: 1.3s;
		animation-fill-mode: forwards;
	}
	.imgBox.active::after,
	.imgBox > div.active::after {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background: var(--main-color);
		animation-name: slideBlue;
		animation-timing-function:cubic-bezier(0.66, 0.09, 0.08, 0.94);
		animation-duration: 1.3s;
		animation-fill-mode: forwards;
	}

	.imgBox.multiple::after {
		content: none;
	}

	.imgBox img {
		display: block;
	}

	@keyframes slideBlue {
		from {
			transform: translateX(-100%);
		}

		to {
			transform: translateX(100%);
		}
	}

	@keyframes slideWhite {
		0% {
			transform: translateX(0%);
		}

		100% {
			transform: translateX(100%);
		}
	}


	/* header */

	header.masthead {
		position: relative;
		width: 100vw;
		height: 100vh;
	}

	header .catch-copy {
		position: absolute;
		bottom: 10%;
		left: 10%;
		color: #FFF;
		line-height: 2.5;
	}

	header .mainvisual {
		position: absolute;
		z-index: -1;
		top: 50%;
		left: 50%;
		width: calc(100% - 150px);
		height: calc(100% - 150px - 58px);
		transform: translateY(-50%) translateX(-50%);
	}

	header .mainvisual img {
		width: 100%;
		height: 86.5vh;
		object-fit: cover;
	}

	/*
	header .mainvisual img {
		position: absolute;
		z-index: -1;
		top: 50%;
		left: 50%;
		width: calc(100% - 150px);
		height: calc(100% - 150px);
		object-fit: cover;
		transform: translateY(-50%) translateX(-50%);
	}
	*/

	.container {
		max-width: 980px;
		margin: auto;
	}

	section {
		position: relative;
		margin: 120px 0;
	}

	.section-text {
		margin-bottom: 80px;
	}

	.section-text h1.section-title {
		font-family: "Ropa Sans", sans-serif;
		display: inline-block;
		position: relative;
		font-size: 6rem;
	}

	.section-text h1.section-title::after {
		content: "";
		position: absolute;
		width: 200px;
		height: 2px;
		top: 60px;
		background: #3E3A39;
		background: var(--sub-color);
	}

	.section-contents .textBox > h2, 
	.section-contents .textBox > p {
		line-height: 1.75;
	}

	.textBox .meta {
		text-align: right;
	}

	.link {
		text-align: center;
		margin-top: 30px;
	}

	.link a:hover {
		opacity: 1;
	}

	.more.button {
		position: relative;
		padding: 10px 50px;
		border: solid 1px var(--sub-color);
		display: inline-block;
		font-weight: 300;
		-webkit-transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
				transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
	}

	.more.button::before {
		content: "";
		position: absolute;
		top: 0;
		right: 10px;
		bottom: 0;
		width: 15px;
    	height: 1px;
		margin: auto;
		background: var(--sub-color);
		transform: rotate(90deg);
		border-radius: 5px;
		-webkit-transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
				transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
	}

	.more.button::after {
		content: "";
		position: absolute;
		top: 0;
		right: 10px;
		bottom: 0;
		width: 15px;
    height: 1px;
		margin: auto;
		background: var(--sub-color);
		border-radius: 5px;
		-webkit-transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
				transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
	}

	.more.button:hover {
		padding: 10px 50px;
		border: solid 1px var(--main-color);
		background: var(--main-color);
		color: #FFF;
		-webkit-transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
				transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
	}

	.more.button:hover::before {
		background: #fff;
		-webkit-transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
				transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
	}

	.more.button:hover::after {
		background: #fff;
		-webkit-transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
				transition: all 150ms cubic-bezier(.445, .05, .55, .95) 0ms;
	}


	/* about */

	#about h1.section-title {
		left: 200px;
	}
	#about h1.section-title::after {
		left: 260px;
	}

	#about .section-contents {
		display: flex;
	}

	#about .imgBox {
		position: absolute;
		right: -100px;
	}


	/* mycar */

	#mycar h1.section-title {
		left: 0;
	}
	#mycar h1.section-title::after {
		left: -220px;
	}

	#mycar .section-contents {
		width: 800px;
		margin: auto;
	}

	#mycar .imgBox {
		text-align: center;
		margin-bottom: 20px;
	}

	/* design */

	#design h1.section-title {
		left: 660px;
	}
	#design h1.section-title::after {
		left: 280px;
	}

	#design .imgBox {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	#design .imgBox img {
		width: 480px;
		height: 480px;
		object-fit: cover;
	}


	/* photo */

	#photo h1.section-title {
		left: 0;
	}
	#photo h1.section-title::after {
		left: -220px;
	}

	.section-subtitle {
		font-size: 2.5rem;
		margin-left: 20px;
	}

	.section-subtitle img {
		margin-left: 10px;
		max-width: 200px;
	}

	#photo .imgBox {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	#photo .imgBox > div {
		width: calc(100% / 3 - 10px);
		height: calc(100% / 3 - 10px);
		margin-bottom: 20px;
	}

	#photo .imgBox img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}


@media screen and (max-width:768px) {

	header .mainvisual {
		width: calc(100% - 50px);
		height: calc(100% - 50px);
		transform: translateY(-42%) translateX(-50%);
	}

	header .catch-copy {
		bottom: 8%;
		left: 10%;
		line-height: 1.5;
	}


	.container {
		width: 90%;
	}

	section {
		margin: 80px 0;
	}

	.section-text h1.section-title {
		font-size: 4rem;
	}

	.section-text h1.section-title::after {
		top: 38px;
	}

	.section-text {
		margin-bottom: 40px;
	}

	.section-contents .textBox > h2,
	.section-contents .textBox > p {
		line-height: 1.25;
		letter-spacing: .1em;
	}

	#about .section-contents .textBox > p,
	#mycar .section-contents .textBox > p,
	#design .section-contents .textBox > p,
	#photo .section-contents .textBox > p {
		line-height: 1.5;
		display: inline;
	}

	.imgBox img {
		width: 100%;
	}


	/* about */

	#about h1.section-title {
		left: 100px;
	}

	#about h1.section-title::after {
		left: 170px;
	}

	#about .section-contents {
		display: block;
	}

	#about .imgBox {
		position: relative;
		right: 0;
	}

	#about .textBox {
		margin-bottom: 20px;
	}

	/* mycar */

	#mycar .section-contents {
		width: 100%;
		margin: auto;
	}


	/* design */

	#design h1.section-title {
		left: 0;
	}

	#design h1.section-title::after {
		left: 190px;
	}

	#design .imgBox {
		display: block;
		justify-content: space-between;
		margin-bottom: 0;
	}

	.imgBox.multiple .active {
	    margin-bottom: 20px;
	}

	#design .imgBox img {
		width: 100%;
		height: 300px;
		   object-fit: cover;
		-o-object-fit: cover;
	}


	/* photo */

	.section-subtitle {
		margin-left: 10px;
		font-size: 2rem;
	}

	.section-subtitle img {
		width: 40%;
		margin-left: 10px;
	}

	#photo .imgBox > div {
		width: calc(100% / 2 - 5px);
		height: calc(100% / 3 - 10px);
		margin-bottom: 10px;
	}

}


</style>

<style scoped>

img {
	width: 100%;
}
</style>