Page({
  data: {
    siteUrl: ''
  },
  onLoad: function(options) {
    if (options.siteUrl) {
      this.setData({
        siteUrl: decodeURIComponent(options.siteUrl)
      });
    }
  }
})