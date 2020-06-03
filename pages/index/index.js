//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navTab: ['全部','精华','分享', '客户端测试'],        
    currentTab: 0,
    sendList:[],
  },
  select: {
    page: 1,
    size: 6,
    isEnd: false
  },
  //事件处理函数
  onLoad: function () {
    
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
})
