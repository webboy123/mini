// components/list/list.js
const util = require("../../utils/util.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      observer:function(newVal, oldVal){
        const tempList = newVal.map((item) => {
          item.last_reply_at = util.timeFn(item.last_reply_at);
          return item;
        })
        this.setData({
          newlist:tempList
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    newlist:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    skipToDetail(e) {
      wx.navigateTo({
        url:"/detailPackage/pages/detail/detail?id="+e.target.id
      })
    },
    skipToUser(e){
      wx.navigateTo({
        url:'/userPackage/pages/user/user?user='+e.target.dataset.user
      })
    }
  },
  attached(){
  }
})
