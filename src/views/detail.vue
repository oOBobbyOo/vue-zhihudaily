<template>
  <div class="loading" v-if="!loading">
    <span class="left"></span>
    <span class="middle"></span>
    <span class="right"></span>
  </div>
  <div v-else>
  	<div class="detail-main-box">
  		<div class="detail-img-box" :style="{ backgroundImage: 'url(' + data.image + ')' }">
  		  <div class="detail-mask"></div>
  		  <h1 class="detail-title">{{data.title}}</h1>
  		  <p class="detail-image-source">{{data.image_source}}</p>
  		</div>
  		<div class="con-answer" v-html="data.body"></div>
  	</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import api from '../api/index'

export default {
	data() {
		return{
      loading: false,
			data: ''
		}
	},
  mounted() {
    this.getDetails()
  },
	methods: {
		getDetails() {
			let vue = this;
			api.getNewsById(this.$route.params.id).then(function(data) {
				vue.data = data.data;
        vue.loading = true;
			});
		}
	}
}
</script>

<style lang="less">
@yellow: #FFD300;
@blue: #5B7492;
@gray: #acb9c8;
@red: #f00;
.detail-img-box{
  position: relative;
  z-index: 0;
  height: 200px;
  width: 100%;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  .detail-mask{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
    background-image: linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
  }
  .detail-title{
    position: absolute;
    bottom: 23px;
    line-height: 1.2;
    left: 0;
    padding: 0 18px;
    font-weight: 300;
    font-size: 21px;
    color: #ffffff;
  }
  .detail-image-source{
    position: absolute;
    bottom: 8px;
    right: 0;
    padding: 0 18px;
    font-weight: 300;
    font-size: 12px;
    color: #d3d3d3;
  }
}
.section-box{
  padding: 0 20px 25px 20px;
  width: 375px;
  .section-btn{
    background: #f0f0f0;
    width: 335px;
    height: 50px;
    position: relative;
    display: flex;
    flex-direction: row;
    >img{
      width: 50px;
      height: 50px;
    }
    >p{
      flex: 1;
      line-height: 50px;
      margin-left: 10px;
      font-size: 13px;
    }
    .arrow{
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      top: 20px;
      right: 15px;
      border: solid #867e7a;
      border-width: 1px 1px 0 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}

.recommenders-box{
  background: #efefef;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 70px;
  p{
    position: absolute;
    top: 13px;
    left: 20px;
    font-size: 13px;
    font-weight: bold;
  }
  .recommenders-item{
    height: 30px;
    width: 30px;
    margin: 7px;
    >img{
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
  }
}	

.con-answer {
    padding: 5%;
    position: relative;
    h2,
    li,
    p {
        text-align: justify!important;
    }
    h2 {
        color: @blue;
        position: relative;
        z-index: 1;
    }
    a {
        color: @yellow;
        word-break: break-word;
    }
    .headline-title {
        color: @blue;
    }
    .meta {
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        .avatar {
            vertical-align: middle;
            display: inline-block;
            width: 0.6rem;
            margin-right: 0.1rem;
        }
        span {
            color: #666;
        }
        .author {
            color: @red;
            display: inline-table;
        }
    }
    .content {
        font-size: 0.35rem;
    }
    .question {
        blockquote {
            text-align: justify;
            position: relative;
            &::before {
                content: '';
                left: -.5rem;
                display: block;
                height: 100%;
                border-left: .1rem solid @yellow;
                position: absolute;
            }
        }
        &:first-child {
            padding-top: 0;
        }
        &:last-child {
            padding-bottom: 0;
            &::before {
                display: none;
            }
        }
        ul {
            padding-left: 0.3rem;
            li {
                text-align: left;
            }
        }
    }
    .content-image {
        max-width: 100%;
    }
    .view-more {
        text-align: center;
        margin-bottom: .5rem;
        a {
            z-index: 1;
            position: relative;
        }
    }
}

</style>