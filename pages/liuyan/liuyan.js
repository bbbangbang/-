// pages/liuyan/liuyan.js
const db=wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataObj:""
  },
  formSubmit(e) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    var liuyantext = e.detail.value.liuyantext;
  
    // 直接存入云数据库
    const db = wx.cloud.database();
    db.collection("liuyan").add({
      data: {
        time: time,
        content: liuyantext,
      }
    }).then(() => {
      wx.showToast({
        title: '已留言',
        icon: "success"
      });
    }).catch((err) => {
      console.error('保存到数据库失败：', err);
      wx.showToast({
        icon: 'error',
        title: '保存失败'
      });
    });
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
    db.collection("liuyan").orderBy('time', 'desc').get ({
      success:res=>{
      this.setData({
      dataobj:res.data
      })
      console. log (res)
      }
    })}, 

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
  onPullDownRefresh: function () {
    db. collection ("liuyan").get ({
      success: res=>{
        this. setData({
          dataObj:res.data
        })
      }
    })
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