<template>
    <button @click="goto('/systemApp')">
        Home
    </button>
    <button @click="goto('/systemApp/about')">
        About
    </button>
    <h2>parentCount : {{parentCount}}</h2>
    <button @click="setParentCount">
        修改parentCount
    </button>
</template>

<script>
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
import {ref, getCurrentInstance} from 'vue';

export default {
    name: "Home",
    setup() {
        const router = useRouter();
        const store = useStore();

        const parentCount = store.state.count;

        const instance = getCurrentInstance();

        console.log(store.state.count)
        function goto(path) {
            router.push({
                path
            })
        }

        function setParentCount() {
            // 修改主应用的 state
            // store.dispatch("count/increment");

            // 调用qiankun的state change 事件
            instance.appContext.config.globalProperties.setGlobalState({
                count: Math.random()
            })
        }
        return {
            parentCount,
            setParentCount,
            goto
        }
    }
}
</script>

<style scoped>

</style>
