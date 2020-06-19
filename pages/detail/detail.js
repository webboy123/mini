// pages/detail/detail.js
const request = require("../../utils/request.js")
const util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleId:'',
    topicsDetail:{},
    richText:''
  },
  getTopicsDetail(){
    request("topic/"+this.data.titleId,'get',{}).then((res) => {
      // console.log("res",res.data)
      res.data.last_reply_at = util.timeFn(res.data.last_reply_at);
      let richText = res.data.content;  
      richText = richText
                        .replace(/\<img/gi,'<img style="width:100%;height:auto;"')
                        .replace(/\<pre/gi,'<pre style="width:100%;background:#f7f7f7"');
      console.log("richText",richText)
      this.setData({
        topicsDetail:res.data,
        richText
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      titleId:options.id
    });
    this.getTopicsDetail();
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