module.exports = {
  "title": "如何做一个前端开发",
  "description": "flowerdog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    // vssueConfig: {
    //   platform: 'github',
    //   owner: 'iamflowerdog',
    //   repo: 'my-blog',
    //   clientId: '666693621f4b89b93f21',
    //   clientSecret: '698904fe681a09f67be3ee5df713aae9b45506f9',
    // },
    valineConfig: {
      appId: 'r8TR2qfNjINrljiIcvNuKA17-gzGzoHsz',// your appId
      appKey: 'ObCuKoMjcIS0qbk2c8cOtX8j', // your appKey
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/iamflowerdog",
            "icon": "reco-github"
          }
        ]
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "kun's blog",
        "desc": "聚沙成塔",
        "email": "yk_job@163.com",
        "link": "https://blog.fengxiuge.top/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "flowerdog",
    "authorAvatar": "/avatar2.png",
    "record": "京ICP备2021019798号",
    "recordLink": "https://beian.miit.gov.cn",
    "cyberSecurityRecord": '京公网安备11010502045123',
    "cyberSecurityLink": 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502045123',
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}