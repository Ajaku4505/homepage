<template>

<div class="spinner-wrapper" v-if="loading">
	<div class="cube-grid">
	  <div class="cube cube1"></div>
	  <div class="cube cube2"></div>
	  <div class="cube cube3"></div>
	  <div class="cube cube4"></div>
	  <div class="cube cube5"></div>
	  <div class="cube cube6"></div>
	  <div class="cube cube7"></div>
	  <div class="cube cube8"></div>
	  <div class="cube cube9"></div>
	</div>
</div>

</template>

<script>

  export default {

    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }

</script>

<style>

.cube-grid {
  width: 100px;
  height: 100px;
  top: 45%;
  right: 0;
  left: 0;
  position: absolute;
  margin: auto;
}

.cube-grid .cube {
  width: 33%;
  height: 33%;
  background: #FFF;
  float: left;
  -webkit-animation: cubeGridScaleDelay 1.3s infinite ease-in-out;
          animation: cubeGridScaleDelay 1.3s infinite ease-in-out; 
}
.cube-grid .cube1 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
.cube-grid .cube2 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
.cube-grid .cube3 {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s; }
.cube-grid .cube4 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.cube-grid .cube5 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
.cube-grid .cube6 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
.cube-grid .cube7 {
  -webkit-animation-delay: 0s;
          animation-delay: 0s; }
.cube-grid .cube8 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.cube-grid .cube9 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }

@-webkit-keyframes cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); 
  }
}

@keyframes cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
  } 
}

.spinner-wrapper {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #3772FF;
z-index: 999999;
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.1s
}
.page-enter, .page-leave-active {
  opacity: 0
}

</style>
