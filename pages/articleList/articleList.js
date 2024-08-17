const articlesData = require('../../data/articles.js')

Page({
  data: {
    articles: articlesData.articles
  },
  openArticle: function(event) {
    const url = event.currentTarget.dataset.url
    wx.navigateTo({
      url: `/pages/article/article?url=${encodeURIComponent(url)}`
    })
  }
})