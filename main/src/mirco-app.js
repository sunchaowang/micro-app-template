import MicroAppConfig from "../../common/config/micro-app-config";

const microApps = [];
Object.values(MicroAppConfig).forEach(app => {
    microApps.push({
        name: app.name,
        entry: `//localhost:${app.port}`,
        activeRule: `/#/${app.name}`
    })
})
console.log("microApps .. ", microApps);

const apps = microApps.map(ele => {
    return {
        ...ele,
        container: "#micro-app-container", // 子应用挂载的div容器,
    }
})
export default apps;
