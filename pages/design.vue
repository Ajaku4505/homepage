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
						desc: '車のデザインとしては初めて制作しました\n当時SEGAの"PhantasyStar Online 2"にどハマりしていたのと、広いキャンパスを用いてデザインしたかったのがきっかけでした\nサイドのデザインは仮想空間へ、オリジナルキャラが前に向かって進んでいるようなデザインにしました\n仮想空間を表現するために、ローディング画面の青を取り入れ、マテリアルオブジェを背面に散りばめました',
					},
					{ 
						id: 2, 
						title: '痛車デザイン(わんことくらそう みかん&虎太郎)',
						img_01_src: require('../static/img/design/design-img_02-1.jpg'),
						img_02_src: require('../static/img/design/design-img_02-2.jpg'),
						desc: 'わんことくらそうが自分の人生を変えたゲームなのでデザインしました\nまだデザインに慣れてなかったため、キャラの背景をぼかすのに数日かかった上に、\n製作したデータが19000pxとかいうエグい数値で出力して印刷会社を困らせていました',
					},
					{ 
						id: 3, 
						title: '痛車デザイン(にじさんじ 夢月ロア)',
						img_01_src: require('../static/img/design/design-img_03-1.jpg'),
						img_02_src: require('../static/img/design/design-img_03-2.jpg'),
						desc: 'いつの間にかVTuberにハマってデザインしました\n当時VTuber痛車もほっとんど居なかったので、デザインは苦労しました\nしばらく迷った末に画像のような幾何学模様を散りばめたデザインが出来上がりました',
					},
					{ 
						id: 4, 
						title: '痛車デザイン(けものフレンズ ハシビロコウ)',
						img_01_src: require('../static/img/design/design-img_04-1.jpg'),
						desc: 'ベース国外のスズキで "katana edition" というものがあったため、そのバイナルを流用して作成しました\n全体的に薄暗くして、痛車と分かりにくい形に仕上げました',
					},
					{ 
						id: 5, 
						title: 'ボックスステッカー(BNA 影森みちる)',
						img_01_src: require('../static/img/design/design-img_05-1.jpg'),
						desc: 'ケモ成分が強かったのと、HPにアクセスするとかなり色鮮やかなページでしたのできれいだと思ったのでデザインしました\n外周の枠線からはみ出すくらいのフリースタイルさをテキスト込みで表現しました',
					},
					{ 
						id: 6, 
						title: 'ボックスステッカー(アオナツライン)',
						img_01_src: require('../static/img/design/design-img_06-1.jpg'),
						desc: 'ゲームをプレイして面白かったのと、青春を味わいたいのと、夏が好きなのでデザインしました\n青空とJKがなんとも言えない良さを出しています',
					},
					{ 
						id: 7, 
						title: '痛車デザイン(オリジナルキャラクター)',
						img_01_src: require('../static/img/design/design-img_07-1.jpg'),
						desc: '前回同様、バイナルは同じ形状でキャラクターとリニューアルということでデザインしました\n和テイストのキャラクターのため、桜の花びらと彼岸花を添えて春の色合いでまとめました',
					},
					{ 
						id: 8, 
						title: 'ボックスステッカー(にじさんじ ドーラ)',
						img_01_src: require('../static/img/design/design-img_08-1.jpg'),
						desc: 'お茶を飲みまーす と言いながら作りました\nドーラ様の真っ赤なカラーに相反するカラーを取り入れたことでがっちりハマりました\nいまだにこれを超える色の組み合わせステッカーは作れてないです',
					},
					{ 
						id: 9, 
						title: 'ボックスステッカー(にじさんじ 健屋花那)',
						img_01_src: require('../static/img/design/design-img_09-1.jpg'),
						desc: 'にじさんじにこんなライバーいたんだ、好き と思いながら作りました\n目元をぐしゃぐしゃにすることで心の不安や見えない裏の顔を表現しました\n',
					},
					{ 
						id: 10, 
						title: 'ボックスステッカー(にじさんじ 緑仙)',
						img_01_src: require('../static/img/design/design-img_10-1.jpg'),
						desc: '大きな文字からキャラクターがトリミングされたデザインを作りたかったので作りました\nなぜ"DEVIL"なのかというと、毒舌なので悪魔とよく最初の配信で言われてました',
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
						desc: '箱ステ作りたい衝撃に駆られたときに作ったものです\nインスタ風のおしゃれな箱ステ作ってみました\nよーく見ると細かい部分にロアちゃんに関係している人物が入ってたりと小ネタが満載です',
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
						desc: '車のデザインをした時に配布するために作ったデザインです\nパーソナルカラーのパープルにミステリアスな雰囲気で作りました',
					},
					{ 
						id: 15, 
						title: '痛車デザイン(アークナイツ 陈 "チェン")',
						img_01_src: require('../static/img/design/design-img_15-1.jpg'),
						img_02_src: require('../static/img/design/design-img_15-2.jpg'),
						desc: 'イベント1週間前に急遽デザインしたものです\n初期ではカラーで印刷する予定でしたが、モノトーンも見てみたいと言われ作ったのがきっかけでした\n施工後は白ボディにモノトーンステッカーでパキッとした仕上がりになっており非常に満足していました\n',
					},
					{ 
						id: 16, 
						title: '痛車デザイン(にじさんじ 夢月ロア)',
						img_01_src: require('../static/img/design/design-img_16-1.jpg'),
						img_02_src: require('../static/img/design/design-img_16-2.jpg'),
						desc: 'デザインで一番こだわった作品です。デザインコンセプトは "ウォールアート" です\n車体に壁を表現し、スプレーアートを重ねることで違和感がないデザインへと仕上がりました\n色数も敢えて増やすことで、本国でよく見られる鮮やかな仕上がりになりました\n特に色にはこだわっており、WEBカラーを元にスプレーカラーをサンプリングし\nより印刷物ではなかなか出せないであろう色を選びました',
					},
					{ 
						id: 17, 
						title: 'Webデザイン(DayDream2021 スペックシート @Ajaku4505)',
						img_01_src: require('../static/img/design/design-img_17-1.jpg'),
						desc: 'DayDream2021に展示した際のスペックシートになります\nWebのデザインをまともにやったのはこれが初めてで、映像製作・撮影・Webデザイン・コーディングまでを全て一人で担当しました\n特に見るときにワクワクするモーションを入れるのに苦労しました\nhttps://ajaku.jp/daydream2021',
					},
					{ 
						id: 18, 
						title: '痛車デザイン(アイドルマスター シャイニーカラーズ 西城樹里&杜野凛世)',
						img_01_src: require('../static/img/design/design-img_18-1.jpg'),
						img_02_src: require('../static/img/design/design-img_18-2.jpg'),
						desc: 'リアガラスにふたりのエモいものをというコンセプトからデザインしました\n放課後という言葉で夕日を連想させ、夕暮れ時にふたりで仲良く過ごしている\nエモいものに仕上げました',
					},
					{ 
						id: 19, 
						title: 'スクエアステッカー(アイドルマスター シャイニーカラーズ 西城樹里&杜野凛世)',
						img_01_src: require('../static/img/design/design-img_19-1.jpg'),
						img_02_src: require('../static/img/design/design-img_19-2.jpg'),
						desc: '夕日が落ちる砂浜で仲良く二人でいる雰囲気を出して作りました\nリアガラスのデザインと同じテイストで当てはめ、パッと見てエモいと言わせるようなモノ作って欲しいということで作成しました。\n',
					},
					{ 
						id: 20, 
						title: '痛車デザイン【構想】(ホロライブ 獅白ぼたん)',
						img_01_src: require('../static/img/design/design-img_20-1.jpg'),
						desc: 'レースレプリカを作ったことがなかったため、単純な好奇心とししろんがカッコよかったので作りました\nモチーフになったのは90年代JTCCで活躍していたPIAAカラーのCDアコードになります\n白ボディに黒のストライプだけでデザインされた車体はししろん とマッチしてたので相性がよくコラりました',
					},
					{ 
						id: 21, 
						title: 'スクエアステッカー(ホロライブ 星街すいせい)',
						img_01_src: require('../static/img/design/design-img_21-1.jpg'),
						mov_02_src: require('../static/img/design/design-img_21-2.jpg'),
						desc: 'すいちゃんは今日も可愛かったのとブルーのデザインを作ってみたいということでデザインしました\nパーソナルカラーのブルーで表現し、背景には水彩画を用い、星々と幾何学模様を入れることで夜空を表現しました',
					},
					{ 
						id: 22,
						title: 'スクエアステッカー(ホロライブ 不知火フレア)',
						img_01_src: require('../static/img/design/design-img_22-1.jpg'),
						img_02_src: require('../static/img/design/design-img_22-2.jpg'),
						desc: 'ふーたんのメンタルチェンソーを100万回聴きながらエネルギッシュな雰囲気に惹かれデザインしました\n角ばったフォントに挨拶を背景に流し込むデザインは面白い仕上がりになりました 元気っ娘マジでかわいい',
					},
					{ 
						id: 23,
						title: 'Webデザイン(ポートフォリオ)',
						img_01_src: require('../static/img/design/design-img_23-1.jpg'),
						desc: '現在見ていますこのページになります\nデザインのストックが貯まったのと、今後の資産として作成しました\nデザインとコーディングを行い、フレームはnuxt.jsを用いました',
					},
					{ 
						id: 24,
						title: 'スクエアステッカー(にじさんじ 葉加瀬冬雪)',
						img_01_src: require('../static/img/design/design-img_24-1.jpg'),
						img_02_src: require('../static/img/design/design-img_24-2.jpg'),
						desc: '"TRiNITY" のアルバムデザインがカッコよかったので深夜テンションで作ってみました\nネオンシティで黄昏ているのを想像して作成しました\nインスタ風に仕上げたため細かい部分にははかちぇに関係する小ネタが多く仕込まれています',
					},
					{ 
						id: 25,
						title: '痛車デザイン(原神 神里綾華)',
						img_01_src: require('../static/img/design/design-img_25-1.jpg'),
						img_02_src: require('../static/img/design/design-img_25-2.jpg'),
						desc: '氷属性ということもあり青を多用し、冷たさを表現\nその中にも作中で出てくる桜をイメージして全体を型取り、両立させたデザインは\n冷たくも華やかで落ち着いたイメージを持たせてくれました',
					},
					{ 
						id: 26,
						title: 'スクエアステッカー(原神 神里綾華)',
						img_01_src: require('../static/img/design/design-img_26-1.jpg'),
						img_02_src: require('../static/img/design/design-img_26-2.jpg'),
						desc: '痛車のデザイン後に余った時間を用いて作成\n神里家の紋章と柄全体的に和のテイストを表現しました\n和紙のような表現と古書をモチーフにしたレイアウトは新しいデザインを表現しました',
					},
					{ 
						id: 27,
						title: 'スクエアステッカー(にじさんじ 西園チグサ)',
						img_01_src: require('../static/img/design/design-img_27-1.jpg'),
						img_02_src: require('../static/img/design/design-img_27-2.jpg'),
						desc: 'テキストを入れずにキャラクターを表現してみました\nバーチャルな空間を表すための幾何学な図形と、キャラクターのイメージカラーを添えたデザインでバランスよく表現しました',
					},
					{ 
						id: 28,
						title: '痛車デザイン(にじさんじ 御伽原江良)',
						img_01_src: require('../static/img/design/design-img_28-1.jpg'),
						img_02_src: require('../static/img/design/design-img_28-2.jpg'),
						desc: 'デザインには物語を詰め込んでおり、運転席からデビューを表現して活発に活動して行く姿をデザインで表現しました\nそこから助手席側は、引退という形を流れるようにデザインで表していきました\nどちらも時計の時間には意味が込められており、時間の部分には各ライバーのマークを当てはめています',
					},
					{ 
						id: 29, 
						title: 'Webデザイン(DayDream2022 スペックシート @takuto_s2k)',
						img_01_src: require('../static/img/design/design-img_29-1.jpg'),
						desc: 'DayDream2022で展示していた 御伽原江良 S2000のスペックシートです\nレスポンシブ対応でLPページとして作成したため、文章と画像でシンプルに作成しました\nhttps://ajaku.jp/daydream2022_takuto_s2k',
					},
					{ 
						id: 30, 
						title: 'スクエアステッカー(にじさんじ 御伽原江良)',
						img_01_src: require('../static/img/design/design-img_30-1.jpg'),
						img_02_src: require('../static/img/design/design-img_30-2.jpg'),
						desc: '以前作ってたインスタ風シリーズで作ってみました\n思い入れのあるウェディングイラストで美しいシンデレラのワンシーンを切り抜きました',
					},
					{ 
						id: 31, 
						title: 'スクエアステッカー(にじさんじ 戌亥とこ)',
						img_01_src: require('../static/img/design/design-img_31-1.jpg'),
						img_02_src: require('../static/img/design/design-img_31-2.jpg'),
						desc: 'インスタ風シリーズの1作品です\n喫茶店で働いている新ビジュアルをイメージカーラーに寄せた赤い背景とともに形にしました',
					},
					{ 
						id: 32, 
						title: '印刷物(DayDream2022 スペックシート @galhey_kyermm)',
						img_01_src: require('../static/img/design/design-img_32-1.jpg'),
						desc: 'DayDream2022のスペックシートのデザインです\nポスターとして見せるのが主でしたので、キャラクターの順番とメッセージに意味を込めて作成しました\n下部には車両スペックを見やすく記述し、SNSのリンクを配置しました',
					},
					{ 
						id: 33, 
						title: '印刷物(DayDream2022 スペックシート @sho510sss)',
						img_01_src: require('../static/img/design/design-img_33-1.jpg'),
						desc: 'DayDream2022のスペックシートのデザインです\n両側からイラストを全身見せ、中央に車両スペックを記載しました',
					},
					{ 
						id: 34, 
						title: 'スクエアステッカー(原神 甘雨)',
						img_01_src: require('../static/img/design/design-img_34-1.jpg'),
						img_02_src: require('../static/img/design/design-img_34-2.jpg'),
						desc: '原神に登場する甘雨ちゃんのスクエアステッカーのデザインをしました\n神里綾華とは違う、中国古来の色と模様を用いてデザインしました',
					},
					{ 
						id: 35, 
						title: 'スクエアステッカー(ホロライブ 獅白ぼたん)',
						img_01_src: require('../static/img/design/design-img_35-1.jpg'),
						img_02_src: require('../static/img/design/design-img_35-2.jpg'),
						desc: 'ししろんの可愛らしさに釣られて作りました\nかっこいいデザインとは相対的に、メルヘン寄りの可愛らしいカラーでデザインしました。\n可愛いの具現化で、ししろんっぽくないのもあって、新鮮な気持ちでデザインしてました。',
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
	    },

		head() {
			return {
				title: 'Design | Ajaku Portfolio',
				meta: [
					{ hid: 'description', name: 'description', content: 'Mainly, the list includes the items we have designed: ITASHA, stickers, posters, websites, and various other achievements.'},

					{ hid: 'og:site_name', property: 'og:site_name', content: 'Design | Ajaku Portfolio' },
					{ hid: 'og:title', property: 'og:title', content: 'Design | Ajaku Portfolio' },
					{ hid: 'og:url', property: 'og:url', content: 'https://ajaku.jp/design' },
					{ hid: 'og:description', property: 'og:description', content: 'Mainly, the list includes the items we have designed: ITASHA, stickers, posters, websites, and various other achievements.' },
					{ hid: 'og:image', property: 'og:image', content: 'https://ajaku.jp/img/thumbnail.jpg' },
					{ hid: 'twitter:site', name: 'twitter:site', content: '@Ajaku4505' }
				],
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
		width: 280px;
		height: 280px;
		   object-fit: cover;
		-o-object-fit: cover;
		margin-bottom: 20px;
		overflow: hidden;
	}

	#design .flex-area.grid::after {
		content: "";
	    display: block;
	    width: 31.5%;
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
