// pages/医学/医学.js
Page({
  data: {
      sites: [
          { name: '《柳叶刀》是世界著名的医学期刊，涵盖广泛的医学研究领域。它发表高影响力的临床研究、评论和评论文章，是全球医学界的重要参考文献。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrENmeG4w1BrpLV*Q6sjF.Xvhbj8MS38McLP6PIHnUMauXRt.9AO641B.SP6gcxNyz6qiv76DPsItRsI.0M6FjvJI!/mnull&bo=JgJiAAAAAAADB2Q!&rf=photolist&t=5', url: 'www.thelancet.com',pagePath:'../yixue/01/01' },
          { name: '丁香园是一个专注于医学文章和学术交流的平台。它提供最新的医学研究成果和专业信息，帮助医生和科研人员提升专业知识和技能。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEEbT92WO7uKA.UJ72ErigEhyvUeSxQDTLrsjRsoUSIsy15fxVKjDwKx4QNsvgdkVe*Z*jUFo05uSXDcsWpxQLIk!/mnull&bo=jwGNAAAAAAADByE!&rf=photolist&t=5', url: 'www.dxy.cn',pagePath:'../yixue/02/02'  },
          { name: 'PubMed 是一个免费的医学文献数据库，涵盖生物医学领域的期刊文章。它由美国国家医学图书馆提供，为全球医学研究人员提供重要的文献资源。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEEbT92WO7uKA.UJ72ErigEi4r0yaWD8YrcBf.EN35lK0*ESmPv9stox*uenYJenM2ak3PNI7mIh1FpQaKe5czYk!/mnull&bo=xgG.AAAAAAADB1s!&rf=photolist&t=5', url: 'https://pubmed.ncbi.nlm.nih.gov',pagePath:'../yixue/03/03'  },
          { name: 'MedSci 是一个专业的医学科研信息平台，提供最新的科研动态、学术会议和医学文献。它致力于推动医学研究和临床实践的发展。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEEbT92WO7uKA.UJ72ErigEhD90V97rwHiVuuqb27ODl1Mupsi4L256tqq4Xs2sUlG0hp6lIbyC6.3sGpdrwPNi8!/mnull&bo=sgF0AAAAAAADB.U!&rf=photolist&t=5', url: 'https://www.medsci.cn/sci' ,pagePath:'../yixue/04/04' },
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
