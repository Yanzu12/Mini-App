// index.js
Page({
  data:{
    item:{},
    hidepopup:true,
    array2: wx.getStorageSync('array2'),
    array3: wx.getStorageSync('array3'),
    array4: wx.getStorageSync('array4'),
    array5: wx.getStorageSync('array5'),
  },
  
  wait:function () {
    wx.showToast({
      
      image:'/img/敬请期待 (1).png',
    })
  },
  LoadSeat:function showloading() {
    wx.showLoading({
      title: '加载座位信息',
    })
    setTimeout(function () {
       wx.navigateTo({
      url: '/pages/reserve/reserve',
    })
      wx.hideLoading()
    },1500)
  },
  LeaveSeat:function showloading() {
    wx.setStorageSync('array2', [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1] ),
    wx.setStorageSync('array3', [1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0]),
    wx.setStorageSync('array4', [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1]),
    wx.setStorageSync('array5', [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1]),
    wx.setStorageSync('judge', true)
    wx.setStorageSync('seat', '')
    wx.showLoading({
      title: '释放座位资源',
    })
    setTimeout(function () {
     wx.hideLoading()
     wx.showToast({
        title: '释放成功',
        duration:1500,
        icon:'success',
      })
   },1500)
  },
  onshowpopup:function() {
    this.setData({
      hidepopup:false
    })
  },

  onShow() {
    this.setData({
      array2: wx.getStorageSync('array2'),
      array3: wx.getStorageSync('array3'),
      array4: wx.getStorageSync('array4'),
      array5: wx.getStorageSync('array5'),
    })
      },
})
