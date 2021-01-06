<!--comment/swiper/swiper.wxml-->
<template>
	<view class="box">
		<page-meta>
			<navigation-bar :title="nbTitle" :front-color="nbFrontColor" :background-color="nbBackgroundColor"
			 :color-animation-duration="'2000'" color-animation-timing-func="easeIn" />
		</page-meta>
		<view class="navhead" v-show="show">
			<template v-for="item in titlelist">
				<view :class="item.c">{{item.title}}</view>
			</template>
		</view>
		 <view class="item">
			<image :src="swiperList.product_base_info.pro_pic_url"></image>
			<view>
				{{swiperList.product_base_info.pro_title}}
			</view>
			<view class="text">
				<text>适宜季节</text>
				<text>
					<block v-for="item in seasonList">
						<text>{{item.season}}、</text>
					</block>
				</text>
			</view>
			<view class="text">
				<text>主题</text>
				<text>
					<block v-for="item in typeList" >
						<text>{{item.type}}、</text>
					</block>
				</text>
			</view>
			<view class="sigalprice">
				<view>单价</view>
				<view>{{swiperList.product_base_info.amount}}元起</view>
				<view>0元起</view>
			</view>
			<view class="sigalprice">
				<view>人数</view>
				<view>{{swiperList.product_details_info.pon_num_end}}成人</view>
				<view>0元起</view>
			</view>
			<view class="text">
				<view>日期</view>
				<view>
					{{swiperList.product_base_info.end_date}}
				</view>
			</view>
			<view class="text">
				<view>出发</view>
				<view>
					{{swiperList.product_base_info.end_date}}
				</view>
			</view>
			<view class="text">
				<view>周期</view>
				<view>
					<text>{{swiperList.product_base_info.routing_dat}}天</text>
					<text>{{swiperList.product_base_info.routing_nigth}}晚</text>
				</view>
			</view>
			<view class="text">
				<view>商家</view>
				<view>
					{{swiperList.seller_nick_name}}
				</view>
			</view>
		</view>
		<view class="xingcheng">
			<view class="activetitle">{{titlelist[0].title}}</view>
			<block v-for="item in swiperList.product_base_info.product_trip_head">
				<view class="xingchengbox">
					<view>D{{item.day}}</view>
					<view>
						<view>{{item.trip_way}}</view>
						<view>住宿地:{{item.stay_name}}</view>
					</view>
				</view>
			</block>
		</view>
		<view>
			<view class="hang">行程亮点</view>
			<!-- <view class="page-section page-section-spacing swiper">
				<swiper style="height:600px" autoplay="{{autoplay}}" duration="{{duration}}" bindchange="chang">
					<block wx:for="{{swiperList.product_base_info.product_bright}}" wx:key="index">
						<swiper-item>
							<view class="swiper-item {{item}}">
								<image src="{{item.photoUrl}}"></image>
								<view class="contian">
									<view style="float:right;font-size:27px;font-weight: bold;">{{item.name}}</view>
									<view style="text-indent:2em;clear:both;">{{item.bright}}</view>
								</view>
							</view>

						</swiper-item>
					</block>
				</swiper>
				<view class="jiaotop"><text>{{1+index}}/{{swiperList.product_base_info.product_bright.length}}</text></view>
				<view class="jiaobottom"></view>
			</view> -->
			
			<view class="uni-padding-wrap">
			    <view class="page-section swiper">
			        <view class="page-section-spacing">
			            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			                <swiper-item v-for="item in swiperList.product_base_info.product_bright" >
								<navigator :url="'../../comment/detail/detail?id='+item.productId">
									<view class="swiper-item uni-bg-red" >
										<image :src="item.photoUrl"></image>
										<view class="contian">
											<view style="float:right;font-size:27px;font-weight: bold;">{{item.name}}</view>
											<view style="text-indent:2em;clear:both;">{{item.bright}}</view>
										</view>
									</view>
								</navigator>
			                </swiper-item>
			            </swiper>
			        </view>
			    </view>
			</view>
		</view>
		<view class="xiangqing">
			<view class="activetitle">{{titlelist[1].title}}</view>
			<view class="txt">Day1</view>
			<view style="padding:10px">
				<text>{{swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripCityVos[0].cityName}}</text>
				<text style="padding-left:10px">{{swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripCityVos[1].cityName}}</text>
			</view>
			<view>
				<template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template>
				<template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template><template v-for="item in swiperList.product_details_info.product_trip_details[0].newProductTripWayVO.tripFlyVo">
					<view class="flight">
						<view>
							<view>{{item.out_time}}</view>
							<view>{{item.startCity}}</view>
						</view>
						<view>
							<view>{{item.vehicle_no}}</view>
							<!-- <image src="../../images/feiji.png"></image> -->
						</view>
						<view>
							<view>{{item.arrive}}</view>
							<view>{{item.endCity}}</view>
						</view>
					</view>
				</template>
			</view>
		</view>
		<view class="activetitle">{{titlelist[2].title}}</view>
	 
	</view>
</template>
<script>
	// comment/swiper/swiper.js
	import http from '../../utils/http.js'

	export default {
		/**
		 * 页面的初始数据
		 */
		data() {
			return {
				indicatorDots: true,
				vertical: false,
				autoplay: true,
				duration: 300,
				interval:2000+"",
				id: "",
				swiperList: {},
				nbFrontColor: '#000000',
				nbBackgroundColor: '#ffffff',
				seasonList: [],
				typeList: [],
				titlelist: [{
						title: '行程概要',
						id: '#gaiyao',
						c: ''
					},
					{
						title: '行程详情',
						id: '#xiangqing',
						c: ''
					},
					{
						title: '行程途径',
						id: '#tujing',
						c: ''
					},
				],
				show: false,
				index: null
			}
		},

		onPageScroll: function(e) {
			 var titlelist = this.titlelist;
			
			var que = uni.createSelectorQuery();
			que.selectAll(".activetitle").boundingClientRect(res => {
				res.forEach((e, index) => {
					if (e.top < 30) {
						titlelist.forEach((i, inde) => {
							i.c = inde == index ? 'active' : ''
						})
					}
				})
				this.titlelist=titlelist

			}).exec();

			if (e.scrollTop >= 450) {
				this.show=true
			} else {
				this.show= false
			} 
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			
			console.log(options,"------------");
			
			this.nbTitle='产品详情',
			this.nbFrontColor='#ffffff',
			this.nbBackgroundColor='#000000',
			this.id=options.id
			// 获取轮播图的某个列表数据
			http(null, null, `/product/product/getProductDetails/` + this.id)
				.then((data)=> {
					console.log(data);
					this.swiperList=data.data,
					this.seasonList=data.data.product_base_info.product_season,
					this.typeList=data.data.product_base_info.product_type
				}, function() {
					console.log("失败了没有");
				})
		},
		methods: {
			chang: function(e) {
				this.setData({
					index: e.detail.current
				})
			}
		}
	}
</script>






<style>
	/* comment/swiper/swiper.wxss */
	.box {
		height: 2000px;
	}

	.item {
		font-size: 12px;
		line-height: 30px;
	}

	.item image {
		width: 100%;
	}

	.item>view:nth-child(2) {
		text-align: center;
		background-color: #eee;
		padding: 5px;
		margin-top: -10px;
	}

	.item view {
		border-bottom: 1px solid #eee;
	}

	.item .text {
		display: flex;
		justify-content: space-between;
		padding: 0px 10px;
	}

	.item .sigalprice {
		display: flex;
		justify-content: space-around;

	}

	.sigalprice view {
		width: 30%;
		border-right: 1px solid #ccc;
		padding: 0px 10px;
	}

	.item .textalgin {
		display: flex;
		justify-content: space-around;
	}

	.xingcheng {
		text-align: center;
	}

	.xingcheng>view:first-child {
		border: 1px solid #eee;
		width: 100%;
		line-height: 100rpx;

	}

	.xingchengbox {
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 1px dashed #a8a8a8;
		margin: 10px 5px;
		padding-bottom: 10px;
		color: #848484;
	}

	.xingchengbox>view:first-child {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background: #758082;
		color: #fff;
		line-height: 100rpx;
	}

	.xingchengbox view:last-child {
		margin-left: 10px;
		word-wrap: break-word;
	}

	.xingchengbox view:last-child view:last-child {
		font-size: 12px;
	}

	.navhead {
		position: fixed;
		top: 0;
		width: 750rpx;
		height: 50px;
		line-height: 50px;
		display: flex;
		justify-content: space-around;
		text-align: center;
		border: 1px solid #eee;
		background: #fff;
		z-index: 999;
	}

	.navhead>view {
		width: 250rpx;
	}

	.active {
		border-bottom: 4px solid #445356;
		color: #364244;
	}

	.swiper swiper {
		height: 900rpx;
	}

	.swiper image {
		width: 700rpx;
		height: 900rpx;
		margin-left: 12px;
	}

	.contian {
		color: #7a7a7a;
	}

	.page-section {
		position: relative;
	}

	.jiaotop {
		width: 310rpx;
		height: 85px;
		position: absolute;
		top: 0;
		z-index: 555;
		background-image: url('http://www.51houniao.com/wx/customer/classic/lib/images/bright_bg_top.png');
		background-repeat: no-repeat;
		background-size: 100%;
		opacity: 0.8;
	}

	.jiaotop text {
		padding-left: 25px;
		font-size: 30px;
	}

	.jiaobottom {
		width: 725rpx;
		height: 358rpx;
		position: absolute;
		bottom: 148px;
		right: 0;
		z-index: 555;
		background-image: url('http://www.51houniao.com/wx/customer/classic/lib/images/bright_bg_bottom.png');
		background-size: 100%;
		background-repeat: no-repeat;
	}


	.hang {
		width: 390rpx;
		height: 60px;
		margin: 0 auto;
		text-align: center;
		line-height: 40px;
		background-image: url('http://www.51houniao.com/wx/customer/classic/images/title_bg_03.png?v=89d4336');
		background-repeat: no-repeat;
	}

	.xiangqing {
		text-align: center;
	}

	.xiangqing .txt {
		width: 285rpx;
		display: inline-block;
		font-family: 'SingleMaltaRegular';
		color: #445356;
		font-size: 35px;
		border-bottom: 1px solid #dddcdc;
		padding: 10px 0;
	}

	.flight {
		display: flex;
		justify-content: space-around;
		padding: 10px 0;
		color: #10b2c1;
	}

	.flight view:nth-child(2) image {
		width: 123rpx;
		height: 14px;
	}

	.flight view:nth-child(2) view {
		color: #445356;
	}
</style>
