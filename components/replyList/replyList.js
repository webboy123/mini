// components/list/list.js
const util = require("../../utils/util.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      observer: function(newVal) {
        console.log("newVal",newVal)
        const tempList = newVal.map(item => {
          item.create_at = util.timeFn(item.create_at)
          return item
        })
        this.setData({
          newList:tempList
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    newList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },
  attached(){
  }
})