<template>
    <el-button style="margin-top: 10px" @click="loginClick">
        登录成功
    </el-button>
    storeCount :{{ storeCount }}
</template>

<script>
import {getCurrentInstance} from 'vue';
import {useStore} from "vuex";

export default {
    name: "Login",
    setup() {
        const store = useStore();

        const storeCount = store.state;

        const instance = getCurrentInstance();

        instance.appContext.config.globalProperties.onGlobalStateChange((newValue, oldValue) => {
            console.log("newValue ... oldValue ... ", newValue, oldValue)
        })

        function loginClick() {
            // 修改主应用的state
            // store.dispatch("count/increment");
            instance.appContext.config.globalProperties.setGlobalState({
                count: Math.random()
            })
        }
        return {
            storeCount,
            loginClick
        }
    }
}
</script>

<style scoped>

</style>
