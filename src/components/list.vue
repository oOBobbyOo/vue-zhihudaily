<template>
    <li class="list-detail-box" @click="change(item.id)">
        <div class="list-content-box">
            <p>{{item.title}}</p>
            <p class="time" v-if="item.display_date">{{item.display_date}}</p>
        </div>
        <div v-if="item.images" class="list-img-box">
            <img :src="item.images[0]" alt="">
            <p v-if="item.multipic" class="tip"><i class="iconfont"></i>多图</p>
        </div>
    </li>
</template>
<script>
import {
    mapState
} from 'vuex'

export default {
    props: ['item'],
    computed: {
      
    },
    data() {
        return {

        }
    },
    methods: {
      change(id) {
          let path = 'detail';
          this.$router.push({
              path: path,
              query: {
                  id: id || ""
              }
          });
      }
    }
}
</script>
<style lang="less" scoped>
.iconfont {
  font-family:"iconfont";
  font-size: 10px;
  font-style:normal;
  color: #ffffff;
  margin-right: 3px;
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
