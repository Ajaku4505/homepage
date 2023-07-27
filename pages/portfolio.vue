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
						title: '#',
						img_01_src: 'https://placehold.jp/600x400.png',
						url: 'https://placehold.jp/600x400.png',
					},
					{ 
						id: 2, 
						title: '#',
						img_01_src: 'https://placehold.jp/600x400.png',
						url: 'https://placehold.jp/600x400.png',
					},
					{ 
						id: 3, 
						title: '#',
						img_01_src: 'https://placehold.jp/600x400.png',
						url: 'https://placehold.jp/600x400.png',
					},
					{ 
						id: 4, 
						title: '#',
						img_01_src: 'https://placehold.jp/600x400.png',
						url: 'https://placehold.jp/600x400.png',
					},
					{ 
						id: 5, 
						title: '#',
						img_01_src: 'https://placehold.jp/400x200.png',
						url: 'https://placehold.jp/600x400.png',
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
					{ hid: 'twitter:site', name: 'twitter:site', content: '@Ajaku4505' }
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
		transition: all .4s;
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
		max-width: 980px;
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
		height: 205px;
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
			margin-bottom: 10px;
		}

	}

</style>
