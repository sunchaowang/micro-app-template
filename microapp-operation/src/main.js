import "./public-path";
import { createApp } from 'vue';
import App from './App.vue'


let instance = null;

function render(props = {}) {
	instance = createApp(App);
	console.log(props);
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
	props.onGlobalStateChange(
		(value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
		true,
	);
	instance.config.globalProperties.onGlobalStateChange = props.onGlobalStateChange;
	instance.config.globalProperties.setGlobalState = props.setGlobalState;
}

export async function unmount() {
	instance.unmount();
	instance._container.innerHTML = '';
	instance = null;
}
