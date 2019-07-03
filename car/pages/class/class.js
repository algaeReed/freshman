// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIdex:0,
    navArray:[
      "微型车",
      "小型车",
      "中性车",
      "大性车"  
    ],
    carArray:[
      {
      imgUrl:"/image/image/index/car1.png",
      // imgUrl:"http://pswt07hsy.bkt.clouddn.com/%E7%A9%BA%E8%90%8C%E3%80%8203.png",
      carName:"法拉利",
      carInfo:"2015款/4.3升/标准版",
      star:5,
      like:79,
      price:"40-100"
      },
       {
      imgUrl:"/image/image/index/car1.png",
      // imgUrl:"http://pswt07hsy.bkt.clouddn.com/%E7%A9%BA%E8%90%8C%E3%80%8203.png",
      carName:"法拉利",
      carInfo:"2015款/4.3升/标准版",
      star:5,
      like:79,
      price:"40-100"
      },
      {
      imgUrl:"/image/image/index/car1.png",
      // imgUrl:"http://pswt07hsy.bkt.clouddn.com/%E7%A9%BA%E8%90%8C%E3%80%8203.png",
      carName:"法拉利",
      carInfo:"2015款/4.3升/标准版",
      star:5,
      like:79,
      price:"40-100"
      },
      {
      imgUrl:"/image/image/index/car1.png",
      // imgUrl:"http://pswt07hsy.bkt.clouddn.com/%E7%A9%BA%E8%90%8C%E3%80%8203.png",
      carName:"法拉利",
      carInfo:"2015款/4.3升/标准版",
      star:5,
      like:79,
      price:"40-100"
      }

    ],
    smallCarArray: [
      {
        imgUrl: "/image/image/index/car1.png",
        // imgUrl:"http://pswt07hsy.bkt.clouddn.com/%E7%A9%BA%E8%90%8C%E3%80%8203.png",
        carName: "法拉利",
        carInfo: "2015款/4.3升/标准版",
        star: 5,
        like: 79,
        price: "40-100"
      },  
      {
        imgUrl: "/image/image/index/car1.png",
        // imgUrl:"http://pswt07hsy.bkt.clouddn.com/%E7%A9%BA%E8%90%8C%E3%80%8203.png",
        carName: "法拉利",
        carInfo: "2015款/4.3升/标准版",
        star: 5,
        like: 79,
        price: "40-100"
      },
      
    ],
  },
  changeNav(event){
    this.setData({
      navIdex:event.target.dataset.idx
    })

  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '车辆分类',
    });
      

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