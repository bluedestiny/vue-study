<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 1.3s ease;
}
.slide-fade-leave-active {
  transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active 用于 2.1.8 以下版本 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<template>
  <div id="firstcomponent">
    <h1>I am a title.</h1>
    <a> written by {{ author }} </a>
    <button v-on:click = "show = !show">点我</button>
    <transition  name = "slide-fade">
	    <p v-show = "show" v-bind:style = "styleobj">动画实例</p>
	</transition>
		<el-alert
	    title="成功提示的文案"
	    type="success">
	  </el-alert>
	  <el-alert
	    title="消息提示的文案"
	    type="info">
	  </el-alert>
	  <el-alert
	    title="警告提示的文案"
	    type="warning">
	  </el-alert>
	  <el-alert
	    title="错误提示的文案"
	    type="error">
	  </el-alert>
  </div>
</template>
 
<script type="text/javascript">
export default {
  data () {
    return {
        author: "微信公众号 jinkey-love",
        show:true,
	    styleobj :{
	        fontSize:'30px',
	        color:'red'
	    }
    }
  }
}
</script>
 
<style>
</style>