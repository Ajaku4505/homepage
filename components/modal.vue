<template>

	<transition name="modal" appear>
		<div class="modal-overlay" @click.self="$emit('close')">
			<div id="modal" class="modal-window">
				<div class="modal-content">
					<h4 v-if="val.title" class="weight300">{{ val.title }}</h4>
					<slick ref="slick" class="slick-outer" :options="slick_imgOptions" v-if="val.img_02_src">
						<img :src="val.img_01_src" loading="lazy">
						<img :src="val.img_02_src" loading="lazy">
					</slick>
					<img v-else :src="val.img_01_src" loading="lazy">
					<div v-if="val.desc" class="textBox weight300">
						<p>{{ val.desc }}</p>
					</div>
					<div v-if="val.url" class="textBox weight300">
						<a :href='val.url' target="_blank">{{ val.url }}</a>
					</div>
						<div class="close" @click="$emit('close')"></div>
				</div>
			</div>
		</div>
	</transition>

</template>

<script>

	import Slick from 'vue-slick'
	import '../node_modules/slick-carousel/slick/slick.css'

	export default {

		name: 'Modal',
		props: ['val'],

		components: { Slick },

		data(){
			return {
					slick_imgOptions:{
					arrows: false,
					dots: false,
					autoplay: true,
					infinity: true,
					autoplaySpeed: 3000,
					fade: true,
					speed: 600,
					swipe: false,
					lazyLoad: 'progressive',
					pauseOnFocus: false,
							pauseOnHover: false
				}
			}
		},

	}

</script>

<style>

	.modal-overlay {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur( 5px );
		-webkit-backdrop-filter: blur( 5px );
	}

	.modal-window {
		width: 70%;
		max-width: 1200px;
		max-height: 90%;
		overflow: scroll;
		background-color: var(--back-color);
		position: relative;
		box-shadow: 0 0px 20px 0 rgb(47 72 88 / 20%);
	}

	#photo .modal-window {
		max-height: none;
	}

	.modal-content {
		padding: 40px;
	}

	.modal-enter-active,
	.modal-leave-active {
		transition: opacity 0.4s;
	}

	.modal-enter-active .modal-window,
	.modal-leave-active .modal-window {
		transition: opacity 0.4s, transform 0.4s;
	}

	.modal-leave-active {
		transition: opacity 0.6s ease 0.4s;
	}

	.modal-enter,
	.modal-leave-to {
		opacity: 0;
	}

	.modal-enter .modal-window,
	.modal-leave-to .modal-window {
		opacity: 0;
		transform: translateY(-20px);
	}

	.close{
		display: block;
		width: 30px;/*枠の大きさ*/
		height: 30px;/*枠の大きさ*/
		position: absolute;
		top: 10px;
		right: 5px;
		cursor: pointer;
	}

	.close::before, 
	.close::after{
		content: "";
		display: block;
		width: 100%;/*バツ線の長さ*/
		height: 2px;/*バツ線の太さ*/
		background: var(--sub-color);
		transform: rotate(45deg);
		transform-origin:0% 50%;
		position: absolute;
		top: calc(14% - 5px);
		left: 14%;
	}

	.close::after{
		transform: rotate(-45deg);
		transform-origin:100% 50%;
		left: auto;
		right: 14%;
	}

	/* add css */

	.modal-content h4 {
		margin: 0;
		margin-bottom: 10px;
	}

	.modal-content .textBox {
		white-space: pre-line;
		line-height: 1.5;
		margin-top: 10px;
		font-size: .8rem;
	}

	.flex-area.grid  #modal img:hover {
		-webkit-transform: scale(1) translate3d(0, 0, 0);
						transform: scale(1) translate3d(0, 0, 0);
	}

	@media screen and (max-width:768px) {

		.modal-window {
			width: 90%;
		}

		.modal-content {
			padding: 20px;
		}

		.modal-content h4 {
			font-size: .8rem;
		}

		.modal-content .textBox {
			font-size: .6rem;
		}

		.close {
			width: 15px;
			height: 15px;
		}

		.close::before, 
		.close::after {
			height: 1px;
		}

	}


</style>
