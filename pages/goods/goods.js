// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,  
    dialogTitle: '填写座位信息',  
    dialogPlaceholder: '请输入座位号',  
    dialogValue: '',
		selectedItem: [],
		wholeItem: [],
    shopList: [
      {
        "id": 1,
        "url": "https://my-sky-take-out-ethereal.oss-cn-hangzhou.aliyuncs.com/d416fd0d-0717-490f-962f-df3e49a5291e.png",
        "name": "北冰洋汽水",
        "price": 2,
        "desc": "北冰洋汽水，炎热夏日，清凉解暑"
      },
      {
        "id": 2,
        "url": "https://my-sky-take-out-ethereal.oss-cn-hangzhou.aliyuncs.com/90cda549-b871-4f0d-8730-cc64e307be87.png",
        "name": "王老吉",
        "price": 2.5,
        "desc": "王老吉，好喝的很"
      },
      {
        "id": 3,
        "url": "https://my-sky-take-out-ethereal.oss-cn-hangzhou.aliyuncs.com/Snipaste_2024-06-21_16-38-49.png",
        "name": "酸梅汤",
        "price": 3,
        "desc": "适合夏日品尝"
      },
      {
        "id": 4,
        "url": "https://my-sky-take-out-ethereal.oss-cn-hangzhou.aliyuncs.com/%E4%BE%BF%E5%88%A9%E8%B4%B4.jpg",
        "name": "便利贴",
        "price": 1.5,
        "desc": "方便随意记录重点"
      },
      {
        "id": 5,
        "url": "https://my-sky-take-out-ethereal.oss-cn-hangzhou.aliyuncs.com/%E5%A4%A7%E7%99%BD%E7%BA%B8.jpg",
        "name": "演算纸20张",
        "price": 4,
        "desc": "可以当作草纸"
      },
      {
        "id": 6,
        "url": "https://my-sky-take-out-ethereal.oss-cn-hangzhou.aliyuncs.com/%E6%A4%B0%E8%93%89%E9%9D%A2%E5%8C%85.jpg",
        "name": "椰蓉面包",
        "price": 5,
        "desc": "饿的时候来一口"
      },
      {
        "id": 7,
        "url": "https://my-sky-take-out-ethereal.oss-cn-hangzhou.aliyuncs.com/%E7%99%BE%E5%B2%81%E5%B1%B1.jpg",
        "name": "百岁山",
        "price": 3,
        "desc": "饮用天然矿泉水"
      },
      {
        "id": 8,
        "url": "https://my-sky-take-out-ethereal.oss-cn-hangzhou.aliyuncs.com/%E8%84%89%E5%8A%A8.jpg",
        "name": "脉动",
        "price": 5,
        "desc": "找回状态"
      },
      {
        "id": 9,
        "url": "https://my-sky-take-out-ethereal.oss-cn-hangzhou.aliyuncs.com/%E8%8F%A0%E8%90%9D%E5%8C%85%E9%9D%A2%E5%8C%85.jpg",
        "name": "菠萝包面包",
        "price": 4,
        "desc": "香甜可口"
      },
      {
        "id": 10,
        "url": "https://my-sky-take-out-ethereal.oss-cn-hangzhou.aliyuncs.com/%E9%9D%A2%E5%B7%BE%E7%BA%B8.jpg",
        "name": "面巾纸",
        "price": 8,
        "desc": "方便实用"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  showInputDialog: function(event) {
    this.setData({  
			showModal: true,
			selectedItem: event.target.dataset.item
		})
		
  },  

  handleInput: function(e) {  
    this.setData({  
      dialogValue: e.detail.value,  
    });  
  },  

  confirmInput: function() {  
		// 添加选择的商品列表
		this.data.wholeItem.push({
			'selectedItem': this.data.selectedItem,
			'seat': this.data.dialogValue
		})
    wx.setStorageSync('wholeItem', this.data.wholeItem)
    this.hideModal()
    wx.showToast({
      title: '购买成功'
		})
  },  

  hideModal: function() {  
    this.setData({  
      showModal: false,  
      dialogValue: ''
    });  
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