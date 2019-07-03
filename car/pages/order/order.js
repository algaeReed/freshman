// pages/order/order.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    navArray: [
      "全部",
      "已付款",
      "未付款",
      "待收货",
      "待评价"
    ],
    selectedIndex: 0,
    // 所有订单（包括已付款未付款待收货待评价）
    orderArray: [
      {
        carName: "特斯拉",
        orderStatus: "交易成功",
        imgUrl: "/image/image/index/car2.png",
        carInfo: "1特斯拉特斯拉特斯拉特斯拉法拉利快睡吧上课",
        shouldPay: 330090,
        realPay: 330000
      }, {
        carName: "特斯拉",
        orderStatus: "未付款",
        imgUrl: "/image/image/index/car2.png",
        carInfo: "2特斯拉特斯拉特斯拉特斯拉法拉利快睡吧上课",
        shouldPay: 330090,
        realPay: 330000
      }, {
        carName: "特斯拉",
        orderStatus: "待收货",
        imgUrl: "/image/image/index/car2.png",
        carInfo: "3特斯拉特斯拉特斯拉特斯拉法拉利快睡吧上课",
        shouldPay: 330090,
        realPay: 330000
      }, {
        carName: "特斯拉",
        orderStatus: "待评价",
        imgUrl: "/image/image/index/car2.png",
        carInfo: "4特斯拉特斯拉特斯拉特斯拉法拉利快睡吧上课",
        shouldPay: 330090,
        realPay: 330000
      }
    ],
    tempArray: []
  },
  changeNav: function (event) {
    // z小程序中给date里的数据赋值，需要使用setdate函数
    this.setData({
      selectedIndex: event.target.dataset.idx
    })
    var temp = ""; 
    var array = [];
    // 如果点击的是全部
    if (event.target.dataset.idx == 0) {
      this.setData({
        tempArray: this.data.orderArray
      })
    } else if (event.target.dataset.idx == 1) {
      for (var i = 0; i < this.data.orderArray.length; i++) {
        if (this.data.orderArray[i].orderStatus == "交易成功") {
          // 将orderStatus值为“交易成功”的元素添加到array数组里
          array.push(this.data.orderArray[i]);
        }
      }
      this.setData({
        tempArray: array
      })
    } else {
      temp = this.data.navArray[event.target.dataset.idx];
      for (var i = 0; i < this.data.orderArray.length; i++) {
        if (this.data.orderArray[i].orderStatus == temp) {
          array.push(this.data.orderArray[i]);
        }
      }
      this.setData({
        tempArray: array
      })
    }
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.setData({
      tempArray: this.data.orderArray
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