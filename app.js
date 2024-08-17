// app.js
App({
  onLaunch() {
    //云数据库初始化
    wx.cloud.init({
      env:'yilunlink-7g40lev783012c1f',
      traceUser:true,
    })
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        if (res.code) {
          // 发送 res.code 到后台换取 openid 和 session_key
          wx.request({
            url: '', // 后端服务器地址
            method: 'POST',
            data: {
              code: res.code
            },
            success: response => {
              // 后端返回的 openid 和 session_key
              const { openid, session_key } = response.data;
              // 保存 openid 和 session_key，后续使用
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      }
    })
  },

  globalData: {
    userInfo: null
  }
})

wx.getUserProfile({
  desc: '用于完善用户资料', // 必填，表示获取用户信息的用途
  success: res => {
    const userInfo = res.userInfo;
    console.log(userInfo);
    // 可以将 userInfo 发送到后端服务器进行处理
  },
  fail: err => {
    console.log('用户拒绝授权', err);
  }
});