// pages/index/index.js

Page({
    data: {
        sites: [
            { name: '万方:是国内第一家以信息服务为核心的股份制高新技术企业，科技部论文居多，核心论文收录多，质量高', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEI.AlvYhGEjNhNz5IZcxI9CKUQ9E13iujcBapVeha4knsf.Kgii2wlb9m7AuniLrlaJs7H8HjUXFNQSMPCw7Y5U!/mnull&bo=tQGCAAAAAAADBxQ!&rf=photolist&t=5', url: 'www.wanfangdata.com.cn',pagePath:'../ligong/01/01' },
           
   { name: '维普: 几乎涵盖所有相关领域中文文献', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEKvPYauPAHqGTSP9gZwcc7ro*UWYNgeTndc9fK*gQJKE9Rnr0XIAmD..HJHWbL27ZTOgA67tqQ0uJx306bK0vbM!/mnull&bo=AwSRAAAAAAADB7Q!&rf=photolist&t=5', url: 'https://qikan.cqvip.com',pagePath:'../ligong/02/02' },
   
  { name: '中国科技学术文章在线: 国内唯一免费全文期刊库，由中华人民共和国教育部主管，中国科技论文在线发起，期刊上网工程历时多年，得到广大学术期刊的支持，目前已收录近千家科技期刊、逾130万篇各领域科技论文全文，全部提供给广大科研工作者及爱好者进行免费下载。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEAxlfCuZvEpA8rUyTsLju79dm1J0qaVq2wd1q3GhozSZlkHtdoxfgGWh.2nSeBnVekIeKmNAWcLvqwfgLKLKwiQ!/mnull&bo=VwJ*AAAAAAADBwg!&rf=photolist&t=5', url: 'http://www.paper.edu.cn/',pagePath:'../ligong/03/03' },
  
   { name: 'CiteSeerX：是一个科研文献数字图书馆和一个搜索引擎，主要关注信息科学和计算机科学领域的学术文献。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEAxlfCuZvEpA8rUyTsLju7*wXXdiua4GCcAiNbO3AsgQHTUAxV9ubXFJ*dN5acXjb1IqzY6QftfhBcpwhRmGNlY!/mnull&bo=GAKnAAAAAAADB58!&rf=photolist&t=5', url: 'https://citeseerx.ist.psu.edu/',pagePath:'../ligong/04/04' },
  
   { name: 'MDPI/曼迪匹艾 几乎涵盖所有相关领域覆盖生物，化学，医药，机械等方面。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEABo4NA.*mDfofnD0W53Xvn3.mMzJwzHpP3qBBP4yWlTyMewD55B47r6rK9AwOqEAe8FXIRQA9L2uBHXAPivmoY!/mnull&bo=8wCgAAAAAAADB3E!&rf=photolist&t=5',pagePath:'../ligong/05/05' },
  
   { name: 'IEEE Xplore 是一个美国的电子技术与信息科学工程师的协会，是世界上最大的非营利性专业技术学会。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEO2jGhMpjGmQzVkEHtmR9QOR55LnkgqEXNWc4wkyPzdkgI4zrwN1lS2j60F0TGm7uQ0.QshxsDU3hO*SAF2lt.E!/mnull&bo=7gFzAAAAAAADB74!&rf=photolist&t=5', url: 'https://ieeexplore.ieee.org/Xplore/guesthome.jsp ' ,pagePath:'../ligong/06/06'},
            // 理工网站条目
        ]
    },
  
    copyUrl: function (event) {
        const url = event.currentTarget.dataset.url;
        wx.setClipboardData({
            data: url,
            success: function () {
                wx.showToast({
                    title: '复制成功',
                    icon: 'success',
                    duration: 1500
                });
            }
        });
    }
  });