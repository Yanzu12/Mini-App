// pages/login/login.js
Page({
  input1:function(e) {
    this.setData({
      account:e.detail.value
    })
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
  input4:function(e) {
    this.setData({
      number:e.detail.value
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    account:"",
    password1:"",
    password2:"",
    number:""
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
  register:function(){
    var user=wx.getStorageSync('user')
    let i=0
    if(this.data.password1==this.data.password2){
      for(i;i<user.length;i++){
        if(user[i].account==this.data.account){
          console.log(user[i].account);
          console.log(this.data.account);
          wx.showToast({
            title: '用户名已存在',
            icon:'error'
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
    if(i==user.length){
      var newuser={
        account:this.data.account,
        password:this.data.password1,
        number:this.data.number
      }
      user.push(newuser)
      wx.setStorageSync('user', user)
      
      wx.redirectTo({
        url: '/pages/login/login',
      })
      wx.showToast({
        title: '注册成功',
        icon:'success',
        duration:1500
      })
    }
  }
 
})