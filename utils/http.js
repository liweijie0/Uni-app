const baseUrl = require('./config').dev.baseUrl;
export default function(method,param,url,){
  let fullUrl = baseUrl + url;
  return new Promise(function(resolve,reject){
      uni.showLoading({
        title: '加载中',
      })
      uni.request({
        url:fullUrl ,
        method:method?method:'GET',
        data:param?param:{},
        success:function(res){
            resolve(res);
            uni.hideLoading()
        },
        fail:function(res){
          reject(res)
          uni.hideLoading()
        }
      })
  })
}




