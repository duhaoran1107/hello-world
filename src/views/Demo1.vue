<template>
  <div class="demo1">
    <h1>数据绑定v-bind</h1>
    <h2>{{msg}}</h2>
    <a :href="href" :target="target">百度一下</a>
  </div>
</template>
<script>
export default {
  name: "demo1",
  data() {
    return {
      msg: "",
      href: "https://www.baidu.com",
      target: "_blank"
    };
  },
  mounted() {
    this.msg = "This is an demo1 page";
    setTimeout(() => {
      this.msg = "这是三秒后的数据";
    }, 3000);
  }
};
</script>