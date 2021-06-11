<template>
  <div class="single-nav-bar-box">
    <div class="single-nav-bar-title">{{ titleName }}</div>
    <div class="is-button" v-show="isButton">
      <el-button icon="el-icon-arrow-left">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleNavBar",
  props: {
    titleName: String,
    isButton: {
      typeof: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.single-nav-bar-box {
  width: 100%;
  overflow: hidden;
  background-color: #f3f3f3;
  border: 1px solid #e4e4e4;
}
.single-nav-bar-box div {
  float: left;
}
.single-nav-bar-title {
  /* width: 20%; */
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 1%;
}
.is-button {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 80%;
}
</style>
