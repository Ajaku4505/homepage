<template>

  <transition name="modal" appear>
		<div class="modal-overlay" @click.self="$emit('close')">
			<div class="modal-window">
				<div class="modal-content">
					<img :src="val.img_src">
					<p>説明:{{ val.desc }}</p>
					<p>作業範囲:{{ val.range }}</p>
					<p>使用技術:{{ val.lang }}</p>
					<button @click="$emit('close')">閉じる</button>
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
		height: 70%;
		width: 70%;
		overflow: hidden;
		background-color: aquamarine;
	}
	.modal-content {
		height: 100%;
		padding: 30px;
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

</style>
