<template>
    <el-menu class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item index="/Login">
            Login
        </el-menu-item>
        <el-menu-item v-for="item in microApps" :key="item.name" :index="`/${item.name}`">
            {{item.name}}
        </el-menu-item>
    </el-menu>
	<div>
        <router-view />
        <div id="micro-app-container"></div>
    </div>
</template>

<script>
import microApps from './mirco-app';
import {useRouter} from "vue-router";
import {ref} from "vue";
export default {
	name: 'App',
    setup() {
        const router = useRouter();
        const current = ref("");

        function goto(app) {
            router.push({
                path: `/${app.name}`
            })
        }
        return {
            current,
            goto
        }
    },
    data() {
        return {
            microApps,
        }
    },
}
</script>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
