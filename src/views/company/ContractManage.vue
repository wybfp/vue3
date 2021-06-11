<template>
  <div id="contract-manage">
    <nav-bar />
    <div class="con-content">
      <my-input
        class="my-input"
        :lableName="'输入搜索'"
        :placeName="'合约名称'"
      />
      <my-option
        class="my-option"
        :lableName="'合约类型'"
        :myOptions="options"
      />
      <div class="con-button">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <my-form
      :tableTitle="tableTitle"
      :tableData="tableData"
      :tableOption="tableOption"
      :tableIndex="tableIndex"
      @optionclick="handleClickOption"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import NavBar from "../../components/NavBar.vue";
import MyForm from "../../components/Form.vue";
import MyInput from "../../components/Input.vue";
import MyOption from "../../components/Option";
export default defineComponent({
  name: "ContractManage",
  components: {
    NavBar,
    MyForm,
    MyInput,
    MyOption,
  },
  setup() {
    const router = useRouter();

    const handleClickOption = (item) => {
      // console.log(item);
      if (item == "审核") {
        router.push({ path: "ContractCheck" });
      }
    };
    const tableData = ref([
      {
        id: "1000001",
        name: "高峰期断电合约",
        unit: "XXX单位",
        area: "XXX区域",
        kind: "年度合约",
        state: "审核中",
        timeRange: "2015-10-02 09:12:21 ~ 2015-10-10 19:21:10",
        createTime: "2017-06-15 14:35:51",
      },
      {
        id: "1000002",
        name: "高峰期断电合约",
        unit: "XXX单位",
        area: "XXX区域",
        kind: "年度合约",
        state: "审核通过",
        timeRange: "2015-10-02 09:12:21 ~ 2015-10-10 19:21:10",
        createTime: "2017-06-15 14:35:51",
      },
    ]);
    let tableIndex = ref([]);
    for (let i = 0; i < tableData.value.length; i++) {
      if (tableData.value[i].state == "审核通过") tableIndex.value.push(true);
      else tableIndex.value.push(false);
    }
    return {
      input: ref(""),
      options: ref([
        {
          value: "选项1",
          label: "年度合约",
        },
        {
          value: "选项2",
          label: "季度合约",
        },
        {
          value: "选项3",
          label: "月度合约",
        },
        {
          value: "选项4",
          label: "定制式合约",
        },
      ]),
      value: ref(""),
      // 列表标题数据 prop label width

      tableTitle: ref([
        ["id", "编号", "20%"],
        ["name", "合约名称", "20%"],
        ["unit", "合约单位", "20%"],
        ["area", "所属区域", "20%"],
        ["kind", "合约类型", "20%"],
        ["state", "合约状态", "20%"],
        ["timeRange", "合约时间范围", "40%"],
        ["createTime", "创建时间", "20%"],
      ]),

      tableData,
      tableIndex,
      tableOption: ref([
        ["查看", "删除"],
        ["查看", "删除", "审核"],
      ]),
      handleClickOption,
    };
  },
});
</script>

<style scoped>
#contract-manage {
  width: 100vw;
  height: 100vh;
}
.con-content {
  width: 100%;
  height: 7%;
  margin: 1% auto;
  border: 1px solid #e4e4e4;
}
.con-content div {
  float: left;
}

.my-input,
.my-option {
  margin-top: 0.6%;
  /* border: 1px solid black; */
  margin-left: 2%;
}
.con-button {
  padding-top: 0.5%;
  margin-left: 61%;
}
</style>
