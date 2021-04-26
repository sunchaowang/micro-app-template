<template>
    Main Container
    <div id="app">
        <div class="menu-wrapper">
            <ul class="sub-apps">
                <li v-for="item in microApps" :key="item.name">
                    <button @click="goto(item)">
                        {{ item.name }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import microApps from '../mirco-app';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

export default {
    name: "Home.vue",
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
.menu-wrapper {
    width: 100%;
    height: 100px;
}
.sub-apps {

}
.sub-apps li {
    display: inline-block;
    margin: 20px;
}
.active{
    color: #42b983;
    text-decoration: underline;
}
</style>
