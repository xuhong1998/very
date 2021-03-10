<template>
  <div class="menu">
    <div
      class=""
      v-for="(item, index) in menuData"
      :key="index"
    >
      <div class="menu-item">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const menuData = [
      {
        title: "常用网站",
        url: "",
      },
      {
        title: "视频网站",
        url: "",
      },
      {
        title: "其他网站",
        url: "  ",
      },
    ];
    const isCollapse = ref(true);
    return {
      menuData,
      isCollapse,
    };
  },
};
</script>

<style lang='scss'>
.menu {
  display: none;
	width: 10vw;
  height: 100%;
	border-right: solid 1px #fff;
}
</style>