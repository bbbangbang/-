// pages/其他/其他.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sites: [
      { name: 'Sci-hub 提供免费的学术文献下载服务，致力于打破付费墙，促进学术资源的自由共享。它收录了大量的期刊文章，是科研人员的重要资源。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEEA2JMp09jF8fRuWqdRI.xewnvFFCWgIbFKK6kbuHtYoWyS9b2ZyyXvw64bqVlZfPgbuLJcZ90ZRtNeum1qPv.Q!/mnull&bo=8AK6AAAAAAADB2o!&rf=photolist&t=5', url: 'https://sci-hub.st',pagePath:'../other/sci/sci' },

      { name: 'Library Genesis 是一个提供免费电子书和学术文献下载的平台，涵盖广泛的学科领域。它是全球研究人员和学生的重要资源库。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEEA2JMp09jF8fRuWqdRI.xeYtqTgOKiCvwLWk3Rt.dlAmKCndfsgQXWwet9kSKyxtdGwyH7A43k.d3rktEy7CQA!/mnull&bo=VgJnAAAAAAADBxE!&rf=photolist&t=5', url: 'https://libgen.gs',pagePath:'../other/lg/lg'},
     
      { name: '百度学术是一个中文文献搜索引擎，提供便捷的学术资源检索服务。它覆盖广泛的学科领域，是中文学术研究的重要工具。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEEA2JMp09jF8fRuWqdRI.xeaUd3AT4o7nF.e3dp3C87VlWDUi4n5yEZj.gcClxKgOQouYVvS8kmwJNZHfusAGDg!/mnull&bo=4gGaAAAAAAADB1s!&rf=photolist&t=5', url: 'https://xueshu.baidu.com',pagePath:'../other/baidu/baidu'},
      
      { name: '中国知网是中国最大的学术文献数据库，覆盖面广，几乎所有大学都可以免费在知网上下载文章。它每天更新，为研究人员提供丰富的文献资源。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEEA2JMp09jF8fRuWqdRI.xfnJN1j6WvZVQBEsKFQEd40*OV7V6selFAOCh7N2MVDD9**c*qu3iADSMtrEeYpodE!/mnull&bo=1AGgAAAAAAADB1c!&rf=photolist&t=5', url: 'http://www.cnki.net',pagePath:'../other/cnki/cnki'},
      
      { name: '发展中国家联合期刊库提供来自发展中国家的学术文献，全部免费下载。它涵盖多种学科，旨在促进全球学术交流和资源共享。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEHxhzvsFD6OXshbaJgJTPBJRlcN3n0XgJN*C0L71woRUm22HQZjXZUWHMk*6f1*CyKfcMwIE7*Ejyc7SCMNj*DQ!/mnull&bo=owG8AAAAAAADBzw!&rf=photolist&t=5', url: 'http://www.bioline.org.br',pagePath:'../other/bioline/bioline'},
      
      { name: '中国国家数字图书馆是一个综合性的数字资源平台，提供丰富的电子书、期刊和文献资料。它为公众和研究人员提供便捷的数字图书馆服务。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEHxhzvsFD6OXshbaJgJTPBLTdYn.5ZeWweZPzn4Mh6IPyyBAgSMaSxteD.AP2u5RMZLjpFu9YK9.BAROboTQkqQ!/mnull&bo=XgKSAAAAAAADB.w!&rf=photolist&t=5', url: 'http://www.nlc.cn',pagePath:'../other/nlc/nlc'},
     
      { name: '全国图书馆参考咨询联盟是一个图书馆合作平台，提供文献检索和参考咨询服务。它整合了多家图书馆的资源，为用户提供高效的文献获取服务。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEHxhzvsFD6OXshbaJgJTPBKe1j0Uv3B3j5f53hxN0IPkA8yA7F.M78m0qY2b8i28GnDGixxKqtJpYgHvEwUL248!/mnull&bo=tgKaAAAAAAADBww!&rf=photolist&t=5', url: 'http://www.ucdrs.superlib.net',pagePath:'../other/qgtsg/qgtsg'},

      { name: 'JSTOR 是一个学术期刊和电子书数据库，涵盖广泛的学科领域。它提供高质量的学术资源，是全球学术研究的重要平台。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrEHxhzvsFD6OXshbaJgJTPBIQCpCailj31bx0xWxFXz2WDnRWLzI4HaKm2P2MwCVRg.KvTmDHe0CQzdF0hDqhDIw!/mnull&bo=DwEuAQAAAAADBwM!&rf=photolist&t=5', url: 'https://www.jstor.org',pagePath:'../other/jstor/jstor'},

      { name: '谷歌学术是一个免费的学术文献搜索引擎，提供丰富的期刊文章、学位论文和会议论文等资源。它是研究人员查找和获取学术文献的重要工具。', iconUrl: 'http://m.qpic.cn/psc?/V541ojcR2vTLqo25ayZy4RldbC09ucal/TmEUgtj9EK6.7V8ajmQrENmeG4w1BrpLV*Q6sjF.Xvi4t4zeCLzt.g73KKmQGkUYaRxXS0xRIJwxidDibIlXeYOaW.ADt8XW9fSF6ekzSBU!/mnull&bo=ngKOAAAAAAADBzA!&rf=photolist&t=5', url:'https://scholar.google.com',pagePath:'../other/guge/guge'}
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