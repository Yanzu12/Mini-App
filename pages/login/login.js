// pages/login/login.js
Page({
  input1:function(e) {
    this.setData({
      account:e.detail.value
    })
    console.log(this.data.account);
  },
  input2:function(e) {
    this.setData({
      password:e.detail.value
    })
    console.log(this.data.password);
  },
  /**
   * 页面的初始数据
   */
  data: {
    account:"",
    password:""
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

  },
  login:function(){
    var user=wx.getStorageSync('user')
    // console.log(user.account);
    // console.log(user.password);
    // console.log(this.data.account);
    // console.log(this.data.password);
    // console.log(this.data.account==user.account);
    // console.log(this.data.password==user.password);
    var i=0
    for(i;i<user.length;i++){
    if(this.data.account==user[i].account){
      if(this.data.password==user[i].password){
        wx.setStorageSync('judge', true)
        wx.setStorageSync('array2', [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1] ),
        wx.setStorageSync('array3', [1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0]),
        wx.setStorageSync('array4', [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1]),
        wx.setStorageSync('array5', [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1]),
        wx.setStorageSync('judge', true);
        wx.setStorageSync('loginuser', user[i])
        console.log(wx.getStorageSync('loginuser'));
        wx.switchTab({
          url: '/pages/index/index',
        })
        wx.showToast({
          title: '登录成功',
          icon:'success',
          duration:1500
        })
        break
      }else{
        wx.showToast({
          title: '密码错误',
          icon:'error'
        })
        break
      }
    }
  }
  if(i==user.length){
    wx.showToast({
      title: '账号不存在',
      icon:'error'
    })
  }
  }
 
})