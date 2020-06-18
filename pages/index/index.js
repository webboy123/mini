//index.js
//获取应用实例
const app = getApp()
const request = require("../../utils/request.js")
const util = require("../../utils/util.js")
Page({
  data: {
    navTab: ['全部','精华','分享', '客户端测试'],        
    currentTab: 0,
    sendList:[],
    list:[],
  },
  select: {
    page: 1,
    size: 6,
    isEnd: false
  },
  //事件处理函数
  onLoad: function () {
    this.getInitData()
  },
  currentTab: function (e) {
    if (this.data.currentTab == e.currentTarget.dataset.idx){
      return;
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    this.select={
      page: 1,
      size: 6,
      isEnd: false
    }
    this.data.sendList=[];
  },
  getInitData(){
    request("topics",'get',{}).then(res => {
      console.log("res",res)
      console.log("last_reply_at",util.timeFn(res.data[0].last_reply_at))
      this.setData({
        list:res.data,
      })
    })
  },
})
