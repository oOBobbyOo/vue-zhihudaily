<template>
  <div class="list-header" v-if="flag">
    <div class="header-icon" @click="back"><i class="iconfont icon-3"></i></div>
    <div class="header-cont"></div>
    <div class="header-icon"><i class="iconfont icon-fenxiang1"></i></div>
    <div class="header-icon"><i class="iconfont icon-wujiaox"></i></div>
    <div class="header-icon"><i class="iconfont icon-pinglun"></i></div>
    <div class="header-icon"><i class="iconfont icon-dianzan"></i></div>
  </div>
  <div class="list-header" v-else>
    <div class="header-icon" @click="show"><i class="iconfont icon-cote"></i></div>
    <div class="header-cont"><p></p></div>
    <div class="header-icon"><i class="iconfont icon-hongdengtixing"></i></div>
    <div class="header-icon"><i class="iconfont icon-caidanshu"></i></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      flag: state => state.flag
    })
  },
  data () {
    return {
      
    }
  },
  methods: {
    show(){
      this.$store.commit('toggle', true)
    },
    back(){
      this.$router.go(-1);
      this.$store.commit('header', false)
    }
  }
}
</script>

<style lang="less">
.iconfont {
  font-size:19px;
  font-style:normal;
  color: #ffffff;
}
.list-header{
  position: fixed;
  transform: translateZ(0);
  top: 0;
  z-index: 4;
  height: 50px;
  width: 100%;
  background: #00A2EA;
  display: flex;
  flex-direction: row;
  .header-icon{
    flex:1;
    text-align: center;
    >i{
      line-height: 53px;
    }
  }
  .header-cont {
    flex: 6;
    padding-left: 10px;
    >p{
      line-height: 50px;
      color: #ffffff;
      font-size:16px;
    }
  }
}
</style>
