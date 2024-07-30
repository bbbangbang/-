// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: '',
    results: []
  },

  onInput: function(e) {
    this.setData({
      query: e.detail.value
    });
  },

  onSearch: function() {
    const query = this.data.query;
    if (query) {
      // 模拟搜索结果，可以替换成实际的搜索逻辑
      const results = this.search(query);
      this.setData({
        results: results
      });
    } else {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      });
    }
  },

  search: function(query) {
    // 模拟搜索结果
    const allItems = ['苹果', '香蕉', '橙子', '葡萄', '梨', '西瓜', '《李昱宁的孙子张元为何总是大逆不道》'];
    return allItems.filter(item => item.includes(query));
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})