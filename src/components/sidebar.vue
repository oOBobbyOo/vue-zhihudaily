<template>
  <div class="sidebar-box" :class="{'show-sidebar':showSidebar}">
    <div class="sidebar-header">
      <div class="user">
        <img src="../assets/user-default.jpg" alt="">
        <p>Bobby</p>
      </div>
      <div class="function">
        <div class="function-sub">
          <i class="iconfont icon-wujiaox"></i>
          <p>我的收藏</p>
        </div>
        <div class="function-sub">
          <i class="iconfont icon-xiazai"></i>
          <p>离线下载</p>
        </div>
      </div>
    </div>
    <div class="sidebar-list">
      <p class="sidebar-list-first" @click="jump"><i class="iconfont icon-shouye_shouye"></i>首页</p>
      <ul class="sidebar-list-ul">
        <li class="sidebar-list-li" v-for="(item,index) in list" :key="index" @click="change(item.id)">
          <p>{{item.name}}</p>
          <div>+</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import api from '../api/index'

export default {
  computed: {
    ...mapState({
      showSidebar: state => state.showSidebar
    })
  },
  data () {
    return {
      list: []
    }
  },
  mounted: function() {
      let vue = this;
      api.getTopics().then(function(data) {
          vue.list = data.data.others;
      });
  },
  methods: {
      jump(){
        this.$router.push({name: 'default'})
        this.$store.commit('toggle', false) 
      },
      change(id) {
        this.$router.push({name: 'theme', params: {id: id}})
        this.$store.commit('toggle', false) 
      }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-box{
  position: fixed;
  transform: translateZ(0);
  height: 100%;
  overflow: auto;
  width: 290px;
  left: -290px;
  z-index: 99;
  top: 0;
  bottom: 0;
  transition: all .3s ease;
  &.show-sidebar{
    transform: translateX(290px);
  }
  .swiper-slide {
    font-size: 15px;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}
.sidebar-box{
  .sidebar-header{
    padding: 15px;
    background: #00A2EA;
    .user{
      display: flex;
      flex-direction: row;
      >img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      >p{
        margin-left: 20px;
        line-height: 30px;
        flex: 1;
        font-size: 18px;
        font-weight: 300;
        color: #ffffff;
      }
    }
  }
  .function{
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    color: #ffffff;
    .function-sub{
      padding-left: 52px;
      flex: 1;
      font-size: 13px;
      font-weight: 300;
      position: relative;
      >i{
        position: absolute;
        top: 0;
        left: 20px;
      }
    }
  }
}

.sidebar-list{
  padding-bottom: 20px;
  background: #f9f9f9;
  .sidebar-list-first{
    background: #f9f9f9;
    color: #00A2EA;
    height: 47px;
    line-height: 47px;
    font-size: 15px;
    padding-left: 55px;
    position: relative;
    >i{
      color: #00A2EA;
      font-size: 20px;
      position: absolute;
      top: 0px;
      left: 20px;
    }
  }
  .sidebar-list-li{
    height: 47px;
    line-height: 47px;
    display: flex;
    flex-direction: row;
    padding-left: 15px;
    >p{
      flex: 1;
    }
    >div{
      padding-right: 40px;
      font-size: 25px;
      font-weight: 200;
      color: #868686;
    }
  }
}
</style>
