//index.js
//获取应用实例
const app = getApp()
const request = require("../../utils/request.js")
const util = require("../../utils/util.js")
Page({
  data: {
    navTab: [
      {id:1,name:'全部',type:'all'},
      {id:2,name:'精华',type:'good'},
      {id:3,name:'分享',type:'share'}, 
      {id:4,name:'客户端测试',type:'dev'}
    ],        
    currentTab: 0,
    list:[]
  },
  //事件处理函数
  onLoad: function () {
    this.getData()
  },
  currentTab: function (e) {
    // console.log("e",e.currentTarget.dataset)
    this.getData({tab:e.currentTarget.dataset.name})
    this.setData({
      currentTab: e.currentTarget.dataset.key
    })
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
