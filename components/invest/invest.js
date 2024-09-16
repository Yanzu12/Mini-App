// components/invest/invest.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object
    },
    hide:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    purchase:5
  },

  /**
   * 组件的方法列表
   */
  methods: {
    min:function(params) {
      if(this.data.purchase==1){

      }else{
        this.setData({
        purchase:this.data.purchase-1
      })
      }
      
    },
    plus:function(params) {
      this.setData({
        purchase:this.data.purchase+1
      })
    },
    hidepopup:function (e) {
      if(e.target.dataset.canclose){
        this.setData({
        hide:true
      })
      }
    },
    purchaseconfirm:function () {
      wx.showModal({
        title: '提示',
        content: "确认要购买"+this.data.purchase+"小时时长吗",
        complete: (res) => {
          if (res.cancel) {
            
          }
      
          if (res.confirm) {

            let app=getApp()
            app.updatedata(this.data.purchase)
            console.log(app.getdata());

            wx.showToast({
              title: '购买成功',
              duration:1500,
              icon:'success',
              mask:true
            })
          }
        }
      })
    }
  }
})