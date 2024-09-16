// pages/changenub/changenub.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:""
  },
  input2:function(e) {
    this.setData({
      number:e.detail.value
    })
  },
  register:function(){
    var user=wx.getStorageSync('loginuser')
    let i=0
    if(true){
      var user={
        account:user.account,
        password:user.password,
        number:this.data.number
      }
      wx.setStorageSync('loginuser', user)
      var users=wx.getStorageSync('user')
      let i=0
      for(i;i<users.length;i++){
        if(users[i].account==user.account){
          users[i].number=user.number
          wx.setStorageSync('user', users)
          wx.switchTab({
            url: '/pages/category/category',
          })
          wx.showToast({
            title: '修改成功',
            icon:'success',
            duration:1500
          })
          break
        }
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      number:wx.getStorageSync('loginuser').number
    })
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