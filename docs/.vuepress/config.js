// const openApiJson = require("./utils/openApi.json");
// const openApi = JSON.parse(JSON.stringify(openApiJson));
const { openApiNavItems, sidebar } = require("./utils/getSidebar");
module.exports = {
    title: '致远开放平台文档网站',
    description: '致远开放平台文档网站',
    themeConfig: {
        search: true, //搜索
        searchMaxSuggestions: 10,
        nav: [{
                text: '回到首页',
                link: '/'
            },
            {
                text: '快速开始',
                link: '/quickStart/'
            },
            {
                text: '平台技术',
                link: '/platformTechnology/'
            },
            {
                text: '应用技术',
                link: '/appTechnology/'
            },
            {
                text: 'OpenApi',
                link: '/openApi/',
                items: openApiNavItems
            },
            {
                text: '开发案例',
                link: '/developmentCase/'
            },
        ],
        sidebar: sidebar,
        collapsable: false,
        sidebarDepth: 0
    }
}