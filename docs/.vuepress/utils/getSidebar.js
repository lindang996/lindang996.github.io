const openApiJson = require("./openApi.json");
let openApi = JSON.parse(JSON.stringify(openApiJson));
const sidebarJson = require("./defaultSidebar.json");
const sidebar = JSON.parse(JSON.stringify(sidebarJson))
let newSidebar = sidebar;

openApi.forEach(it => {
    // newSidebar[it.path] = [it];
    it.children.forEach(item => {
        newSidebar[item.path] = [item]
    })
});
const openApiNavItems = openApi.map(item => {
    const navItem = {
        text: item.title,
        link: item.path,
        items: item.children.map(it => {
            return {
                text: it.title,
                link: it.path
            }
        })
    };
    return navItem
});
module.exports = {
    openApiNavItems: openApiNavItems,
    sidebar: newSidebar
};