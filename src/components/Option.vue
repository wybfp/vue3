<template>
  <div class="my-option">
    <div v-show="isStart" class="left-top-start">*</div>
    <div class="option-lable" :style="{ width: labelwidth + 'px' }">
      {{ lableName }}：
    </div>
    <div class="option-content">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in myOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Option",
  props: {
    lableName: String,
    myOptions: Object,
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
      value: ref(""),
    };
  },
});
</script>

<style scoped>
.my-option div {
  float: left;
  /* border: 1px solid rgb(191, 241, 10); */
}
.option-lable {
  /* width: 100px; */
  margin-top: 9px;
}
.option-content {
  width: 190px;
}
.left-top-start {
  color: #f8a5a3;
  margin-top: 5px;
  margin-right: 2px;
}
</style>
