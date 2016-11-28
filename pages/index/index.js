//index.js
//获取应用实例
var data = require("../../data/data.js");
var Chapters = data.getChapters();
var i = 0;
var datas = [];
var app = getApp()
Page({
  data: {
    chapters: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeData: function() {
    this.setData({
      item: {
        index: 1,
        msg: 'hahah',
        time: '2017-09-07'
      }
    })
  },
  getDatas: function() {
    datas = this.data.chapters;
    datas.push(Chapters[i]);
    console.log(datas);
    return datas;
  },
  onLoad: function () {
    this.setData({
      chapters: this.getDatas()
    });
  }
})
