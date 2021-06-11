<template>
  <div id="info-release">
    <nav-bar />
    <div class="info-content">
      <my-input class="my-input" :lableName="'输入搜索'" :placeName="'用户'" />
      <my-input
        class="my-input"
        :lableName="'签约合约'"
        :placeName="'输入签约合约'"
      />
      <my-input
        class="my-input"
        :lableName="'获得绿币积分'"
        :placeName="'输入绿币'"
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

import { useRouter } from "vue-router";

export default defineComponent({
  name: "IntegerManage",
  components: {
    NavBar,
    MyForm,
    MyInput,
  },
  setup() {
    const router = useRouter();
    const tableData = ref([
      {
        id: "1000001",
        useRouter: "关于4月对大型企业用户的调峰公告通知",
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
        ["user", "用户", "20%"],
        ["contact", "签约合约", "20%"],
        ["receive", "获得绿币积分", "20%"],
        ["Time", "获得时间", "40%"],
      ]),

      tableOption: ref([["查看"], ["编辑", "删除", "发布"]]),
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
  margin-left: 30%;
}
</style>
