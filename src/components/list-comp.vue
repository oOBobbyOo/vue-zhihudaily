<template>
  <li class="list-detail-box">
    <div class="list-content-box">
      <p>{{item.title}}</p>
      <p class="time" v-if="item.display_date">{{item.display_date}}</p>
    </div>
    <div v-if="item.images" class="list-img-box">
      <img :src="item.images[0] | replaceUrl" alt="">
      <p v-if="item.multipic" class="tip"><i class="iconfont">&#xe61c</i>多图</p>
    </div>
  </li>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['item'],
  computed: {
    
  },
  data () {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
