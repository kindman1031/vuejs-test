<template>
	<div id="app">
		<app-nav></app-nav>
		<div id="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
  import AppNav from './components/Nav';

	export default {
    name: 'app',
		components: {
			AppNav,
		},
	}
</script>

<style lang="scss" scoped>
  #app {
		display: flex;
		#main {
			width: 100%;
		}
  }
</style>


