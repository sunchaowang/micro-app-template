import {defineConfig} from "vite"
import MicroAppConfig from "../common/config/micro-app-config.js";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue()
    ],
    server: {
        port: 8002
    }
})