<template>
  <div id="add-broadcase">
    <my-single-nav-bar :titleName="'添加服务'" />
    <div class="add-broadcast-input">
      <div class="add-broadcast-input-flexbox1">
        <my-input :isStart="true" :lableName="'广播名称'" :placeName="''" />
        <my-option
          :isStart="true"
          :lableName="'广播分类'"
          :myOptions="options1"
        />
      </div>
      <div class="add-broadcast-input-flexbox2">
        <my-textarea-input
          :isStart="true"
          :lableName="'发布内容'"
          :placeName="'请输入内容'"
          :boxwidth="800"
        />
      </div>
      <div class="add-broadcast-input-flexbox3">
        <div class="left-top-start">*</div>
        <div class="input-lable">选择接收用户：</div>
        <el-cascader
          v-model="value"
          :options="options2"
          @change="handleChange"
        ></el-cascader>
      </div>
      <div class="add-broadcast-input-flexbox4">
        <my-upload-pic
          :isStart="true"
          :lableName="'上传附件'"
          :placeName="'支持doc、docx、pdf、Excel等文件'"
        />
        <my-option
          :isStart="true"
          :lableName="'选择关联的合约'"
          :myOptions="options3"
          :labelwidth="130"
        />
      </div>
    </div>
    <div class="add-broadcast-botton">
      <el-button type="warning">存草稿</el-button>
      <el-button type="primary" @click="handleInfoView">发布预览</el-button>
      <el-button type="primary">返回</el-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import MySingleNavBar from "../../components/SingleNavBar.vue";
import MyInput from "../../components/Input.vue";
import MyOption from "../../components/Option.vue";
import MyTextareaInput from "../../components/TextareaInput.vue";
import MyUploadPic from "../../components/UploadPic.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AddBroadcase",
  components: {
    MySingleNavBar,
    MyInput,
    MyOption,
    MyTextareaInput,
    MyUploadPic,
  },
  setup() {
    const router = useRouter();
    const method = {
      handleInfoView() {
        router.push({ path: "InfoView" });
      },
    };
    return {
      ...method,
      options1: ref([
        {
          value: "选项1",
          label: "调峰公告",
        },
        {
          value: "选项2",
          label: "政策法规",
        },
        {
          value: "选项3",
          label: "停电公告",
        },
      ]),
      value: ref([]),
      options2: ref([
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
      ]),
      options3: ref([
        {
          value: "选项1",
          label: "关于调峰的合约",
        },
        {
          value: "选项2",
          label: "关于停电的合约",
        },
        {
          value: "选项3",
          label: "停电的长期合约",
        },
      ]),
    };
  },
});
</script>

<style scoped>
#add-broadcase {
  width: 100vw;
  height: 100vh;
}
.add-broadcast-input {
  /* border: 1px solid black; */
  margin-top: 3%;
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.add-broadcast-input-flexbox1,
.add-broadcast-input-flexbox2 {
  width: 40%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.add-broadcast-input-flexbox2 {
  margin-top: 1%;
  width: 80%;
}
.add-broadcast-input-flexbox3,
.add-broadcast-input-flexbox4 {
  margin-left: 10%;
  margin-top: 3%;
  width: 80%;
  display: flex;
  justify-self: start;
  /* border: 1px solid rgb(191, 241, 10); */
}
.input-lable {
  width: 120px;
  margin-top: 9px;
}
.left-top-start {
  color: #f8a5a3;
  margin-top: 5px;
  margin-right: 2px;
}
.add-broadcast-botton {
  width: 20%;
  margin-top: 15%;
  margin-left: 20%;
  display: flex;
  justify-content: space-around;
}
</style>
