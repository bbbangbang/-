// pages/index/index.js

Page({
  data: {
      sites: [
          { name: 'Open Access Library 是一个开放获取的文献搜索平台，通过一篇论文可以检索到相关的延伸文献，帮助研究人员更深入地了解研究主题。', iconUrl: '/images/301.png', url: 'www.oalib.com' },
          { name: 'Connected Papers 是一个文献推荐工具，通过你感兴趣的一篇文章，生成与其相关的文献图谱，帮助研究人员发现相关的研究成果和趋势。', iconUrl: '/images/302.png', url: 'https://www.connectedpapers.com/' },
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
});
