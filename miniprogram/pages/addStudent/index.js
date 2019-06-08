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
    price: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  

  },
  bindKeyInputauthor: function (e) {
      this.setData({
      author: e.detail
      
    })
    
  },
  bindKeyInputprice: function (e) {
   
    this.setData({
      price: e.detail
    })
  },
  submitInfo:function(e) {
    let that = this
    
      let { author, pubdate, image, publisher, title, summary, price } = this.data
      const db = wx.cloud.database()
      db.collection('book').add({
        data: { author, pubdate, image, publisher, title, summary, price }
      }).then(() => {
        //that.getBookList()
        wx.showToast({
          title: "添加成功"
        })
        wx.navigateBack({
          delta:1
        })
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
