<template>
	<div class="loading" v-if="!loading">
    <span class="left"></span>
    <span class="middle"></span>
    <span class="right"></span>
	</div>
	<div v-else>
		<swiper :options="swiperOption" class="swiper-box">
			<swiper-slide v-for="(item,index) in tops" :key="index">
				<div class="swiper-box-img" :style="{ backgroundImage: 'url(' + item.image + ')' }" ></div>
				<div class="swiper-box-title">{{item.title}}</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="list-box" v-for="(item,index) in allStories">
		    <ul>
		     	<h2 class="list-box-title">{{item.date | dateTime}}</h2>
	 	      <list-c v-for="(subItem,key) in item.stories" :item="subItem" :key="key"></list-c>
		    </ul>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import api from '../api/index'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { dateTime } from '../filters'
import listC from '../components/list-c'

export default {
	data() {
		return {
			loading: false,
			tops: [],
			allStories: [],
			swiperOption: {
			  autoplay: 3500,
			  pagination : '.swiper-pagination',
			  paginationClickable :true
			}
		}
	},
	mounted() {
		this.getList(1)
	},
	methods: {
		getList(type) {
		    var vue = this;
		    if (type) {
		        api.getNews().then(function(data) {
		            vue.tops = data.data.top_stories;
		            vue.allStories.push(data.data);
		            vue.loading = true;
		        });
		    } else {
		        api.getNewsByDate(vue.GetDate(vue.count)).then(function(data) {
		            vue.allStories.push(data.data);
		            vue.loading = true;
		        });
		    }
		}
	},
	filters: {
		dateTime
	},
	components: {
		swiper,
		swiperSlide,
		listC
	}
}
</script>

<style lang="less" scoped>
.swiper-box{
	height: 8rem;
	&-img{
		width: 100%;
		height: 100%;
		background-size: 100%;
		background-position: 50%;
		background-repeat: no-repeat;
	}
	&-title{
		position: absolute;
	    bottom: .613rem;
	    line-height: 1.2;
	    left: 0;
	    padding: 0 .48rem;
	    font-weight: 300;
	    font-size: .56rem;
	    color: #fff;
	}
}
.list-box{
  padding: 10px 5px 0 5px;
  background: #f2f2f2;

  &-title{
    color: #76787e;
    margin-left: 15px;
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: 500;
  }
}

.list-detail-box{
  position: relative;
  min-height: 63px;
  width: 97%;
  margin: 8px auto 0 auto;
  background: #ffffff;
  padding: 13px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  border-bottom: 1px solid #d0d0d0;
  .list-content-box{
    margin-right: 10px;
    flex: 1;
    >p{
      font-size: 17px;
      line-height: 1.2;
    }
    .time{
      position: absolute;
      bottom: 10px;
      left: 13px;
      font-size: 13px;
      color: #b0b0b0;
    }
  }
  .list-img-box{
    position: relative;
    width: 75px;
    height: 70px;
    >img{
      width: 75px;
      height: 70px;
    }
    .tip{
      color: #ffffff;
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 10px;
      padding: 2px 4px;
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>