// components/topics/topics.js
const util = require("../../../utils/util.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info :{
      type:Object,
      observer:function(newVal, oldVal) {
        newVal.last_reply_at = util.timeFn(newVal.last_reply_at);
        this.setData({
          newInfo:newVal
        })
      }
    },
    replies :{
      type:Object,
      observer:function(newVal, oldVal) {
        newVal.last_reply_at = util.timeFn(newVal.last_reply_at);
        this.setData({
          newReplies:newVal
        })
      }
    },
    apply : Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    newInfo:{},
    newReplies:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    skipToUser(e){
      wx.navigateTo({
        url:'../user/user?user='+e.target.dataset.user
      })
    }
  }
})
