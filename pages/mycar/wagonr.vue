<template>

	<div class="main-contents">
		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<section id="wagonr" class="contents-area">
						<h4 class="weight300">Suzuki WagonR 1998</h4>
						<div class="secWrap">
							<slick ref="slick" class="slick-outer">
								<div class="section-contets">
									<slick ref="slick" class="slick-outer" :options="slick_imgOptions">
										<div class="imgBox"><img src="/img/mycar/wagonr-pso2-01.jpg" alt="wagonr-pso2-01-img"></div>
										<div class="imgBox"><img src="/img/mycar/wagonr-pso2-02.jpg" alt="wagonr-pso2-02-img"></div>
										<div class="imgBox"><img src="/img/mycar/wagonr-pso2-03.jpg" alt="wagonr-pso2-03-img"></div>
										<div class="imgBox"><img src="/img/mycar/wagonr-pso2-04.jpg" alt="wagonr-pso2-04-img"></div>
									</slick>
									<div class="textBox weight300">
										<p class="meta">2019 / 03 / 13</p>
										<p>Charactor : イオ & オリキャラ (PSO2)</p>
										<p class="description">免許取って初めて乗った車でした。<br>
										初代MC21Sで貴重な3+1ドアの5MTというレアもレアな珍車に乗ってました。<br>
										当時はお山に行ったり謎のメーター増やしたり燃調いじったりやりたい放題してました。（お陰でカーチューン脱却できました）<br>
										いい感じに早いし楽しいし、初めてでとてもいい車に出会えました。</p>
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
