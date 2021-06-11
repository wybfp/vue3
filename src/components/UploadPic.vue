<template>
  <div class="my-input">
    <div v-show="isStart" class="left-top-start">*</div>
    <div class="input-lable">{{ lableName }}：</div>
    <div class="my-upload-box">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
    <div class="upload-pic-place">{{ placeName }}：</div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UploadPic",
  props: {
    lableName: String,
    placeName: String,
    isStart: {
      typeof: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      dialogImageUrl: ref(""),
      dialogVisible: ref(false),
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
.upload-pic-place {
  margin-top: 80px;
  color: #c5c5c5;
}
</style>
