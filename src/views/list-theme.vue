<template>
  <div class="loading" v-if="!loading">
    <span class="left"></span>
    <span class="middle"></span>
    <span class="right"></span>
  </div>
  <div v-else>
    <div class="detail-img-box" :style="{ backgroundImage: 'url(' + list.background + ')' }">
        <div class="detail-mask"></div>
        <h1 class="detail-title">{{list.description}}</h1>
        <p class="detail-image-source">{{list.image_source}}</p>
    </div>
    <div class="editors-box" v-if="editors.length > 0">
        <p>主编</p>
        <div class="editors-item" v-for="item in editors">
            <img :src="item.avatar" alt="">
        </div>
    </div>
    <div class="list-box">
      <ul>
        <list-c v-for="(item,index) in allStories" :item="item" :key="index"></list-c>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import api from '../api/index'
import listC from '../components/list-c'

export default {
  data() {
    return {
      loading: false,
      list: "",
      editors: [],
      allStories: []
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let vue = this;
      this.list = "";
      this.editors = [];
      this.allStories = [];
      api.getTopicsById(this.$route.params.id).then(function(data) {
        console.log(data);
        vue.list = data.data;
        vue.editors = data.data.editors;
        vue.allStories = data.data.stories;
        vue.loading = true;
      })
    }
  },
  components: {
  	listC
  }
}
</script>
<style lang="less" scoped>
.detail-img-box{
  position: relative;
  z-index: 0;
  height: 230px;
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
.list-box{
  padding: 1px 5px 0 5px;
  background: #f2f2f2;
}
.editors-box{
  background: #efefef;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 50px;
  p{
    position: absolute;
    top: 13px;
    left: 15px;
    font-size: 13px;
    font-weight: bold;
  }
  .editors-item{
    height: 30px;
    width: 30px;
    margin: 7px 7px 0 7px;
    >img{
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
  }
}
</style>
