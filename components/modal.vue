<template>

  <transition name="modal" appear>
		<div class="modal-overlay" @click.self="$emit('close')">
			<div class="modal-window">
				<div class="modal-content">
					<h4 class="weight300">{{ val.title }}</h4>
					<img :src="val.img_src">
					<div class="textBox weight300">
						<p>{{ val.desc }}</p>
						<div class="close" @click="$emit('close')"></div>
				</div>
				</div>
			</div>
		</div>
	</transition>

</template>

<script>

  export default {
    name: 'Modal',
    props: ['val'],

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
		background: rgba(0, 0, 0, 0.3);
	}

	.modal-window {
	  width: 70%;
	  max-width: 1200px;
	  max-height: 70%;
	  overflow: scroll;
	  background-color: var(--back-color);
	  position: relative;
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

</style>
