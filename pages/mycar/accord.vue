<template>

	<div class="main-contents">
		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<section id="accord" class="contents-area">
						<h4 class="weight300">Honda AccordWagon 1994</h4>
						<div class="secWrap">
							<slick ref="slick" class="slick-outer" :options="slickOptions">
								<div class="section-contets">
									<slick ref="slick" class="slick-outer" :options="slick_imgOptions">
										<div class="imgBox"><video autoplay="" loop="" muted="" playsinline="" width="100%">
										<source src="/img/mycar/accord-roa-01.mp4" type="video/mp4"></video></div>
										<div class="imgBox"><img src="/img/mycar/accord-roa-02.jpg" alt="accord-roa-02-img"></div>
										<div class="imgBox"><img src="/img/mycar/accord-roa-03.jpg" alt="accord-roa-03-img"></div>
										<div class="imgBox"><img src="/img/mycar/accord-roa-04.jpg" alt="accord-roa-04-img"></div>
									</slick>
									<div class="textBox weight300">
										<p class="meta">2021 / 09 / 21</p>
										<p>Charactor : 夢月ロア (にじさんじ)</p>
										<p class="description">現仕様で一番時間をかけて手がけた作品です。<br>
											車自体は宮崎に長らく置かれていた車両を購入し、メンテしてながら乗っています。<br>
											カスタムはoldschoolで90年代の流行りを取り入れたイケイケ仕様です()<br>
											エアサスと、各所に散りばめたメッキパーツがアピールポイントです。<br>
											ホイールも当時のLUCKY STARを履かせ、慣れないHIPHOP流しながら町に繰り出してます。</p>
									</div>
								</div>
								<div class="section-contets">
									<slick ref="slick" class="slick-outer" :options="slick_imgOptions">
										<div class="imgBox"><img src="/img/mycar/accord-ark-01.jpg" alt="accord-ark-01-img"></div>
										<div class="imgBox"><img src="/img/mycar/accord-ark-02.jpg" alt="accord-ark-02-img"></div>
										<div class="imgBox"><img src="/img/mycar/accord-ark-03.jpg" alt="accord-ark-03-img"></div>
									</slick>
									<div class="textBox weight300">
										<p class="meta">2021 / 08 / 24</p>
										<p>Charactor : 陈 Ch'en (Arknight)</p>
										<p class="description">いまアークナイツがめちゃめちゃアツいです！ほんと、もう理性が足りないくらい周回してます。<br>
											ほんとにね、チェン※(陈) いいよチェン、かっこいいお姉さんだしほんと最高にカッコいい!!<br>
											元はカラーのデザインを作っていたのですが、知り合いから「モノトーンにしてみろ」と脅されてやってみたのがハマりました。白ボディにモノトーンはめちゃめちゃかっこいい<br>
											リアクォーターのみのワンポイントでしたが、1day仕様だったのと後にでっかく貼る予定だったので面積を抑えました。<br>
											今度やるならモノトーンで大きな面積貼ってみたいですね...</p>
									</div>
								</div>
							</slick>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

	import Slick from 'vue-slick'
	import '../../node_modules/slick-carousel/slick/slick.css'

	export default {
		layout: "subpage",

		components: { Slick },

		data() {
			return{
				slickOptions:{
					arrows: true,
					dots: false,
					autoplay: false,
				},

				slick_imgOptions:{
					arrows: false,
					dots: false,
					autoplay: true,
					infinity: true,
					autoplaySpeed: 6000,
					fade: true,
					speed: 500,
					swipe: false,
					lazyLoad: 'progressive',
					pauseOnFocus: false,
			        pauseOnHover: false
				}
			}
		},

	}


</script>

<style>

	/* slick */

	.slick-arrow {
		overflow: hidden;
		position: absolute;
		top: 0;
		bottom: 0;
		width: 0;
		height: 0;
		margin: auto;
		padding: 0;
		background: none;
		-webkit-appearance: none;
		   -moz-appearance: none;
		        appearance: none;
		white-space: nowrap;
		text-indent: 100%;
		outline: none;
	}

	button.slick-prev.slick-arrow {
		left: -25px;
		border-top: 10px solid var(--back-color);
		border-right: 10px solid var(--sub-color);
		border-bottom: 10px solid var(--back-color);
		border-left: 0;
	}

	button.slick-next.slick-arrow {
		right: -25px;
		border-top: 10px solid var(--back-color);
		border-right: 0;
		border-bottom: 10px solid var(--back-color);
		border-left: 10px solid var(--sub-color);
	}

	.slick-slider img,
	.slick-slider video {
	    width: inherit;
	    /* border-radius: 10px; */
	}

	.container {
		max-width: 980px;
		margin: auto;
	}

	.textBox .meta {
		text-align: right;
	}

	.textBox .description {
		margin-top: 20px;
		font-size: .8rem;
		line-height: 1.5;
	}

	@media screen and (max-width:768px) {

		.section-contets .textBox {
			margin-top: 20px;
		}

		.textBox .meta {
		    margin-bottom: 10px;
		}

	}

</style>
