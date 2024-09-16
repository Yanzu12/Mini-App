// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {},
    hidepopup: true,
    index: 0,
    placearr: ['鼎新二楼', '鼎新三楼', '鼎新四楼', '鼎新五楼'],
    index1: 0,
    ztarr: ['全部', '可预约', '已预约'],
    array2: wx.getStorageSync('array2'),
    array3: wx.getStorageSync('array3'),
    array4: wx.getStorageSync('array4'),
    array5: wx.getStorageSync('array5'),
  },

  bandpickerchangeplace: function (e) {
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bandpickerchangezt: function (e) {
    console.log(e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },

  onshowpopup: function (e) {
    this.setData({
      hidepopup: false,
    })

    if (e.currentTarget.dataset.floor == 2&&wx.getStorageSync('judge')==true) {
      this.setData({
        ['array2[' + e.currentTarget.dataset.id + ']']: 1
      })
      wx.setStorageSync('seat', [e.currentTarget.dataset.floor,e.currentTarget.dataset.id+1]);
      wx.setStorageSync('array2', this.data.array2);
    }

    if (e.currentTarget.dataset.floor == 3&&wx.getStorageSync('judge')==true) {
      this.setData({
        ['array3[' + e.currentTarget.dataset.id + ']']: 1
      })
      wx.setStorageSync('seat', [e.currentTarget.dataset.floor,e.currentTarget.dataset.id+1]);
      wx.setStorageSync('array3', this.data.array3);
    }

    if (e.currentTarget.dataset.floor == 4&&wx.getStorageSync('judge')==true) {
      this.setData({
        ['array4[' + e.currentTarget.dataset.id + ']']: 1
      })
      wx.setStorageSync('seat', [e.currentTarget.dataset.floor,e.currentTarget.dataset.id+1]);
      wx.setStorageSync('array4', this.data.array4);
    }

    if (e.currentTarget.dataset.floor == 5&&wx.getStorageSync('judge')==true) {
      this.setData({
        ['array5[' + e.currentTarget.dataset.id + ']']: 1
      })
      wx.setStorageSync('seat', [e.currentTarget.dataset.floor,e.currentTarget.dataset.id+1]);
      wx.setStorageSync('array5', this.data.array5);
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
    this.setData({
      array2: wx.getStorageSync('array2'),
      array3: wx.getStorageSync('array3'),
      array4: wx.getStorageSync('array4'),
      array5: wx.getStorageSync('array5'),
    })
 
this.setData({
  array2: wx.getStorageSync('array2'),
  array3: wx.getStorageSync('array3'),
  array4: wx.getStorageSync('array4'),
  array5: wx.getStorageSync('array5'),
})
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