// pages/changepsw/changepsw.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    password1:"",
    password2:""
  },
  input2:function(e) {
    this.setData({
      password1:e.detail.value
    })
  },
  input3:function(e) {
    this.setData({
      password2:e.detail.value
    })
  },
  register:function(){
    var user=wx.getStorageSync('loginuser')
    let i=0
    if(this.data.password1==this.data.password2){
      var user={
        account:user.account,
        password:this.data.password1,
        number:user.number
      }
      var users=wx.getStorageSync('user')
      let i=0
      for(i;i<users.length;i++){
        if(users[i].account==user.account){
          users[i].password=user.password
          wx.setStorageSync('user', users)
          wx.showToast({
            title: '修改成功',
            icon:'success',
            duration:1500
          })

          wx.switchTab({
            url: '/pages/category/category',
          })
          
          break
        }
      }
    }else{
      wx.showToast({
        title: '请确保密码一致',
        icon:'error'
      })
    }
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