<template>
  <div class="my-input">
    <div v-show="isStart" class="left-top-start">*</div>
    <div class="input-lable" :style="{ width: labelwidth + 'px' }">
      {{ lableName }}：
    </div>
    <div class="my-input-box">
      <el-input v-model="input" :placeholder="placeName"></el-input>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    lableName: String,
    placeName: String,
    isStart: {
      typeof: Boolean,
      default: false,
    },
    labelwidth: {
      typeof: String,
      default: "100",
    },
  },
  setup() {
    return {
      input: ref(""),
    };
  },
});
</script>

<style scoped>
.my-input div {
  float: left;
  /* border: 1px solid rgb(191, 241, 10); */
}
.input-lable {
  width: 100px;
  margin-top: 9px;
}
.my-input-box {
  width: 180px;
}
.left-top-start {
  color: #f8a5a3;
  margin-top: 5px;
  margin-right: 2px;
}
</style>
