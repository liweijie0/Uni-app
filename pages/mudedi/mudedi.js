// pages/mudedi/mudedi.js
var {mudidi,mudedi_sousuo} = require('../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cirty:[],
    ouzhou:[],
    map:[
     {class:'ouzhou',heigth:'206.26rpx',name:'欧洲',top:'206.26rpx',country_en:'Europe'},
     {class:'feizhou',heigth:'164.06rpx',name:'非洲',top:'164.06rpx',country_en:'Africa'},
     {class:'yazhou',heigth:'159.38rpx',name:'亚洲',top:'159.38rpx',country_en:'Asia'},
     {class:'beimeizhou',heigth:'248.44rpx',name:'北美洲',top:'248.44rpx',country_en:'NorthAmerica'},
     {class:'nanmeizhou',heigth:'229.68rpx',name:'南美洲',top:'229.68rpx',country_en:'SouthAmerica'},
     {class:'dayangzhou',heigth:'93.76rpx',name:'大洋洲',top:'93.76rpx',country_en:'Oceania'},
    ],
    mapindex:0,
    name:'欧洲'
  },
  mappick:function(index){
    var {map,mapindex} = this.data;
    map[index].top=map[index].heigth;
    map[mapindex].top=0;
    this.setData({map:map,name:map[mapindex].name});
    this.mude({name:map[mapindex].name,names:map[mapindex].country_en});
  },
  maptab:function(e){
    var {mapindex} = this.data;
    var index = e.currentTarget.dataset.index;;
    this.setData({mapindex:index});
    this.mappick(mapindex);
  },
  mude:function(name){
    mudidi(name).then(r=>{
      this.setData({ouzhou:r})
    })
  },
  input:function(e){
    mudedi_sousuo(e.detail.value).then(r=>{
      console.log(r)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mappick(0)
    this.mude({name:'欧洲',names:'Europe'});
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