// pages/category/category.js

Page({
  data: {
    Username:"",
    number:""
  },
  myappoint:function (params) {
    var seat=wx.getStorageSync('seat')
    console.log(seat);
    if(seat==""){
      wx.showToast({
        title: '暂无座位',
        icon:'error'
      })
    }else{
      console.log(seat);
      wx.showModal({
        title: '提示',
        content: '您的座位是'+seat[0]+'层'+seat[1]+'号',
        showCancel:false,
        complete: (res) => {
          if (res.confirm) {
            
          }
        }
      })
    }
  },
  edit:function () {
   wx.showActionSheet({
     itemList: ['修改电话','修改密码'],
     success(res){
       if(res.tapIndex==0){
         wx.navigateTo({
           url: '/pages/changenub/changenub',
         })
       }else if (res.tapIndex==1){
         wx.navigateTo({
           url: '/pages/changepsw/changepsw',
         })
       }
     }
   })
  },
  onLoad(options) {
    
  },
  balance:function() {
    var app=getApp()
    wx.showModal({
      title: '余额',
      content: '您的余额剩余'+app.getdata().time+'小时',
      showCancel:false,
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          
        }
      }
    })
  },
  logout: function(){
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },
  openmyorder: function() {
    wx.navigateTo({
      url: '/pages/myorder/myorder',
    })
  },

  onShow() {
    var loginuser=wx.getStorageSync('loginuser').account;
    var loginusern=wx.getStorageSync('loginuser').number;
    this.setData({
      Username:loginuser,
      number:loginusern
    })
  }
})