<template>

    <div class="main-contents">
      <!-- Main Content -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <section id="accord" class="contents-area">
              <div class="secWrap">
                <div class="section-contets">
                  <div class="imgBox"><img src="img/index/about-img.jpg" alt="about-img"></div>
                  <div class="textBox weight300">
                    <p class="meta">2021 / 09 / 21</p>
                    <p>Honda AccordWagon 1994</p>
                    <p>Charactor : YuzukiRoa (NIJISANJI)</p>
                    <p> </p>
                    <p>今回のデザインは</p>
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
    	layout: "subpage"
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

.section-contets .textBox>h2,
.section-contets .textBox>p {
  line-height: 1.75;
}

.textBox .meta {
  text-align: right;
}

.link {
  text-align: center;
  margin-top: 30px;
}

.more.button {
  padding: 10px 50px;
  border: solid 1px var(--sub-color);
  display: inline-block;
  font-weight: 300;
}

.more.button:hover {
  padding: 10px 50px;
  border: solid 1px var(--main-color);
  background: var(--main-color);
  color: #FFF;
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
