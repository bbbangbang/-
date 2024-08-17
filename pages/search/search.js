Page({
  data: {
    keyword: '', // 存储用户输入的关键词
    resultList: [] // 存储服务器返回的结果列表
  },

  // 更新输入框的值
  onInputChange: function(e) {
    this.setData({
      keyword: e.detail.value
    });
  },

  // 处理搜索请求
  onSearch: function() {
    const that = this;
    if (!this.data.keyword) {
      wx.showToast({
        title: '请输入关键词',
        icon: 'none'
      });
      return;
    }

    wx.request({
      url: 'http://152.136.174.182:5000/search', // 你的服务器URL
      method: 'POST',
      header: {
        'Content-Type': 'application/json' // 确保使用正确的Content-Type
      },
      data: JSON.stringify({
        query: this.data.keyword
      }),
      success: function(res) {
        console.log('Response:', res.data);
        that.setData({
          resultList: res.data // 假设服务器返回的是一个包含标题和URL的列表
        });
      },
      fail: function(error) {
        console.error('Request failed', error);
        wx.showToast({
          title: '请求失败: ' + error.errMsg,
          icon: 'none'
        });
      }
    });
  }
});
