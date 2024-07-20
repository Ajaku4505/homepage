<template>

	<div class="main-contents">
		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<section id="design" class="contents-area">
						<div class="secWrap">
							<div class="flex-area grid">
								<div class="section-contents" v-for="item in reverseItems">
									<img @click="openModal(item)" :src="item.img_01_src" alt="design_item" loading="lazy">
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
						desc: 'ししろんの可愛らしさに釣られて作ってみました\nかっこいいデザインとは相対的に、メルヘン寄りの可愛らしいカラーでデザインに落とし込んでみました。\n可愛いの具現化で、ししろんっぽくないのもあって、すごく悩んだデザインです。',
					},
					{ 
						id: 36, 
						title: 'アパレル(V OTAKU GAMERS Tシャツ)',
						img_01_src: require('../static/img/design/design-img_36-1.jpg'),
						img_02_src: require('../static/img/design/design-img_36-2.jpg'),
						desc: 'メンバー用のTシャツを製作しました\nシンプルなデザインにメンバーであるharutoさんのロゴが映える仕上がりとなりました。',
					},
					{ 
						id: 37, 
						title: '痛車デザイン(とある魔術の禁書目録 禁書目録)',
						img_01_src: require('../static/img/design/design-img_37-1.jpg'),
						img_02_src: require('../static/img/design/design-img_37-2.jpg'),
						desc: 'インデックスの雰囲気と、夜空に浮かぶ紋章が目立つデザインにしました。\n随所にあしらいを増やして遊び心も盛り込みました。',
					},
					{ 
						id: 39, 
						title: 'スクエアステッカー(Star☆Ring 天狼 ウルル)',
						img_01_src: require('../static/img/design/design-img_39-1.jpg'),
						img_02_src: require('../static/img/design/design-img_39-2.jpg'),
						desc: 'キャラクターはブランド会社の社長ということもあり、モチーフの柄を服の生地に見立ててデザインしました。\n質感とキャラクターの融合で細かいところに目がいくようデザインしました。',
					},
					{ 
						id: 40, 
						title: 'スクエアステッカー(ホロライブ 大空スバル)',
						img_01_src: require('../static/img/design/design-img_40-1.jpg'),
						img_02_src: require('../static/img/design/design-img_40-2.jpg'),
						desc: 'エネルギッシュでモチーフカラーのイエローと差し色のグリーンを生かしたエネルギッシュなデザインです。\n色合いのバランスをうまく取ることに苦労しました。',
					},
					{ 
						id: 41, 
						title: 'スクエアステッカー(にじさんじ 海妹四葉)',
						img_01_src: require('../static/img/design/design-img_41-1.jpg'),
						img_02_src: require('../static/img/design/design-img_41-2.jpg'),
						desc: 'パープルとイエローでまとめたシンプルで蛍光色なデザインをしました。',
					},
					{ 
						id: 42, 
						title: '痛車デザイン(にじさんじ 先斗寧)',
						img_01_src: require('../static/img/design/design-img_42-1.jpg'),
						img_02_src: require('../static/img/design/design-img_42-2.jpg'),
						desc: '和のテイストを盛り込んで、敢えて明朝体のフォントを用いて縁いっぱいに作成しました。',
					},
					{ 
						id: 43, 
						title: '学生証製作(ブルーアーカイブ SRT特殊部隊)',
						img_01_src: require('../static/img/design/design-img_43-1.jpg'),
						desc: '元々のロゴと、特殊部隊を考慮し 学生証として違和感のないようなデザインを心がけました。\n背景の柄も元になった部隊から引用し、生徒が付けていて欲しいと思う仕上がりにしました。',
					},
					{ 
						id: 44, 
						title: '痛車デザイン(アイドルマスター シンデレラガールズ 桐生つかさ)',
						img_01_src: require('../static/img/design/design-img_44-1.jpg'),
						img_02_src: require('../static/img/design/design-img_44-2.jpg'),
						desc: '自身のファッションブランドで用いられている柄のパターンをモチーフにデザインしました。\n背景には服の質感を持たせたテクスチャを加え、シックな雰囲気に仕上げました。',
					},
					{ 
						id: 45, 
						title: 'スクエアステッカー(アイドルマスター シンデレラガールズ 桐生つかさ)',
						img_01_src: require('../static/img/design/design-img_45-1.jpg'),
						img_02_src: require('../static/img/design/design-img_45-2.jpg'),
						desc: '車のデザインをそのまま落とし込みましたが、ファッション誌のような余白を意識したステッカーを作りました。\n上品でシンプルな見た目は他のデザインではあまりないかなと思います。',
					},
					{ 
						id: 46, 
						title: '痛車デザイン(アイドルマスター シンデレラガールズ 久川姉妹)',
						img_01_src: require('../static/img/design/design-img_46-1.jpg'),
						img_02_src: require('../static/img/design/design-img_46-2.jpg'),
						desc: '元気な2人の可愛らしさも含んだメルヘンチックな感じをデザインに落とし込みました。\nカラーのバランスと柔らかい感じの表現に苦労しました。',
					},
					{ 
						id: 47, 
						title: '社員証(ブルーアーカイブ 連邦捜査部S.C.H.A.L.E)',
						img_01_src: require('../static/img/design/design-img_47-1.jpg'),
						desc: 'シャーレのカードを忠実に再現してデザインしました。\n展示中にも見せれるようにリアルな形で作りました。',
					},
					{ 
						id: 48, 
						title: '痛車デザイン(ブルーアーカイブ 空崎ヒナ)',
						img_01_src: require('../static/img/design/design-img_48-1.jpg'),
						img_02_src: require('../static/img/design/design-img_48-2.jpg'),
						desc: 'ローライダーのブラシアートを意識して作りました。\n白ボディに合うようにモノトーンのデザインに仕上げ、対照的なデザインで仕上げました。\nクリアステッカーで作りたかったのですが、塗装が持っていかれたので諦めました。',
					},
					{ 
						id: 49, 
						title: '痛車デザイン(ホロライブ 大神ミオ)',
						img_01_src: require('../static/img/design/design-img_49-1.jpg'),
						img_02_src: require('../static/img/design/design-img_49-2.jpg'),
						desc: '和紙に描かれた水面を模した背景に、桜の枝と花びらを散りばめたデザインにまとめました。\nボディ色に合わせて淡い色を用いました。',
					},
					{ 
						id: 50, 
						title: '痛車デザイン(ホロライブ 儒烏風亭らでん)',
						img_01_src: require('../static/img/design/design-img_50-1.jpg'),
						img_02_src: require('../static/img/design/design-img_50-2.jpg'),
						desc: '暗い背景に、赤の差し色を加えた大人なデザインに仕上げました。\n背景に家紋を入れて、名前もはみ出すようなインパクトのある仕上がりになりました。',
					},
					{ 
						id: 51, 
						title: 'スクエアステッカー(ホロライブ 大神ミオ)',
						img_01_src: require('../static/img/design/design-img_51-1.jpg'),
						img_02_src: require('../static/img/design/design-img_51-2.jpg'),
						desc: '痛車で作ったデザインをそのまま箱ステに落とし込みました。\n縁に線を入れ、スクエアでキャラクターを表に出したステッカーをつくりました。',
					},
					{ 
						id: 52, 
						title: 'スクエアステッカー(ホロライブ 儒烏風亭らでん)',
						img_01_src: require('../static/img/design/design-img_52-1.jpg'),
						img_02_src: require('../static/img/design/design-img_52-2.jpg'),
						desc: '痛車のデザインを箱ステに落とし込んだかっこいい仕上がりにしました。\n黒と赤の組み合わせにより、上品で和をイメージさせたデザインに仕上げました。',
					},
					{ 
						id: 53, 
						title: 'アパレル(道駅さんじよじ Tシャツ)',
						img_01_src: require('../static/img/design/design-img_53-1.jpg'),
						desc: '全面はシンプルに提供いただいたさんじよじの文字を入れました。\n背面はプラークを意識したアイデアをもらい、それに合わせでデザインを起こしました。',
					},
					{ 
						id: 54, 
						title: 'グッズ(VOGS エアフレッシュナー)',
						img_01_src: require('../static/img/design/design-img_54-1.jpg'),
						img_02_src: require('../static/img/design/design-img_54-2.jpg'),
						desc: 'グッズを作ることを目標に、一度作ってみました。\nシンプルに、中央にロゴの入った飾らないデザインです。',
					},
					{ 
						id: 55, 
						title: 'Webデザイン(KPF2023 スペックシート @Veleno_jaku)',
						img_01_src: require('../static/img/design/design-img_55-1.jpg'),
						desc: 'イベントに向けて、デジタルスペックシートを作成しました。\nニーズは、来場してきた見学者に向けてということなので、スマホファーストなデザインで、比較的短い期間での制作でしたので、PCサイトはSPを踏襲した形式にしました。\nhttps://ajaku.jp/kpf2023_veleno_gt86/',
					},
					{ 
						id: 56, 
						title: 'スクエアステッカー(赤見 かるび)',
						img_01_src: require('../static/img/design/design-img_56-1.jpg'),
						img_02_src: require('../static/img/design/design-img_56-2.jpg'),
						desc: 'キャラクターの可愛さと、その相反する思考や行動をデザインに落とし込みました。\nスト鯖GTA2見てたら、"お肉の組" っていう面白いネームだなっていのもあって背景のペイズリー柄はお肉を表現しています。',
					},
					{ 
						id: 57, 
						title: '印刷物(ニコニコ超会議2024 スペックシート @galhey_kyermm)',
						img_01_src: require('../static/img/design/design-img_57-1.jpg'),
						desc: 'めぐるのキャラクターと自身の車のスペック表を、うまく組み合わせるデザインにしました。\n色にはユニットメンバーのカラーを融合させてグラデーションを形成し、星をたくさん散りばめ、パッションさが溢れ出るオシャレなデザインに仕上げました。',
					},
					{ 
						id: 58, 
						title: '痛車デザイン(ぶいすぽっ！ 兎咲ミミ)',
						img_01_src: require('../static/img/design/design-img_58-1.jpg'),
						img_02_src: require('../static/img/design/design-img_58-2.jpg'),
						desc: 'みみたやの可愛いポップなイメージと配信にまつわる要素を多く取り入れ、ゲーム要素にドット文字を起用しました。\nモチーフカラーをグラデーションで融合しつつ、バックをふわふわした夢の中のような形取りをしました。',
					},
					{ 
						id: 59, 
						title: 'スクエアステッカー(ぶいすぽっ！ 兎咲ミミ)',
						img_01_src: require('../static/img/design/design-img_59-1.jpg'),
						img_02_src: require('../static/img/design/design-img_59-2.jpg'),
						desc: '痛車のデザインを箱ステに落とし込んだキュートな仕上がりにしました。',
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
					{ hid: 'og:url', property: 'og:url', content: 'https://ajaku.jp/design/' },
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

	#design .flex-area.grid .section-contents {
		width: 280px;
		height: 280px;
		width: calc(100% / 3 - 10px);
    height: auto;
    aspect-ratio: 1;
		   object-fit: cover;
		-o-object-fit: cover;
		margin-bottom: 20px;
		overflow: hidden;
		cursor: pointer;
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

		#design .flex-area.grid .section-contents {
			width: calc(100% / 2 - 5px);
			height: 180px;
			height: auto;
			aspect-ratio: 1 / 1;
			margin-bottom: 10px;
		}

	}

</style>
