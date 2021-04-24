<template>
	<div id="app">
		<HelloWorld msg="mainApp"/>
		<ul class="sub-apps">
			<li v-for="item in microApps" :class="{active: item.activeRule === current}" :key="item.name" @click="goto(item)">{{ item.name }}</li>
		</ul>
		<div id="micro-app-container"></div>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import microApps from './mirco-app'

export default {
	name: 'App',
	components: {
		HelloWorld
	},
	data() {
		return {
			microApps,
			current: '/main/'
		}
	},
	methods: {
		goto (item) {
			history.pushState(null, item.activeRule, item.activeRule)
			// this.current = item.name
		},
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.active{
	color: #42b983;
	text-decoration: underline;
}
</style>
