// pages/index/index.js

Page({
    data: {
        sites: [
            { name: '万方:是国内第一家以信息服务为核心的股份制高新技术企业，科技部论文居多，核心论文收录多，质量高', iconUrl: '/images/101.png', url: 'www.wanfangdata.com.cn' },
           
   { name: '维普: 几乎涵盖所有相关领域中文文献', iconUrl: '/images/102.png', url: 'https://qikan.cqvip.com' },
   
  { name: '中国科技学术文章在线: 国内唯一免费全文期刊库，由中华人民共和国教育部主管，中国科技论文在线发起，期刊上网工程历时多年，得到广大学术期刊的支持，目前已收录近千家科技期刊、逾130万篇各领域科技论文全文，全部提供给广大科研工作者及爱好者进行免费下载。', iconUrl: '/images/103.png', url: 'http://www.paper.edu.cn/' },
  
   { name: 'CiteSeerX：是一个科研文献数字图书馆和一个搜索引擎，主要关注信息科学和计算机科学领域的学术文献。', iconUrl: '/images/104.png', url: 'http://citeseerx.ist.psu.edu/index' },
  
   { name: 'MDPI/曼迪匹艾 几乎涵盖所有相关领域覆盖生物，化学，医药，机械等方面。', iconUrl: '/images/105.png', url: ' https://www.mdpi.com' },
  
   { name: 'IEEE Xplore 是一个美国的电子技术与信息科学工程师的协会，是世界上最大的非营利性专业技术学会。', iconUrl: '/images/106.png', url: 'https：//ieeexplore.ieee.org/  ' },
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