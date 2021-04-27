import {createApp} from 'vue'
import App from './App.vue'
import microApps from './mirco-app'
import router from './router';
import store from './store';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import {
    registerMicroApps,
    start,
    setDefaultMountApp,
    initGlobalState,
    runAfterFirstMounted
} from "qiankun";

let instance = createApp(App);
instance.use(router);
instance.use(store);
instance.use(ElementPlus)
instance.mount("#main-app");

/**
 * Step1 初始化应用 loader（可选）
 */
// function loader (loading) {
//     if (instance && instance.$children) {
//         // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
//         instance.$children[0].isLoading = loading
//     }
// }

/**
 * Step2 注册子应用
 */
// 子应用配置入口
const apps = microApps.map(item => {
    return {
        ...item,
        props: {
            store: store
        }
    }
})

registerMicroApps([
    ...apps
], {
    beforeLoad: app => {
        console.log('before load app.name====>>>>>', app.name)
    },
    beforeMount: [
        app => {
            // console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
        }
    ],
    afterMount: [
        app => {
            // console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
        }
    ],
    afterUnmount: [
        app => {
            // console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
        }
    ]
})

// 初始化 state
const { onGlobalStateChange, setGlobalState } = initGlobalState(store.state);

onGlobalStateChange((value, prev) => {
    console.log('[Main] [onGlobalStateChange], new:', value, ", old:", prev)
});
instance.config.globalProperties.setGlobalState = setGlobalState;
instance.config.globalProperties.onGlobalStateChange = onGlobalStateChange;
/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp('/systemApp');

/**
 * Step4 启动应用
 */
start()

runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
});
