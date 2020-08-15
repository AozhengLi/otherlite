
module.exports = {
    theme: 'reco',
    title: 'otherlite',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/logo.ico', type: "image/x-icon" }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],

    themeConfig: {
        modePicker: false, // 不显示模式调节按钮
        searchMaxSuggestions: 5, // 最大搜索显示数量
        sidebar: 'auto',
        logo: '/logo.png',

        vssueConfig: {
            platform: 'github',
            owner: 'otherlite',
            repo: 'otherlite',
            clientId: '5454a76bd75325813cbb',
            clientSecret: '9745c7185477e4732a57475394df7ace62c3cc41',
        },
        blogConfig: {
            category: {
                location: 1,
                text: '分类'
            },
            tag: {
                location: 2,
                text: '标签'
            }
        },
        nav: [
            { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
            { text: 'GitHub', link: 'https://github.com/otherlite', icon: 'reco-github' },
        ]
    }
}