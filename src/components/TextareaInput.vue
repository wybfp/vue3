<template>
  <div class="my-input">
    <div v-show="isStart" class="left-top-start">*</div>
    <div class="input-lable">{{ lableName }}：</div>
    <div class="my-input-box " :style="{ width: boxwidth + 'px' }">
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 10 }"
        v-model="textarea"
        :placeholder="placeName"
      ></el-input>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TextareaInput",
  props: {
    lableName: String,
    placeName: String,
    isStart: {
      typeof: Boolean,
      default: false,
    },
    boxwidth: {
      typeof: Number,
      default: 500,
    },
  },
  setup() {
    return {
      textarea: ref(""),
    };
  },
});
</script>

<style scoped>
.my-input {
  width: 160%;
  /* border: 1px solid rgb(191, 241, 10); */
}
.my-input div {
  float: left;
  /* border: 1px solid rgb(191, 241, 10); */
}
.input-lable {
  width: 100px;
  margin-top: 9px;
}
.my-input-box {
  /* width: 500px; */
  /* border: 1px solid rgb(191, 241, 10); */
}

.left-top-start {
  color: #f8a5a3;
  margin-top: 5px;
  margin-right: 2px;
}
</style>
