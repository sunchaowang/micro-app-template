import MicroAppConfig from "../../common/config/micro-app-config";

const microApps = [];
Object.values(MicroAppConfig).forEach(app => {
    microApps.push({
        name: app.name,
        entry: `//localhost:${app.port}`,
        activeRule: `/${app.name}`
    })
})
console.log("microApps .. ", microApps);

const app = microApps.map(ele => {
    return {
        ...ele,
        container: "#micro-app-container", // 子应用挂载的div容器,
        props: {
            routerBase: ele.activeRule // 子应用路由
        }
    }
})
export default app;