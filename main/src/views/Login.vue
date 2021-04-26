<template>
    <el-button style="margin-top: 10px" @click="loginClick">
        登录成功
    </el-button>
    storeCount :{{ storeCount }}
</template>

<script>
import {useStore} from "vuex";

export default {
    name: "Login",
    setup() {
        const store = useStore();

        const storeCount = store.state;
        console.log(storeCount)

        function loginClick() {
            store.dispatch("count/increment");
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
