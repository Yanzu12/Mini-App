// components/invest/invest.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object
    },
    hide: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    purchase: 5
  },

  /**
   * 组件的方法列表
   */
  methods: {
    min: function (params) {
      this.setData({
        purchase: this.data.purchase - 1
      })
    },
    plus: function (params) {
      this.setData({
        purchase: this.data.purchase + 1
      })
    },
    hidepopup: function (e) {
      if (e.target.dataset.canclose) {
        this.setData({
          hide: true
        })
      }
    },
    purchaseconfirm: function () {
      if (wx.getStorageSync('judge')==true) {
        wx.showToast({
          title: '预定成功',
          duration: 1500,
          icon: 'success',
          mask: true
        })
        
      }
      if (wx.getStorageSync('judge')==false) {
        wx.showToast({
          title: '预定失败',
          duration: 1500,
          icon:'error'
        })
      }
      wx.setStorageSync('judge', false);
    }
  }
})