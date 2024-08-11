// pages/index/index.js

Page({
  data: {
      sites: [
          { name: 'Open Access Library 是一个开放获取的文献搜索平台，通过一篇论文可以检索到相关的延伸文献，帮助研究人员更深入地了解研究主题。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrENmeG4w1BrpLV*Q6sjF.XvhP2P4iUphP8lviNGfEXqQt9h9m53iFjk2fcfHkbIcpDqPr6Op1m19iz93E5NZog08!/mnull&bo=LQPEAAAAAAADB8g!&rf=photolist&t=5', url: 'www.oalib.com', pagePath:'../yanshen/01/01'},
          { name: 'Connected Papers 是一个文献推荐工具，通过你感兴趣的一篇文章，生成与其相关的文献图谱，帮助研究人员发现相关的研究成果和趋势。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrENmeG4w1BrpLV*Q6sjF.XvgYTMX5ovvSJSKgSj1kGlQSW7OW2ywWHOcINQR4N4ymHWH22yt.u06Ar4AeHi6vGzM!/mnull&bo=2AKTAAAAAAADB2s!&rf=photolist&t=5', url: 'https://www.connectedpapers.com/', pagePath:'../yanshen/02/02'},
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
