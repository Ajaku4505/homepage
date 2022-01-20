<template>

	<div class="main-contents">
		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<section id="cultus" class="contents-area">
						<h4 class="weight300">Suzuki Cultus 1994</h4>
						<div class="secWrap">
							<slick ref="slick" class="slick-outer" :options="slickOptions">
								<div class="section-contets">
									<slick ref="slick" class="slick-outer" :options="slick_imgOptions">
										<div class="imgBox"><img src="/img/mycar/cultus-roa-01.jpg" alt="cultus-roa-01-img"></div>
										<div class="imgBox"><img src="/img/mycar/cultus-roa-02.jpg" alt="cultus-roa-02-img"></div>
										<div class="imgBox"><img src="/img/mycar/cultus-roa-03.jpg" alt="cultus-roa-03-img"></div>
										<div class="imgBox"><img src="/img/mycar/cultus-roa-04.jpg" alt="cultus-roa-04-img"></div>
										<div class="imgBox"><img src="/img/mycar/cultus-roa-05.jpg" alt="cultus-roa-05-img"></div>
									</slick>
									<div class="textBox weight300">
										<p class="meta">2020 / 03 / 26</p>
										<p>Charactor : 夢月ロア (にじさんじ)</p>
										<p> </p>
										<p>ヤフオクで7万くらいで売られているときに購入した車両、走行距離は30万キロ超えの珍車でした。<br>
											多分カルタスの痛車は初めてじゃないのかなと思いながら乗ってました笑<br>
											VTuberというものに興味を持ち、めちゃくちゃにじさんじにハマりました。特にロアちゃんマジで天使だったんですよ！悪魔キャラですが天使でした！もー可愛くて可愛くて、貼っちゃいました。<br>
											今ではVTuberを知るきっかけとなったり、痛車の輪が繋がった大きなターニングポイントでした。</p>
									</div>
								</div>
								<div class="section-contets">
									<slick ref="slick" class="slick-outer" :options="slick_imgOptions">
										<div class="imgBox"><img src="/img/mycar/cultus-wanko-01.jpg" alt="cultus-wanko-01-img"></div>
										<div class="imgBox"><img src="/img/mycar/cultus-wanko-02.jpg" alt="cultus-wanko-02-img"></div>
									</slick>
									<div class="textBox weight300">
										<p class="meta">2019 / 10 / 27</p>
										<p>Charactor : みかん & 虎太郎 (わんことくらそう)</p>
										<p> </p>
										<p>当時エロゲにどハマりして昔から人生を変えさせられたゲーム"わんことくらそう"というゲームに感銘を受けて貼りました。<br>
											ちなみに、"花咲ワークスプリング！"と、"アオナツライン"はぼくの青春です。<br>
											エクイップ01を履かせて旧車ないじりをしつつ、5連ミラーにノーズブラと迷走期ではあったものの、やりたいことを詰め込んだお子様ランチ仕様でした。</p>
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

</style>
