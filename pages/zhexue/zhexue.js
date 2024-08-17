// pages/哲学与社会科学/哲学与社会科学.js
Page({
  data: {
      sites: [
          { name: '国家哲学社会科学文献中心是一个专注于哲学和社会科学研究的文献资源平台。它提供丰富的学术期刊、研究报告和论文，为学者和研究人员提供支持。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEEbT92WO7uKA.UJ72ErigEihdrPL8LVBuyXniIQ1lx7q.ItgCyVCbbeiU3aFvT4nAAfdAljS5cDDp01*cjMPkDg!/mnull&bo=LwOHAAAAAAADB4k!&rf=photolist&t=5', url: 'https://www.ncpssd.org',pagePath:'../zhexue/01/01'},
          { name: '斯坦福哲学百科全书（Stanford Encyclopedia of Philosophy，简称SEP）是一个在线的哲学资源，由斯坦福大学管理和维护。它涵盖了广泛的哲学主题，包含经过同行评审的条目和文章，每篇文章都由专家撰写并定期更新，确保内容的准确性和前沿性。SEP 是哲学学者、学生和爱好者获取权威信息和深入研究的宝贵资源。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEMZLe2VKArvAIDjSpf6JtqZWwIpsuLFiLQkWfwN0YpxqMNWHrJlxj1j9RYwMTKDIJgHJduPqI3abzxZOoUMjW0w!/mnull&bo=UwR5AAAAAAADBww!&rf=photolist&t=5', url: 'https://plato.stanford.edu' ,pagePath:'../zhexue/02/02'},
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
