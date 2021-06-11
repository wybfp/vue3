<template>
  <div id="navbar">
    <span class="navbar-title">电力用户智能交互系统</span>
    <div class="navbar-right">
      <i class="el-icon-bell"></i>
      <el-avatar :src="require('../assets/img/user.png')"></el-avatar>
      <span class="username">name</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const name = ref("admin");
    return {
      name,
    };
  },
});
</script>

<style scoped>
#navbar {
  width: 100%;
  overflow: hidden;
  background-color: #f3f3f3;
  border: 1px solid #e4e4e4;
}
.navbar-title {
  width: 20%;
  margin-top: 1%;
  margin-bottom: 0.5%;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding-left: 1%;
  /* border: 1px solid black; */
}
.navbar-right {
  float: right;
  width: 10%;
  padding-top: 0.5%;
  /* 
  border: 1px solid black; */
}
.el-icon-bell {
  font-size: 25px;
  float: left;
  margin-top: 5%;
  margin-right: 7%;
}
.navbar-right span {
  float: left;
}
.navbar-right .username {
  padding-left: 3%;
  padding-top: 7%;
  text-align: center;
}
</style>
