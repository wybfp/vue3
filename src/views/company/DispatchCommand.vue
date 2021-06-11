<template>
  <div id="dispatch-manage">
    <nav-bar />
    <div class="dis-content">
      <my-input
        class="my-input"
        :lableName="'所属单位'"
        :placeName="'单位关键字'"
      />
      <my-input
        class="my-input"
        :lableName="'所属变电站'"
        :placeName="'变电站关键字'"
      />
      <my-input
        class="my-input"
        :lableName="'所属线路'"
        :placeName="'线路关键字'"
      />
      <my-input
        class="my-input"
        :lableName="'用户用电'"
        :placeName="'用户用电关键字'"
      />
      <my-input
        class="my-input"
        :lableName="'负荷状态'"
        :placeName="'负荷状态关键字'"
      />
      <div class="dis-button">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <my-form
      :tableTitle="tableTitle"
      :tableData="tableData"
      :tableOption="tableOption"
      :tableIndex="tableIndex"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import NavBar from "../../components/NavBar.vue";
import MyForm from "../../components/Form.vue";
import MyInput from "../../components/Input.vue";

export default defineComponent({
  name: "DispatchCommand",
  components: {
    NavBar,
    MyForm,
    MyInput,
  },
  setup(props) {
    const tableData = ref([
      {
        id: "1000001",
        unit: "成都地调",
        transformer: "长岭",
        circuit: "10kV长镇二线大馈线",
        user: "XXX企业",
        workload: "电压超出负荷：XXX，有功功率超出负荷：XXXX",
        createTime: "2017-06-15 14:35:51",
      },
    ]);

    let tableIndex = ref(Array(tableData.value.length).fill(true));

    return {
      tableTitle: ref([
        ["id", "编号", "20%"],
        ["unit", "所属单位", "20%"],
        ["transformer", "所属变电站", "20%"],
        ["circuit", "所属路线", "20%"],
        ["user", "用户用电", "20%"],
        ["workload", "负荷值", "40%"],
        ["createTime", "创建时间", "20%"],
      ]),
      tableData,
      tableIndex,

      tableOption: ref([["查看"], []]),
    };
  },
});
</script>

<style scoped>
#dispatch-manage {
  width: 100vw;
  height: 100vh;
}
.dis-content {
  width: 100%;
  height: 7%;
  margin: 1% auto;
  border: 1px solid #e4e4e4;
}
.dis-content div {
  float: left;
}

.my-input,
.my-option {
  /* border: 1px solid black; */
  margin-top: 0.6%;
  margin-left: 1%;
}
.dis-button {
  padding-top: 0.5%;
  margin-left: 14%;
}
</style>
