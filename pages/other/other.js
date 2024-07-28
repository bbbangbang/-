// pages/其他/其他.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sites: [
      { name: 'Sci-hub 提供免费的学术文献下载服务，致力于打破付费墙，促进学术资源的自由共享。它收录了大量的期刊文章，是科研人员的重要资源。', iconUrl: '/images/201.png', url: 'https://sci-hub.st' },

      { name: 'Library Genesis 是一个提供免费电子书和学术文献下载的平台，涵盖广泛的学科领域。它是全球研究人员和学生的重要资源库。', iconUrl: '/images/202.png', url: 'https://libgen.gs' },
     
      { name: '百度学术是一个中文文献搜索引擎，提供便捷的学术资源检索服务。它覆盖广泛的学科领域，是中文学术研究的重要工具。', iconUrl: '/images/203.png', url: 'https://xueshu.baidu.com' },
      
      { name: '中国知网是中国最大的学术文献数据库，覆盖面广，几乎所有大学都可以免费在知网上下载文章。它每天更新，为研究人员提供丰富的文献资源。', iconUrl: '/images/204.png', url: 'www.cnki.net' },
      
      { name: '发展中国家联合期刊库提供来自发展中国家的学术文献，全部免费下载。它涵盖多种学科，旨在促进全球学术交流和资源共享。', iconUrl: '/images/205.png', url: 'http://www.bioline.org.br' },
      
      { name: '中国国家数字图书馆是一个综合性的数字资源平台，提供丰富的电子书、期刊和文献资料。它为公众和研究人员提供便捷的数字图书馆服务。', iconUrl: '/images/206.png', url: 'http://www.nlc.cn' },
     
      { name: '全国图书馆参考咨询联盟是一个图书馆合作平台，提供文献检索和参考咨询服务。它整合了多家图书馆的资源，为用户提供高效的文献获取服务。', iconUrl: '/images/207.png', url: 'http://www.ucdrs.superlib.net' },

      { name: 'JSTOR 是一个学术期刊和电子书数据库，涵盖广泛的学科领域。它提供高质量的学术资源，是全球学术研究的重要平台。', iconUrl: '/images/208.png', url: 'https://www.jstor.org' },

      { name: '谷歌学术是一个免费的学术文献搜索引擎，提供丰富的期刊文章、学位论文和会议论文等资源。它是研究人员查找和获取学术文献的重要工具。', iconUrl: '/images/209.png', url: 'https://scholar.google.com' }
      // 其他网站条目
  ]
  },

  copyUrl: function (event) {
    const url = event.currentTarget.dataset.url;
    wx.setClipboardData({
        data: url,
        success: function () {
            wx.showToast({
                title: '复制成功',
                icon: 'success',
                duration: 1500
            });
        }
    });
}

  
})