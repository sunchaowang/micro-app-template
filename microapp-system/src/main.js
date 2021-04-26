import "./public-path";
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import routes from './router';
import store from './store';
import App from './App.vue'


let router = null;
let instance = null;
let history = null;

function render(props = {}) {
  const { container } = props;
  const _store = props.store;
  router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(Object.assign(_store, store));
  instance.mount("#app");
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}

function storeTest(props) {
  props.onGlobalStateChange &&
  props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
  );
  props.setGlobalState &&
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

export async function mount(props) {
  storeTest(props);
  render(props);
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
}
