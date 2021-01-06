// 发现页
const http = require('./http')
exports.faxian = data=>{
  return http(null,null,`/requirement/destination/countries/${data}`)
}
exports.faxiansousuo=data=>{
  return http(null,null,`/requirement/destination/getCountriesByKeyWord/${data}`)
}
exports.faxians=data=>{
  return http('post',{product_type: 1,request_season: [data]},
  `/requirement/request/getMatchedProducts`,)
}
// 目的地
exports.mudidi = data=>{
  return http(null,null,`/product/desc/CountryList/${data.name}/${data.names}`)
}
// 目的地搜索
exports.mudedi_sousuo = data=>{
  return http(null,null,`/product/desc/getCountriesByKeyWord/`+data)
}

