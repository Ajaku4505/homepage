<template>

	<div class="main-contents">
		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<section id="design" class="contents-area">
						<div class="secWrap">
							<div class="flex-area grid">
								<div class="section-contets" v-for="item in reverseItems">
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
						title: '痛車デザイン(Phantasy Star Online2 オリキャラ)',
						img_01_src: require('../static/img/design/design-img_01-1.jpg'),
						img_02_src: require('../static/img/design/design-img_01-2.jpg'),
						desc: '車のデザインとしては初めて制作しました\n当時SEGAの"PhantasyStar Online 2"にどハマりしていたのと、デザインとして広いキャンパスを用いてデザインしたかったのがきっかけでした\nサイドのデザインは仮想空間を表現しオリジナルキャラが前に向かって進んでいるようなデザインにしました\n仮想空間を表現するため、ローディング画面の青を取り入れ、マテリアルオブジェを背面に散りばめました',
					},
					{ 
						id: 2, 
						title: '痛車デザイン(わんことくらそう みかん&虎太郎)',
						img_01_src: require('../static/img/design/design-img_02-1.jpg'),
						img_02_src: require('../static/img/design/design-img_02-2.jpg'),
						desc: 'わんことくらそうが自分の人生を変えたゲームなのでデザインしました\nまだデザインに慣れてなかったのか、キャラの背景をぼかすのに数日かかった上に、\n製作したデータが19000pxとかいうエグい作り方をしてたんだなと実感しました',
					},
					{ 
						id: 3, 
						title: '痛車デザイン(にじさんじ 夢月ロア)',
						img_01_src: require('../static/img/design/design-img_03-1.jpg'),
						img_02_src: require('../static/img/design/design-img_03-2.jpg'),
						desc: 'いつの間にかVTuberにハマってしまってデザインしました\n当時VTuber痛車もほっとんど居なかったので、デザインは苦労しました\nしばらく迷った末に画像のような形が出来上がりました',
					},
					{ 
						id: 4, 
						title: '痛車デザイン(けものフレンズ ハシビロコウ)',
						img_01_src: require('../static/img/design/design-img_04-1.jpg'),
						desc: '元は指定された国外のスズキで "katana edition" たるものがあったため、そのバイナルを流用して完成したものです\n全体的に薄暗くして、痛車に見えない感じに仕上げました',
					},
					{ 
						id: 5, 
						title: 'ボックスステッカー(BNA 影森みちる)',
						img_01_src: require('../static/img/design/design-img_05-1.jpg'),
						desc: 'ケモ成分が強かったのと、いざHPを見たらかなり色鮮やかに使われてきれいだと思ったのでデザインしました\n外周の枠線からはみ出すくらいのフリースタイルさをテキスト込みで表現しました',
					},
					{ 
						id: 6, 
						title: 'ボックスステッカー(アオナツライン)',
						img_01_src: require('../static/img/design/design-img_06-1.jpg'),
						desc: 'ゲームして物凄く面白かったのと、青春を味わいたいのと夏が好きなのでデザインしました\n青空とJKがなんとも言えない良さを出しています',
					},
					{ 
						id: 7, 
						title: '痛車デザイン(大分ご当地キャラ)',
						img_01_src: require('../static/img/design/design-img_07-1.jpg'),
						desc: '前回同様、バイナルは同じ形状でキャラクターとリニューアルということでデザインしました\n和テイストのキャラクターのため、桜の花と彼岸花を添えて比較的 同系色でまとめました',
					},
					{ 
						id: 8, 
						title: 'ボックスステッカー(にじさんじ ドーラ)',
						img_01_src: require('../static/img/design/design-img_08-1.jpg'),
						desc: 'お茶を飲みまーす と言いながら作りました\nドーラ様の真っ赤なカラーに相反するカラーを取り入れたことでがっちりハマりました\nいまだにこれを超える色の組み合わせステッカーはまだ作れてないです',
					},
					{ 
						id: 9, 
						title: 'ボックスステッカー(にじさんじ 健屋花那)',
						img_01_src: require('../static/img/design/design-img_09-1.jpg'),
						desc: 'にじさんじにこんなライバーいたんだ、好き と思いながら作りました\n目元をぐしゃぐしゃにすることで心の不安や表面上での見えない顔を表現しました\n',
					},
					{ 
						id: 10, 
						title: 'ボックスステッカー(にじさんじ 緑仙)',
						img_01_src: require('../static/img/design/design-img_10-1.jpg'),
						desc: '大きな文字からキャラクターがトリミングされたデザインを作りたかったので作りました\nなぜ"DEVIL"なのかというと毒舌なので悪魔ってよく最初の配信で言われてました',
					},
					{ 
						id: 11, 
						title: 'ボックスステッカー(にじさんじ シスター・クレア)',
						img_01_src: require('../static/img/design/design-img_11-1.jpg'),
						desc: '神のご加護があらんことを と思いながら作りました\nデザインというデザインは無いですが、クレアさんって天使ですよね',
					},
					{ 
						id: 12, 
						title: 'スクエアステッカー(にじさんじ 夢月ロア)',
						img_01_src: require('../static/img/design/design-img_12-1.jpg'),
						img_02_src: require('../static/img/design/design-img_12-2.jpg'),
						desc: '箱ステ作りたい衝撃に駆られたときに作ったものです\nインスタ風のおしゃれな箱ステ作ってみました\nよーく見ると細かい部分にロアちゃんと関連している内容が入ってたりと小ネタが満載です',
					},
					{ 
						id: 13, 
						title: '痛車デザイン【構想】(ホロライブ 紫咲シオン)',
						img_01_src: require('../static/img/design/design-img_13-1.jpg'),
						desc: 'ITASHAWEEK2021に展示する予定だったデザインです\nキャラクターとドアモールより下に可愛くデザインしてみました',
					},
					{ 
						id: 14, 
						title: 'ボックスステッカー(ホロライブ 紫咲シオン)',
						img_01_src: require('../static/img/design/design-img_14-1.jpg'),
						desc: '車のデザインをした時の余白埋めのためにさらっと作ったデザインです\nトレンドカラーのパープルにミステリアスな雰囲気で作りました',
					},
					{ 
						id: 15, 
						title: '痛車デザイン(アークナイツ 陈 "チェン")',
						img_01_src: require('../static/img/design/design-img_15-1.jpg'),
						img_02_src: require('../static/img/design/design-img_15-2.jpg'),
						desc: 'イベント1週間前に急遽デザインしたものです\n元々はカラーで印刷する予定でしたが、モノトーンモノトーンも見てみたいと言われ作ったのがきっかけでした\n施工後は白と黒でパキッとした仕上がりになっており非常に満足していました\n',
					},
					{ 
						id: 16, 
						title: '痛車デザイン(にじさんじ 夢月ロア)',
						img_01_src: require('../static/img/design/design-img_16-1.jpg'),
						img_02_src: require('../static/img/design/design-img_16-2.jpg'),
						desc: 'デザインで一番苦労した作品です。デザインコンセプトは "ウォールアート" です\n車体に壁を表現し、スプレーアートを重ねることで違和感がないデザインへと仕上がりました\n色数も敢えて増やすことで、鮮やかな形になりました\n特に色にはこだわっており、WEBカラーより印刷物ではなかなか出せないであろう色を選びました',
					},
					{ 
						id: 17, 
						title: 'Webデザイン(DayDream2021 スペックシート)',
						img_01_src: require('../static/img/design/design-img_17-1.jpg'),
						desc: 'DayDream2021に展示した際のスペックシートになります\nWebのデザインをまともにやったのはこれが初めてで、映像製作・撮影・Webデザイン・コーディングまでを全て一人で担当しました\n特にスマートフォンでも見やすくレスポンシブに製作するのに苦労しました\nhttps://ajaku.sakura.ne.jp/daydream2021',
					},
					{ 
						id: 18, 
						title: '痛車デザイン(アイドルマスター シャイニーカラーズ 西城樹里&杜野凛世)',
						img_01_src: require('../static/img/design/design-img_18-1.jpg'),
						img_02_src: require('../static/img/design/design-img_18-2.jpg'),
						desc: 'リアガラスにふたりのエモいものをというコンセプトからデザインしました\n放課後という言葉で夕日を連想したため、夕暮れ時にふたりで仲良くしている\nエモいものにしました',
					},
					{ 
						id: 19, 
						title: '痛車デザイン【構想】(ホロライブ 獅白ぼたん)',
						img_01_src: require('../static/img/design/design-img_19-1.jpg'),
						desc: 'レースレプリカを作ったことがなかったため、単純な好奇心とししろんがカッコよかったので作りました\nモチーフになったのは90年代JTCCで活躍していたPIAAカラーのCDアコードになります\n白ボディに黒のストライプだけでデザインされた車体はししろん とマッチしてたのでほんと好奇心でコラりました',
					},
					{ 
						id: 20, 
						title: 'スクエアステッカー(ホロライブ 星街すいせい)',
						img_01_src: require('../static/img/design/design-img_20-1.jpg'),
						mov_02_src: require('../static/img/design/design-img_20-2.jpg'),
						desc: 'すいちゃんは今日も可愛かったのとブルーのデザインを作ってみたいということでデザインしました\nトレンドカラーのクリアブルーで表現し、背景には星々と水彩画を用い幾何学模様も入れることで、夜空を表現しました',
					},
					{ 
						id: 21,
						title: 'スクエアステッカー(ホロライブ 不知火フレア)',
						img_01_src: require('../static/img/design/design-img_21-1.jpg'),
						img_02_src: require('../static/img/design/design-img_21-2.jpg'),
						desc: 'ふーたんのメンタルチェンソーを100万回聴きながらエネルギッシュな雰囲気を出したいと思ってデザインしました\n角ばったフォントにテキストを多量に流し込むデザインは初めてやってみました 元気っ娘マジでかわいい',
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

	#design section {
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
		   object-fit: cover;
		-o-object-fit: cover;
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


	@media screen and (max-width:768px) {

		section#design {
			width: 90%;
		}

		.flex-area.grid {
			flex-direction: inherit;
			margin-bottom: 20px;
		}

		#design .flex-area.grid .section-contets {
			width: calc(100% / 2 - 5px);
			height: 180px;
			margin-bottom: 10px;
		}

	}

</style>
