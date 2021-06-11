<template>
  <div id="info-release">
    <nav-bar />
    <div class="info-content">
      <my-input
        class="my-input"
        :lableName="'广播名称'"
        :placeName="'名称关键字'"
      />
      <my-option
        class="my-option"
        :lableName="'广播分类'"
        :myOptions="options1"
      />
      <my-option
        class="my-option"
        :lableName="'是否发布'"
        :myOptions="options2"
      />
      <my-option
        class="my-option"
        :lableName="'是否管理合约'"
        :myOptions="options3"
        :labelwidth="120"
      />
      <div class="info-button">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <my-form
      :tableTitle="tableTitle"
      :tableData="tableData"
      :tableIndex="tableIndex"
      :tableOption="tableOption"
      @FromAdd="infoHandleFromAdd"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import NavBar from "../../components/NavBar.vue";
import MyForm from "../../components/Form.vue";
import MyInput from "../../components/Input.vue";
import MyOption from "../../components/Option.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "InfoRelease",
  components: {
    NavBar,
    MyForm,
    MyInput,
    MyOption,
  },
  setup() {
    const router = useRouter();
    const tableData = ref([
      {
        id: "1000001",
        broadcastname: "关于4月对大型企业用户的调峰公告通知",
        kind: "调峰公告",
        receive:
          "调峰公告成都地调长岭变电站XXX线路-华阳街道#2公变- 大型园区用户-XXXXX企业",
        isrelease: "是",
        createTime: "2017-03-22 11:05",
      },
      {
        id: "1000002",
        broadcastname: "关于4月对大型企业用户的调峰公告通知",
        kind: "调峰公告",
        receive:
          "调峰公告成都地调长岭变电站XXX线路-华阳街道#2公变- 大型园区用户-XXXXX企业",
        isrelease: "否",
        createTime: "2017-03-22 11:05",
      },
    ]);

    let tableIndex = ref([]);
    for (let i = 0; i < tableData.value.length; i++) {
      if (tableData.value[i].isrelease == "是") tableIndex.value.push(true);
      else tableIndex.value.push(false);
    }
    const infoHandleFromAdd = () => {
      router.push({ path: "AddBroadcase" });
    };
    return {
      infoHandleFromAdd,
      tableData,
      tableIndex,
      tableTitle: ref([
        ["id", "编号", "20%"],
        ["broadcastname", "广播名称", "40%"],
        ["kind", "分类", "20%"],
        ["receive", "接收企业", "20%"],
        ["isrelease", "是否发布", "20%"],
        ["createTime", "创建时间", "20%"],
      ]),

      tableOption: ref([["查看"], ["编辑", "删除", "发布"]]),

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
      options2: ref([
        {
          value: "选项1",
          label: "是",
        },
        {
          value: "选项2",
          label: "全部",
        },
        {
          value: "选项3",
          label: "否",
        },
      ]),
      options3: ref([
        {
          value: "选项1",
          label: "是",
        },
        {
          value: "选项2",
          label: "全部",
        },
        {
          value: "选项3",
          label: "否",
        },
      ]),
    };
  },
});
</script>

<style scoped>
#info-release {
  width: 100vw;
  height: 100vh;
}
.info-content {
  width: 100%;
  height: 7%;
  margin: 1% auto;
  border: 1px solid #e4e4e4;
}
.info-content div {
  float: left;
}

.my-input,
.my-option {
  margin-top: 0.6%;
  /* border: 1px solid black; */
  margin-left: 2%;
}
.info-button {
  padding-top: 0.5%;
  margin-left: 20%;
}
</style>
