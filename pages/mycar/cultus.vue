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
										<div class="imgBox"><img src="img/index/about-img.jpg" alt="about-img"></div>
										<div class="imgBox"><img src="img/index/about-img.jpg" alt="about-img"></div>
										<div class="imgBox"><img src="img/index/about-img.jpg" alt="about-img"></div>
									</slick>
									<div class="textBox weight300">
										<p class="meta">2021 / 09 / 21</p>
										<p>Charactor : YuzukiRoa (NIJISANJI)</p>
										<p> </p>
										<p>今回のデザインは</p>
									</div>
								</div>
								<div class="section-contets">
									<div class="imgBox"><img src="img/index/about-img.jpg" alt="about-img"></div>
									<div class="textBox weight300">
										<p class="meta">2021 / 09 / 21</p>
										<p>Charactor : YuzukiRoa (NIJISANJI)</p>
										<p> </p>
										<p>今回のデザインは</p>
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
					autoplaySpeed: 4000,
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

.container {
	max-width: 980px;
	margin: auto;
	margin-top: 50px;
}

.textBox .meta {
	text-align: right;
}

</style>
