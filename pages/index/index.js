//index.js
//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    num: -1,
    content: '干垃圾',
    message: [
      {
        id: '1149885783951450114',
        cid: "0",
        text: "干垃圾",
        typeStyle: "hotStyle"
      },
      {
        id: '1149885784190525442',
        cid: "1",
        text: '可回收物',
        typeStyle: "circleStyle"
      },
      {
        id: '1149885784354103297',
        cid: "2",
        text: '湿垃圾',
        typeStyle: "weatStyle"

      },
      {
        id: '1149886649873944578',
        cid: "3",
        text: '有害垃圾',
        typeStyle: "harmfulStyle"
      }, {
        id: '1149886650196905986',
        cid: "4",
        text: '大件垃圾',
        typeStyle: "bigStyle"
      }, {
        id: '1149895870229204993',
        cid:"5",
        text: '建筑垃圾',
        typeStyle: "buildStyle"
      }
      
    ],
    searchResult:[
    ]
  },
  clickList: function (e) {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 3000
    });
    this.setData({
      num: -1
    })
    var that = this;
    let num = e.target.id
    console.log(num)
    this.setData({
      num: num
    })
    let id = e.target.id;
    wx.request({
      url: 'https://joneyancode.cn:8088/garbage/search',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        'typeId': id,
        'searchType': 'type_id'
      },
      success(res) {
        wx.showToast({
          title: '已完成',
          icon: 'success',
          duration: 3000
        });
        console.log(res);
        let backArray = res.data.data.garbageSearchVOS;
        console.log(backArray);
        that.setData({
          searchResult: backArray
        });
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  searchGarbage: function (e) {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 3000
    });
    this.setData({
      num:-1
    })
    var that =this;
    wx.request({
      url: 'https://joneyancode.cn:8088/garbage/search',
      method:'POST',
      header: {
        'content-type':'application/json'
      },
      data:{
        'keyWord':e.detail.value,
        'searchType':'key_word'
      },
      success(res){
        wx.showToast({
          title: '已完成',
          icon: 'success',
          duration: 3000
        });
        console.log(res);
        let backArray = res.data.data.garbageSearchVOS;
        console.log(backArray);
        that.setData({
          searchResult:backArray
        });
      }
    })
  },
  
  openToast: function () {
    wx.showToast({
      title: '已完成',
      icon: 'success',
      duration: 500
    });
  },
  openLoading: function () {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 3000
    });
  }
})
// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
