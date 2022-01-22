<template>

	<div class="main-contents">
		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<section id="photo" class="contents-area">
						<div class="secWrap">
							<div class="flex-area grid">
								<div class="section-contets" v-for="item in reverseItems">
									<img @click="openModal(item)" :src="item.img_01_src" alt="photo_item">
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
					{	id: 1,	img_01_src: require('../static/img/photo/photo-img_01.jpg'),	},
					{	id: 2,	img_01_src: require('../static/img/photo/photo-img_02.jpg'),	},
					{	id: 3,	img_01_src: require('../static/img/photo/photo-img_03.jpg'),	},
					{	id: 4,	img_01_src: require('../static/img/photo/photo-img_04.jpg'),	},
					{	id: 5,	img_01_src: require('../static/img/photo/photo-img_05.jpg'),	},
					{	id: 6,	img_01_src: require('../static/img/photo/photo-img_06.jpg'),	},
					{	id: 7,	img_01_src: require('../static/img/photo/photo-img_07.jpg'),	},
					{	id: 8,	img_01_src: require('../static/img/photo/photo-img_08.jpg'),	},
					{	id: 9,	img_01_src: require('../static/img/photo/photo-img_09.jpg'),	},
					{	id: 10,	img_01_src: require('../static/img/photo/photo-img_10.jpg'),	},
					{	id: 11,	img_01_src: require('../static/img/photo/photo-img_11.jpg'),	},
					{	id: 12,	img_01_src: require('../static/img/photo/photo-img_12.jpg'),	},
					{	id: 13,	img_01_src: require('../static/img/photo/photo-img_13.jpg'),	},
					{	id: 14,	img_01_src: require('../static/img/photo/photo-img_14.jpg'),	},
					{	id: 15,	img_01_src: require('../static/img/photo/photo-img_15.jpg'),	},
					{	id: 16,	img_01_src: require('../static/img/photo/photo-img_16.jpg'),	},
					{	id: 17,	img_01_src: require('../static/img/photo/photo-img_17.jpg'),	},
					{	id: 18,	img_01_src: require('../static/img/photo/photo-img_18.jpg'),	},
					{	id: 19,	img_01_src: require('../static/img/photo/photo-img_19.jpg'),	},
					{	id: 20,	img_01_src: require('../static/img/photo/photo-img_20.jpg'),	},

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

	#subpage section {
		width: 100%;
	}

	.flex-area.grid {
		flex-wrap: wrap;
		justify-content: space-between;
		height: auto;
		margin-bottom: 20px;
	}

	#photo .flex-area.grid .section-contets {
		width: 230px;
		height: 230px;
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

		section#photo {
			width: 90%;
		}

		.flex-area.grid {
			flex-direction: inherit;
			margin-bottom: 20px;
		}

		#photo .flex-area.grid .section-contets {
			width: calc(100% / 2 - 5px);
			height: 180px;
			margin-bottom: 10px;
		}

	}

</style>
