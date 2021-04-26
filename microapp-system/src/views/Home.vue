<template>
    <button @click="goto('/systemApp')">
        Home
    </button>
    <button @click="goto('/systemApp/about')">
        About
    </button>

</template>

<script>
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
import {ref} from 'vue';
export default {
    name: "Home",
    setup() {
        const router = useRouter();
        const store = useStore();

        console.log(store.state.count)
        function goto(path) {
            router.push({
                path
            })
        }

        return {
            goto
        }
    }
}
</script>

<style scoped>

</style>
