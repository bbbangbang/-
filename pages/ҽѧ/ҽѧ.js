// pages/医学/医学.js
Page({
  data: {
      sites: [
          { name: '《柳叶刀》是世界著名的医学期刊，涵盖广泛的医学研究领域。它发表高影响力的临床研究、评论和评论文章，是全球医学界的重要参考文献。', iconUrl: '/images/401.png', url: 'www.thelancet.com' },
          { name: '丁香园是一个专注于医学文章和学术交流的平台。它提供最新的医学研究成果和专业信息，帮助医生和科研人员提升专业知识和技能。', iconUrl: '/images/402.png', url: 'www.dxy.cn' },
          { name: 'PubMed 是一个免费的医学文献数据库，涵盖生物医学领域的期刊文章。它由美国国家医学图书馆提供，为全球医学研究人员提供重要的文献资源。', iconUrl: '/images/403.png', url: 'https://pubmed.ncbi.nlm.nih.gov' },
          { name: 'MedSci 是一个专业的医学科研信息平台，提供最新的科研动态、学术会议和医学文献。它致力于推动医学研究和临床实践的发展。', iconUrl: '/images/404.png', url: 'https://www.medsci.cn/sci' },
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
