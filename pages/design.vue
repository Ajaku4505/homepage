<template>

	<div class="main-contents">
		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<section id="design" class="contents-area">
						<div class="secWrap">
							<div class="flex-area grid">
								<div class="section-contets" v-for="item in items">
									<img @click="openModal(item)" :src="item.img_01_src" alt="design_item">
								</div>
								<modal :val="postItem" v-show="showContent" @close="closeModal" />
							</div>
						</div>
					</section>
				</div>
			</div>

		</div>
	</div>

</template>

<script>

	import Slick from 'vue-slick'
	import '../node_modules/slick-carousel/slick/slick.css'
	import Modal from '~/components/modal.vue'

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

		components: { Modal },

		data () {
			return {
				showContent: false,
				postItem: "",
				items: [
					{ 
						id: 1,
						title: 'スクエアステッカー(ホロライブ 不知火フレア)',
						img_01_src: require('../static/img/design/design-img_02-1.jpg'),
						img_02_src: require('../static/img/design/design-img_02-2.jpg'),
						desc: 'ふーたんのメンタルチェンソーを100万回聴きながらエネルギッシュな雰囲気を出したいと思ってデザインしました 元気っ娘マジでかわいい',
					},
					{ 
						id: 2, 
						title: 'スクエアステッカー(ホロライブ 星街すいせい)',
						img_01_src: require('../static/img/design/design-img_01-1.jpg'),
						img_02_src: require('../static/img/design/design-img_01-2.jpg'),
						desc: 'すいちゃんは今日も可愛かったのとブルーのデザインを作ってみたいということで製作しました。クリアブルーな色味で表現しました NotﾎﾞｲﾝﾎﾞｲﾝYesﾍﾟﾀﾝﾍﾟﾀﾝ',
					},
					{ 
						id: 3, 
						title: 'コーディング(レスポンシブ対応)',
						img_01_src: require('../static/img/design/design-img_02-1.jpg'),
						img_02_src: require('../static/img/design/design-img_02-2.jpg'),
						desc: '実案件で作成したコーポレートサイトです。',
					},
					{ 
						id: 4, 
						title: 'コーディング(レスポンシブ対応)',
						img_01_src: require('../static/img/design/design-img_02-1.jpg'),
						img_02_src: require('../static/img/design/design-img_02-2.jpg'),
						desc: '実案件で作成したコーポレートサイトです。',
					},
					{ 
						id: 5, 
						title: '痛車デザイン（Suzuki WagonR）',
						img_01_src: require('../static/img/design/design-img_02-1.jpg'),
						img_02_src: require('../static/img/design/design-img_02-2.jpg'),
						desc: '車のデザインとしては初めて制作しました。<br>当時SEGAの"PhantasyStar Online 2"にどハマりしていたのと、デザインとして広いキャンパスを用いてデザインしたかったのがきっかけでした。<br>サイドのデザインは仮想空間を表現しオリジナルキャラが前に向かって進んでいるようなデザインにしました。仮想空間を表現するため、ローディング画面の青を取り入れ、マテリアルオブジェを背面に散りばめました。',
					},

				]
			}
	    },

	    methods: {
			openModal(item) {
				this.showContent = true
				this.postItem = item
			},
			closeModal () {
				this.showContent = false
			}
	    }

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

	.slick-slider img, .slick-slider video {
		width: inherit;
		/* border-radius: 10px; */
	}

	.container {
		max-width: 980px;
		margin: auto;
	}

	#subpage section {
		width: 100%;
	}

	.flex-area.grid {
		flex-wrap: wrap;
		justify-content: space-between;
		height: auto;
		margin-bottom: 20px;
	}

	#design .flex-area.grid .section-contets {
		width: 316px;
		height: 316px;
		margin-bottom: 20px;
		overflow: hidden;
	}

	.flex-area.grid img {
		width: 100%;
		height: 100%;
		-o-object-fit: cover;
		   object-fit: cover;
		-webkit-transition: -webkit-transform 800ms cubic-bezier(.23, 1, .32, 1);
		        transition: -webkit-transform 800ms cubic-bezier(.23, 1, .32, 1);
		        transition:         transform 800ms cubic-bezier(.23, 1, .32, 1);
		        transition:         transform 800ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 800ms cubic-bezier(.23, 1, .32, 1);
		-webkit-transform: scale(1) translate3d(0, 0, 0);
		        transform: scale(1) translate3d(0, 0, 0);
	}

	.flex-area.grid img:hover {
		-webkit-transform: scale(1.2) translate3d(0, 0, 0);
		        transform: scale(1.2) translate3d(0, 0, 0);
	}

</style>
