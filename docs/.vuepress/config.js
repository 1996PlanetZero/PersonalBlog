module.exports = {
    base:"/PersonalBlog/",
    title: "Zlp Space",
    description: "Remember all the sparkling points in your life",
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        sidebar: [
            {
                title: 'Tech Sharing',
                children: ['/Tech Sharing/玩转WSL' ],
                initialOpenGroupIndex: 1 // 可选的, 默认值是 0
            }
        ]
    },
};
