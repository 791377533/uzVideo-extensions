// ignore
//@name:zkk
//@version:1
//@webSite:http://www.zkk79.com
//@remark:
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 1

// 网站主页
const webSite = 'http://www.zkk79.com'
// 网站搜索
// http://www.zkk79.com/search/-------------.html?wd=%E5%AE%8C%E7%BE%8E%E4%B8%96%E7%95%8C&submit=
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/search/@{searchWord}-------------.html'
// 当前网站任意视频详情页
// http://www.zkk79.com/dongman/6744.html
const videoDetailPage = '@{webSite}/video/6744.html'
// 当前网站任意视频播放页
// http://www.zkk79.com/dongmanplay/6744-1-1.html
const videoPlayPage = '@{webSite}/play/6744-1-1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '国产动漫',
        // http://www.zkk79.com/type/guoman.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/type/guoman@{page}.html',
    },
    {
        name: '日本动漫',
        // http://www.zkk79.com/type/riman.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/type/riman@{page}.html',
    },
    {
        name: '动漫电影',
        // http://www.zkk79.com/type/dmdianying.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/type/dmdianying@{page}.html',
    },
    {
        name: '欧美动漫',
        // http://www.zkk79.com/type/oman.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: '@{webSite}/type/oman@{page}.html',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#
