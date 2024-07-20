<template>

	<div class="main-contents">
		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<section id="portfolio" class="contents-area">
						<div class="secWrap">
							<div class="flex-area grid">
								<div class="section-contents" v-for="item in reverseItems" @mouseover="changeImg" @mouseleave="returnImg">
									<img @click="openModal(item)" :src="item.img_01_src" alt="photo_item" loading="lazy">
								</div>
								<modal :val="postItem" v-show="showContent" @close="closeModal" />
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
		<div class="bg-img"></div>
	</div>

</template>

<script>

	import Slick from 'vue-slick'
	import '../node_modules/slick-carousel/slick/slick.css'
	import Modal from '~/components/modal.vue'

	export default {
		layout: "minpage",

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
						title: '明治座 オンライン明治座横丁',
						img_01_src: require('../static/img/portfolio/meijiza.jpg'),
						url: 'https://yokocho.meijiza.co.jp/',
					},
					{ 
						id: 2, 
						title: 'キタムラフーズ オンラインショップ',
						img_01_src: require('../static/img/portfolio/kitamura.jpg'),
						url: 'https://shop.k-foods.co.jp/products_list.aspx?mode=display',
					},
					{ 
						id: 3, 
						title: 'キャスタイムスタンプ ブランドサイト',
						img_01_src: require('../static/img/portfolio/castime.jpg'),
						url: 'https://castime.jp/',
					},
					{ 
						id: 4, 
						title: 'キャスタイムスタンプ LPページ',
						img_01_src: require('../static/img/portfolio/castime_lp.jpg'),
						url: 'https://castime.jp/lp/',
					},
					{ 
						id: 5, 
						title: 'SUNRISEむなかた エントリーシート',
						img_01_src: require('../static/img/portfolio/munakata.jpg'),
						url: 'https://ajaku.jp/munakata2020/',
					},
					{ 
						id: 6, 
						title: '株式会社ファイブ コーポレートサイト',
						img_01_src: require('../static/img/portfolio/five.jpg'),
						url: 'https://five-co.com/',
					},
					{ 
						id: 7, 
						title: '株式会社ファースト コーポレートサイト',
						img_01_src: require('../static/img/portfolio/first.jpg'),
						url: 'https://first-ms.com/',
					},
					{ 
						id: 8, 
						title: '株式会社ゼロ コーポレートサイト',
						img_01_src: require('../static/img/portfolio/zero.jpg'),
						url: 'https://www.ms-zero.com/',
					},
					{ 
						id: 9, 
						title: '株式会社フロンティア コーポレートサイト',
						img_01_src: require('../static/img/portfolio/frontire.jpg'),
						url: 'https://ft-co.com/',
					},
					{ 
						id: 11, 
						title: '合志市議会議員 | ながきよ和寛 LPページ',
						img_01_src: require('../static/img/portfolio/nagakiyo.jpg'),
						url: 'https://nagakiyo.jp/',
					},
					{ 
						id: 12, 
						title: 'ITASHA WEEK 2021 エントリーシート',
						img_01_src: require('../static/img/portfolio/iw2021.jpg'),
						url: 'https://ajaku.jp/IW2021/',
					},
					{ 
						id: 13, 
						title: 'エガちゃんねる オンラインショップ',
						img_01_src: require('../static/img/portfolio/ega.jpg'),
						url: 'https://egachannel.shop/',
					},
					{ 
						id: 15, 
						title: 'トヨタL&F熊本 コーポレートサイト',
						img_01_src: require('../static/img/portfolio/toyotalf.jpg'),
						url: 'https://lf-kumamoto.com/',
					},
					{ 
						id: 17, 
						title: 'DayDream2021 | スペックシート',
						img_01_src: require('../static/img/portfolio/dd2021.jpg'),
						url: 'https://ajaku.jp/daydream2021/',
					},
					{ 
						id: 18, 
						title: '東邦非鉄金属 コーポレートサイト',
						img_01_src: require('../static/img/portfolio/toho.jpg'),
						url: 'https://www.toho-hk.com/',
					},
					{ 
						id: 19, 
						title: '徳永北 京町茶寮 コーポレートサイト',
						img_01_src: require('../static/img/portfolio/kyomati.jpg'),
						url: 'https://tokunagakita.com/kyomachi/',
					},
					{ 
						id: 20, 
						title: 'ポートフォリオサイト',
						img_01_src: require('../static/img/portfolio/ajaku.jpg'),
						url: 'https://ajaku.jp/',
					},
					{ 
						id: 21, 
						title: 'DayDream2022 | スペックシート(@Takuto_s2k)',
						img_01_src: require('../static/img/portfolio/takuto.jpg'),
						url: 'https://ajaku.jp/daydream2022_takuto_s2k/',
					},
					{ 
						id: 22, 
						title: 'ボートレース 募集ページ',
						img_01_src: require('../static/img/portfolio/boatrace.jpg'),
						url: 'https://info-boatrace.jp/?_gl=1*10vyk1y*_gcl_au*NzczNDk5MTY4LjE2ODk0MDkwMTI.&_ga=2.263184332.1998096876.1689409013-168996534.1689409013',
					},
					{ 
						id: 23, 
						title: '富士通Data Driven トピック制作',
						img_01_src: require('../static/img/portfolio/fujitsu.jpg'),
						url: 'https://www.fujitsu.com/jp/innovation/data-driven/capabilities/bi-expert/',
					},
					{ 
						id: 24, 
						title: '大林組 Tsunashima サイネージ',
						img_01_src: require('../static/img/portfolio/tsunashima.jpg'),
						// url: 'https://tsst.scim-service.jp/signage/',
					},
					{ 
						id: 25, 
						title: '浦和レッズ コーポレートサイト',
						img_01_src: require('../static/img/portfolio/urawa.jpg'),
						url: 'https://www.urawa-reds.co.jp/',
					},
					{ 
						id: 26, 
						title: '浦和レッズ シーズンチケット 特設ページ',
						img_01_src: require('../static/img/portfolio/urawa_ticket.jpg'),
						url: 'https://www.urawa-reds.co.jp/ticket/2023season/',
					},
					{ 
						id: 27, 
						title: '太陽建機レンタル 高所作業ページ',
						img_01_src: require('../static/img/portfolio/taiyo_kousyo.jpg'),
						url: 'https://www.taiyokenki.co.jp/product/awp/index.html',
					},
					{ 
						id: 28, 
						title: 'ZEN風土 コーポレートサイト',
						img_01_src: require('../static/img/portfolio/zenfood.jpg'),
						url: 'https://www.taiyokenki.co.jp/product/awp/index.html',
					},
					{ 
						id: 29, 
						title: 'CESA 日本ゲーム大賞 ブランドサイト',
						img_01_src: require('../static/img/portfolio/award.jpg'),
						url: 'https://awards.cesa.or.jp/',
					},
					{ 
						id: 30, 
						title: 'talenta 3rings プロトタイプ開発',
						img_01_src: require('../static/img/portfolio/talenta.jpg'),
						url: '',
					},
					{ 
						id: 32, 
						title: 'C&R GO Beyond the Limit',
						img_01_src: require('../static/img/portfolio/gobeyond.jpg'),
						url: 'https://www.cri.co.jp/gobeyond/',
					},
					{ 
						id: 33, 
						title: 'HOKTO きのこらぼ 菌活チャレンジ',
						img_01_src: require('../static/img/portfolio/kinkatsu.jpg'),
						url: 'https://www.hokto-kinoko.co.jp/kinokolabo/kinkatsu-challenge/',
					},
					{ 
						id: 34, 
						title: '太陽建機レンタル レンタカーページ',
						img_01_src: require('../static/img/portfolio/taiyo_rentacar.jpg'),
						url: 'https://www.taiyokenki.co.jp/product/hirecar/',
					},
					{ 
						id: 36, 
						title: '浦和レッズ マッチインフォメーションページ',
						img_01_src: require('../static/img/portfolio/urawa_match.jpg'),
						url: 'https://www.urawa-reds.co.jp/game/match_info/',
					},
					{ 
						id: 37, 
						title: '浦和レッズ SDGsページ',
						img_01_src: require('../static/img/portfolio/urawa_sdgs.jpg'),
						url: 'https://www.urawa-reds.co.jp/club/sdgs.php',
					},
					{ 
						id: 38, 
						title: 'キッザニア SDGsページ',
						img_01_src: require('../static/img/portfolio/kidzania.jpg'),
						url: 'https://www.kidzania.jp/sdgs/',
					},
					{ 
						id: 39, 
						title: 'LEXUS 東京モーターショウ 諸元表カタログ + 5会場',
						img_01_src: require('../static/img/portfolio/lexus.jpg'),
					},
					{ 
						id: 40, 
						title: '一般社団法人集合住宅デジタル高度化協議会(CDEfC) サイト',
						img_01_src: require('../static/img/portfolio/cdfec.jpg'),
						url: 'https://cdefc.jp/',
					},
					{ 
						id: 41, 
						title: 'MONSTER STUDIO ブランドサイト',
						img_01_src: require('../static/img/portfolio/monster_studio.jpg'),
						url: 'https://www.monster-studio.jp/',
					},
					{ 
						id: 42, 
						title: '浦和レッズ 観戦ルールとマナーページ',
						img_01_src: require('../static/img/portfolio/urawa_manner.jpg'),
						url: 'https://www.urawa-reds.co.jp/game/manner.php',
					},
					{ 
						id: 43, 
						title: 'ビジネスブレイン太田昭和 コーポレートサイト',
						img_01_src: require('../static/img/portfolio/bbs.jpg'),
						url: 'https://www.bbs.co.jp/',
					},
					{ 
						id: 44, 
						title: 'CEDEC2024 ティザーサイト',
						img_01_src: require('../static/img/portfolio/cedec_teaser.jpg'),
						url: 'https://cedec.cesa.or.jp/2024/',
					},
					{ 
						id: 45, 
						title: 'パーソルクロステクノロジー 新卒採用サイト',
						img_01_src: require('../static/img/portfolio/pxt.jpg'),
						url: 'https://persol-xtech.co.jp/recruit/newgraduate/',
					},
				]
			}
	    },

		computed: {
    		reverseItems() {
      			return this.items.slice().reverse();
    		},
    	},

	    methods: {
			openModal(item) {
				this.showContent = true
				this.postItem = item
			},
			closeModal () {
				this.showContent = false
			},

            changeImg: function(e) {
				const target = document.querySelector(".bg-img");
				let imgUrl = e.target.getAttribute("src");
				target.style.background = "url(" + imgUrl + ")";
				target.style.backgroundRepeat = "no-repeat";
				target.style.backgroundSize = "cover";
				target.style.backgroundPosition = "center";
				target.style.opacity = "1";
				target.style.visibility = "visible";
            },

            returnImg: function(e) {
				const target = document.querySelector(".bg-img")
				target.style.opacity = "0";
				target.style.visibility = "hidden";
            }

	    },

		head() {
			return {
				title: 'Portfolio | Ajaku Portfolio',
				meta: [

					{ hid: 'og:site_name', property: 'og:site_name', content: 'portfolio | Ajaku Portfolio' },
					{ hid: 'og:title', property: 'og:title', content: 'portfolio | Ajaku Portfolio' },
					{ hid: 'og:url', property: 'og:url', content: 'https://ajaku.jp/portfolio' },
					{ hid: 'og:image', property: 'og:image', content: 'https://ajaku.jp/img/thumbnail.jpg' },
					{ hid: 'twitter:site', name: 'twitter:site', content: '@Ajaku4505' },
					{ name: 'robots', content: 'noindex,nofollow' }
				],
			}

		}

	}

</script>

<style>

	body {
		transition: all 1s;
	}

	.bg-img {
		width: 100vw;
		height: 100vh;
		background: #FFF;
		z-index: -1;
		position: fixed;
		top: 0;
		left: 0;
		opacity: 0;
		visibility: hidden;
		/* transition: opacity .4s, visibility .4s; */
		transition: all .2s;
		filter: blur(10px);
	}

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
		max-width: 80%;
		margin: auto;
	}

	#portfolio section {
		width: 100%;
	}

	.flex-area.grid {
		flex-wrap: wrap;
		justify-content: space-between;
		height: auto;
		margin-bottom: 20px;
	}

	#portfolio .flex-area.grid .section-contents {
		/* width: 205px; */
		width :calc(100% / 3 - 15px);
		/* height: 205px; */
		height: 100%;
		   object-fit: cover;
		-o-object-fit: cover;
		margin-bottom: 20px;
		overflow: hidden;
		cursor: pointer;
	}

	#portfolio .flex-area.grid::after{
		content:"";
		display: block;
		width :calc(100% / 3 - 15px);
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


	@media screen and (max-width:768px) {

		section#portfolio {
			width: 90%;
		}

		.flex-area.grid {
			flex-direction: inherit;
			margin-bottom: 20px;
		}

		#portfolio .flex-area.grid .section-contents {
			width: calc(100% / 2 - 5px);
			height: 180px;
			height: auto;
			aspect-ratio: 1 / 1;
			margin-bottom: 10px;
		}

	}

</style>
