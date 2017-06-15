<template>
	<div class="list">
		<list-header></list-header>
		<side-bar></side-bar>
		<div v-if="showSidebar" class="sidebar-mask" @click="hide"></div>
		<router-view></router-view>
	</div>
</template>

<script>
import { mapState } from 'vuex'

import listHeader from '../components/list-header'
import sideBar from '../components/sidebar'

export default {
	computed: {
		...mapState({
			showSidebar: state => state.showSidebar
		})
	},
	data() {
		return {
			
		}
	},
	methods: {
		hide() {
			this.$store.commit('toggle', false)
		}
	},
	components:{
		listHeader,
		sideBar
	}
}
</script>

<style lang="less">
@yellow: #FFD300;
@blue: #5B7492;
@gray: #acb9c8;

.loading {
    width: 25%;
    height: 0.4rem;
    margin: 25% auto 0;
    position: relative;
    span {
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        position: absolute;
        background: @blue;
        transform: translate(-50%,0);
    }
    .left {
        background: @yellow;
        animation: lMove 2.5s ease infinite;
    }
    .middle {
        left: 50%;
        animation: mMove 2.5s ease infinite;
    }
    .right {
        left: 100%;
        background: @gray;
        animation: rMove 2.5s ease infinite;
    }
}
@keyframes lMove {
    0% {
        left: 0;
    }
    25% {
        left: 50%;
        background: @yellow;
    }
    50% {
        left: 100%;
        background: @blue;
    }
    75% {
        left: 50%;
        background: @gray;
    }
    100% {
        left: 0;
    }
}
@keyframes mMove {
    0% {}
    25% {
        background: @blue;
    }
    50% {
        background: @yellow;
    }
    75% {
        background: @blue;
    }
    100% {}
}
@keyframes rMove {
    0% {
        left: 100%;
    }
    25% {
        left: 50%;
    }
    50% {
        left: 0;
        background: @gray;
    }
    75% {
        left: 50%;
        background: @yellow;
    }
    100% {
        left: 100%;
    }
}
.list{
	margin-top: 50px;
}
.sidebar-mask{
  position: fixed;
  transform: translateZ(0);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.7);
}
</style>