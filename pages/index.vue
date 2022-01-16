<template>
	
  <div>

	<!-- Page Header -->
	<header class="masthead">
	  <div class="container">
		<div class="row">
		  <div class="col-lg-8 col-md-10 mx-auto">
			<div class="site-heading">
			  <div class="catch-copy weight100">
				<p>何かを作り上げたのであれば</p>
				<p>それは誰もに知られるように</p>
				<p class="space"></p>
				<p>記憶に残してほしいもの</p>
			  </div>
			  <div class="mainvisual">
				<img src="img/index/mv_01.jpg" alt="mainvisual01">
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
			  <div class="section-contets">
				<div class="textBox weight300">
				  <h2 class="weight500">意味のないことかもしれない<br>見た人の気持ちが少しでも変われば－</h2>
				  <p>何のためにデザインしたりカメラを回してるのかっていうと</p>
				  <p>やっぱ言い表せないんですけど楽しいんです。</p>
				  <p class="space"></p>
				  <p>パチンコで大当たりしたり、好きな本を読んだり、</p>
				  <p>スポーツで汗を流すのと同じような楽しさだと僕は思います。</p>
				  <p class="space"></p>
				  <p>それと後世に自分が何してどんな人だったかくらいは</p>
				  <p>残るようにしていたいなってのも本音です笑</p>
				</div>
				<div class="imgBox"><img src="img/index/about-img.jpg" alt="about-img"></div>
			  </div>
			</div>
		  </section>

		  <section id="mycar" class="contents-area sec02">
			<div class="secWrap">
			  <div class="section-text">
				<h1 class="section-title weight700">MyCar</h1>
			  </div>
			  <div class="section-contets">
				<div class="imgBox"><img src="img/index/mycar-img.jpg" alt="mycar-img"></div>
				<div class="textBox weight300">
				  <p class="meta">2021 / 09 / 21</p>
				  <p>Honda AccordWagon 1994</p>
				  <p>Charactor : YuzukiRoa (NIJISANJI)</p>
				</div>
				<div class="link">
				  <router-link class="nav-link" to="/mycar/accord">
					<div class="more button">more +</div>
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
			  <div class="section-contets">
				<div class="imgBox">
				  <img src="img/index/design-img_01.jpg" alt="design-01">
				  <img src="img/index/design-img_02.jpg" alt="design-02">
				</div>
				<div class="textBox weight300">
				  <p>箱ステから痛車のデザインなんでも楽しそうなことはやってます</p>
				  <p>強いていえば、アパレルデザインまだやったことないですね...</p>
				  <p class="space"></p>
				  <p>一番デザインでこだわってるのはファーストインパクトと色の使い方です</p>
				</div>
				<div class="link">
				  <router-link class="nav-link" to="design">
					<div class="more button">more +</div>
				  </router-link>
				</div>
			  </div>
			</div>
		  </section>

		  <section id="photo" class="contents-area sec04">
			<div class="secWrap">
			  <div class="section-text">
				<h1 class="section-title weight700">Photo</h1><span class="section-subtitle weight700">by<img src="img/index/karasuzu.png" alt="カラスズ印刷"></span>
			  </div>
			  <div class="section-contets">
				<div class="imgBox">
				  <img src="img/index/photo-img_01.jpg" alt="photo-01">
				  <img src="img/index/photo-img_02.jpg" alt="photo-02">
				  <img src="img/index/photo-img_03.jpg" alt="photo-03">
				  <img src="img/index/photo-img_04.jpg" alt="photo-04">
				  <img src="img/index/photo-img_05.jpg" alt="photo-05">
				  <img src="img/index/photo-img_06.jpg" alt="photo-06">
				</div>
				<div class="textBox weight300">
				  <p>カメラはフルサイズのNikon D750とマイクロフォーサーズのOLYMPUS E-M10 Markiiを</p>
				  <p>愛用しています。なんで写真が好きなのかと聞かれると美しいからとしか言えません笑</p>
				</div>
				<div class="link">
				  <router-link class="nav-link" to="photo">
					<div class="more button">more +</div>
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

	export default {
    	layout: "toppage"
	}

</script>

<style>

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

	.container {
		max-width: 980px;
		margin: auto;
	}

	section {
		position: relative;
		margin: 200px 0;
	}

	.section-text {
		margin-bottom: 100px;
	}

	.section-text h1.section-title {
		display: inline-block;
		position: relative;
		font-size: 6rem;
		font-family: 'Ropa Sans', sans-serif;
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

	.section-contets .textBox > h2, 
	.section-contets .textBox > p {
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
		padding: 10px 50px;
		border: solid 1px var(--sub-color);
		display: inline-block;
		font-weight: 300;
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

	/* about */

	#about h1.section-title {
		left: 200px;
	}
	#about h1.section-title::after {
		left: 260px;
	}

	#about .section-contets {
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

	#mycar .section-contets {
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
	}

	#photo .imgBox {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	#photo .imgBox img {
		width: calc(100% / 3 - 10px);
		height: calc(100% / 3 - 10px);
		object-fit: cover;
		margin-bottom: 20px;
	}

</style>