<template>
	<view >
		 <view>
		        <view class="uni-padding-wrap">
		            <view class="page-section swiper">
		                <view class="page-section-spacing">
		                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		                        <swiper-item v-for="item in swiperList" >
									<navigator :url="'../../comment/detail/detail?id='+item.productId">
										<view class="swiper-item uni-bg-red" >
											<image :src="item.photoUrl"></image>
										</view>
									</navigator>
		                        </swiper-item>
		                    </swiper>
		                </view>
		            </view>
		        </view>
		    </view>

	  <view class="head-icon">
	      <!-- <image src='/static/images/title-img.png'  /> -->
	      
	    </view>
	    <view style='text-align:center'>推荐</view>
	    
	      <template v-for="item in productList"  >
	          <view class="product">
	            <view class="p-box">
	              <image :src="item.proPicUrl"></image>
	              <view>{{item.collectionNum}}</view>
	            </view>
	            <view class="contian">
	              <view>{{item.proTitle}}</view>
	              <!-- <view><image src="../../images/n-4.png"></image>{{item.country}}</view> -->
	              <view>
	              <view class="time">
	                <text>{{item.routingDat}}天{{item.routingNigth}}晚</text>
	                <text>￥{{item.amount}}起</text>
	              </view>
	              </view>
	            </view>
	          </view>
	      </template>
	     <view class="uni-padding-wrap">
	         <view class="page-section swiper">
	             <view class="page-section-spacing">
	                 <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
	                     <swiper-item v-for="item in footerswiper" >
	                         <view class="swiper-item uni-bg-red" >
	     						<image :src="item.pro_pic_url"></image>
	     					</view>
	                     </swiper-item>
	                 </swiper>
	             </view>
	         </view>
	     </view>
	    <view style="text-align:center">猜你喜欢</view>
	    <view class="like">
	    <template v-for="item in youLikeList" >
	        <view class="like-box">
	          <image :src="item.proPicUrl"></image>
	          <view class="contian">
	              <view>{{item.proTitle}}</view>
	              <view><image src="/static/images/n-4.png"></image>{{item.country}}</view>
	              <view>
	              <view class="time">
	                <text>{{item.routingDat}}天{{item.routingNigth}}晚</text>
	                <text>￥{{item.amount}}起</text>
	              </view>
	              </view>
	        </view>
	        </view>
	    </template>
	  </view> 
	
	</view>
	
</template>
<script>
	import http from '../../utils/http.js'
	export default {
	  data(){
		  return {
			indicatorDots: true,
			vertical: false,
			autoplay: true,
			interval: 2000,
			duration: 500,
			swiperList:[],
			productList:[],
			footerswiper:[],
			youLikeList:[],
			background: ['color1', 'color2', 'color3'],
		  }
	  },
	  //事件处理函数
	  
	  onLoad: function () {
	    // 获取头部轮播图数据
		console.log("that",this);
	    http(null,null,"/product/banner/getBySeller/4bc4027c645343f09a964b5c2e9f875b")
	    .then((data)=>{
	      console.log(data);
		  
		  this.swiperList = data.data;
	    },function(){
	       console.log("失败了没有");
	    })
	   
	    // 旅游列表
	    let param ={
	      desc: false,
	      orderBy: "top",
	      pageNow: 1,
	      pageSize: 20
	    };
	    http("POST",param,"/product/product/getProductRecommendUser")
	    .then((data)=>{
	      console.log(data);
	        this.productList = data.data
	    },function(){
	       console.log("失败了没有");
	    })

	    param ={
	        desc: false,
	        orderBy: "outtime",
	        pageSize: 100,
	        product_type: 2
	      };
	      http("POST",param,"/requirement/request/getMatchedProducts")
	      .then((data)=>{
	        console.log(data);
	         this.footerswiper=data.data.matchedProducts
	      },function(){
	         console.log("失败了没有");
	      })
	    // 猜你喜欢列表
	    http(null,null,"/product/product/guessYouLike")
	    .then((data)=>{
	      console.log(data);
	        this.youLikeList = data.data
	    },function(){
	       console.log("失败了没有");
	    })
	  }
	}
	
</script>
<style>
	/**index.wxss**/
	.swiper swiper{
	  height:375rpx;
	}
	.swiper image{
	  width:750rpx;
	  height:375rpx;
	  
	}
	.search{
	  width: 100rpx;
	  height: 100rpx;
	  background-repeat: no-repeat;
	  background-size: 100%;
	  position: fixed;
	  z-index: 999;
	  top: 50px;
	  background-color:rgba(242,242,242,.95);
	  background-position: 200px 50px;
	}
	.head-icon image{
	  width: 100%;
	  height: 80px;
	
	}
	.product{
	  display: flex;
	  padding: 5px;
	  border-bottom: 1px dotted #ccc;
	  font-size: 12px;
	
	}
	.product .p-box image{
	  width: 300rpx;
	  height: 70px;
	}
	.p-box{
	  position: relative;
	}
	.product .p-box view{
	  position: absolute;
	  right: 5px;
	  bottom: 7px;
	  color: #fff;
	}
	.contian{
	  line-height: 25px;
	  margin-left: 10px;
	}
	.product .contian view:nth-child(2) {
	  display: inline-block;
	  background-color: #ccc;
	  border-radius: 10px;
	  padding: 0 3px;
	}
	.product .contian view:nth-child(2) image{
	  width: 10px;
	  height: 10px;
	  padding-right: 5px;
	}
	.contian view:last-child text:last-child{
	  padding-left: 20px;
	}
	.like{
	  display: flex;
	  justify-content: space-around;
	  flex-wrap: wrap;
	}
	.like-box{
	  width: 45%;
	  height: 150px;
	  border: 1px solid #ccc;
	  box-sizing: border-box;
	  box-shadow: 5px 5px 5px #ccc;
	  margin: 5px;
	}
	.like-box image{
	  width: 300rpx;
	  height: 70px;
	}
	.like-box .contian{
	  line-height: 25px;
	  font-size: 12px;
	}
	.like-box .contian view:first-child{
	  overflow: hidden;
	  text-overflow:ellipsis; 
	  white-space: nowrap;
	}
	.like-box .contian view:nth-child(2) {
	  display: inline-block;
	  background-color: #ccc;
	  border-radius: 10px;
	  padding: 0 3px;
	}
	.like-box .contian view:nth-child(2) image{
	  width: 10px;
	  height: 10px;
	  padding-right: 5px;
	}
	.contian view:last-child text:last-child{
	  padding-left: 20px;
	}
</style>