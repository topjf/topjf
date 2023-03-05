import {navbar} from "vuepress-theme-hope";

export const allNavbar = navbar([
    "/",
    "/home",
    {text: "面试宝典", icon: "overflow", link: "/all/all"},
    {
        text: "个人中心",
        icon: "anonymous",
        children: [
            {text: "文章", icon: "note", link: "/article"},
            {text: "分类", icon: "categoryselected", link: "/category"},
            {text: "标签", icon: "list", link: "/tag"},
            // {text: "加密文章", icon: "command", link: "/encrypted"},
            {text: "收藏文章", icon: "like", link: "/star"},
            {text: "时间线", icon: "time", link: "/timeline"},
        ],
    },
    {
        text: "网站相关",
        icon: "info",
        children: [
            {text: "关于本站", icon: "people", link: "/about-this"},
            {text: "网站历史", icon: "time", link: "/history"},
            {text: "VuePress Theme Hope 文档", icon: "creative", link: "https://theme-hope.vuejs.press/zh/"},
        ],
    },
    {text: "Markdown测试", icon: "overflow", link: "/test"},
    {text: "演示", icon: "like", link: "/live"},
]);
