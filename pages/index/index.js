//index.js
//获取应用实例
const app = getApp()
const request = require("../../utils/request.js")
const util = require("../../utils/util.js")
Page({
  data: {
    navTab: [
      {name:'全部',type:''},
      {name:'精华',type:'good'},
      {name:'分享',type:'share'}, 
      {name:'客户端测试',type:'ask'}
    ],        
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
    this.getData()
  },
  currentTab: function (e) {
    console.log("e",e.currentTarget.dataset.name)
    this.getData({tab:e.currentTarget.dataset.name})
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
  getData(data = {}){
    request("topics",'get',data).then(res => {
      console.log("res",res)
      this.setData({
        list:res.data,
      })
    })
  },
})
