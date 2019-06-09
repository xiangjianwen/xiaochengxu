// miniprogram/pages/addStudent/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    author: '',
    pubdate: '', 
    image: '', 
    publisher: '',
    title: '',
    summary: '',
    price: "",
    error: '',
    flag:false,
    save:"保存",
    btDisabled:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  

  },
  bindKeyInputauthor: function (e) {
    
      this.setData({
        author: e.detail.detail.value
      
    })
    
  },
 
  bindKeyInputprice: function (e) {
    console.log(e.detail.detail.value)
    console.log(this.data)
    this.setData({
      price: e.detail.detail.value
    })
    //this.check(this.data)//检查身份证号码是否云端已经存在
  },
  submitInfo:function(e) {
    this.setData({
    save:"正在保存...",
    btDisabled:true
    })
    wx.cloud.callFunction({
      name: 'seachCardid',
      data: this.data,
    }).then((res) => {
      if (res.result.data.length) {
        console.log(res)
        this.setData({
          error: "该身份证号码已经存在！" + res.result.data[0].author,
          flag: false,
          save:"保存",
          btDisabled:false
        })
      } else { 
        this.setData({
          flag: true
        })
      }
      if (this.data.flag) {
        let { author, pubdate, image, publisher, title, summary, price } = this.data
        const db = wx.cloud.database()
        db.collection('book').add({
          data: { author, pubdate, image, publisher, title, summary, price }
        }).then(() => {
          this.setData({
            
            save: "保存",
            btDisabled: false
          })
          //that.getBookList()
          wx.showToast({
            title: "添加成功"
          })
          wx.navigateBack({
            delta: 1
          })
        })
      } else {
        wx.showToast({
          title: "添加失败"
        })
      }
      
    })
    
    

  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
