<template>
  <div id="contract-check">
    <my-single-nav-bar :titleName="'合约详情'" />
    <div class="stepline">
      <step-line :lineinfo="lineinfo"></step-line>
    </div>
    <div class="contract-check-input">
      <div class="contract-check-input-flexbox1">
        <my-input
          :isStart="true"
          :lableName="'合约名称'"
          :placeName="'这是一个合约名称'"
        />
        <my-input
          :isStart="true"
          :lableName="'合约名称'"
          :placeName="'这是一个合约名称'"
        />
      </div>
      <div class="contract-check-input-flexbox2">
        <my-option
          :isStart="true"
          :lableName="'合约类型'"
          :myOptions="options1"
        />
        <my-input :isStart="true" :lableName="'联系人电话'" :placeName="''" />
      </div>

      <div class="contract-check-input-flexbox3">
        <my-option
          :isStart="true"
          :lableName="'合约中断运行方式'"
          :myOptions="options2"
          :labelwidth="'150'"
        />
        <div class="time-choose">
          <div class="left-top-start">*</div>
          <div class="time-choose-label">合约时间范围:</div>
          <div class="time-choose-block">
            <el-date-picker
              v-model="shortcutsvalue"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="margin-top:-7%"
            >
            </el-date-picker>
          </div>
        </div>
        <my-input :isStart="true" :lableName="'合约状态'" :placeName="''" />
      </div>
    </div>
    <div class="contract-check-table">
      <my-form
        :tableTitle="tableTitle"
        :tableData="tableData"
        @optionclick="handleClickOption"
      />
    </div>
    <div class="contract-check-botton">
      <el-button type="warning">通过</el-button>
      <el-button type="primary">退回</el-button>
      <el-button type="primary">返回</el-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import StepLine from "../../components/Stepline.vue";
import MyInput from "../../components/Input.vue";
import MyOption from "../../components/Option.vue";
import MyForm from "../../components/Form.vue";
import MySingleNavBar from "../../components/SingleNavBar.vue";
export default defineComponent({
  name: "ContractCheck",
  components: {
    StepLine,
    MyInput,
    MyOption,
    MyForm,
    MySingleNavBar,
  },
  setup() {
    // console.log(window);
    const lineinfo = ref([
      {
        pointName: "填写合约基本信息",
        operator: "迎曦",
        operatDate: "2020-12-12",
        operatTime: "12:23",
        other: {
          operator: "xxx用户",
          name: "耗时",
          time: "2小时25分钟",
        },
        isdone: true,
      },
      {
        pointName: "提交审核",
        operator: "迎曦",
        operatDate: "2020-12-12",
        operatTime: "12:23",
        other: {
          operator: "xxx用户",
          name: "耗时",
          time: "2小时25分钟",
        },
        isdone: true,
      },
      {
        pointName: "审核通过",
        operator: "迎曦",
        operatDate: "2020-12-12",
        operatTime: "12:23",
        other: {
          operator: "xxx用户",
          name: "耗时",
          time: "2小时25分钟",
        },
        isdone: false,
      },
      {
        pointName: "完成",
        operator: "迎曦",
        operatDate: "2020-12-12",
        operatTime: "12:23",
        other: {
          operator: "xxx用户",
          name: "耗时",
          time: "2小时25分钟",
        },
        isdone: false,
      },
    ]);
    return {
      lineinfo,
      options1: ref([
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
      ]),
      options2: ref([
        {
          value: "选项1",
          label: "降压",
        },
        {
          value: "选项2",
          label: "降流",
        },
        {
          value: "选项3",
          label: "断电",
        },
      ]),
      shortcuts: ref([
        {
          text: "最近一周",
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          })(),
        },
        {
          text: "最近一个月",
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          })(),
        },
        {
          text: "最近三个月",
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          })(),
        },
      ]),
      shortcutsvalue: ref([
        new Date(2000, 10, 10, 10, 10),
        new Date(2000, 10, 11, 10, 10),
      ]),
      tableTitle: ref([
        ["id", "序号", "20%"],
        ["device", "设备", "20%"],
        ["range", "预计负荷范围值", "20%"],
        ["timeRange", "时间段", "40%"],
      ]),
      tableData: ref([
        {
          id: "1",
          device: "空调",
          range: "负荷1~负荷99",
          timeRange: "2015-10-02 09:12:21 ~ 2015-10-10 19:21:10",
        },
        {
          id: "2",
          device: "空调",
          range: "负荷1~负荷99",
          timeRange: "2015-10-02 09:12:21 ~ 2015-10-10 19:21:10",
        },
      ]),
    };
  },
});
</script>

<style scoped>
#contract-check {
  width: 100vw;
  height: 100vh;
}

.stepline {
  width: 100%;
  height: 30%;
  margin-top: 2px;
}
.contract-check-input {
  /* border: 1px solid black; */
  margin-top: -1%;
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.contract-check-input-flexbox1,
.contract-check-input-flexbox2 {
  width: 40%;
  margin-left: 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.contract-check-input-flexbox1 {
  /* background: red; */
}

.contract-check-input-flexbox2 {
  margin-top: 2%;
  /* background: yellow; */
}

.contract-check-input-flexbox3 {
  margin-left: 10%;

  width: 40%;
  display: flex;
  flex-flow: column wrap;
  /* background: blue; */
}
.contract-check-input-flexbox3 div {
  margin-top: 4%;
}
.left-top-start {
  color: #f8a5a3;
  margin-top: 5%;
  margin-right: 2px;
}
.time-choose div {
  float: left;
  margin-top: 1%;
}
.time-choose-label {
  width: 120px;
  margin-top: 2%;
}
.time-choose-block {
  margin-top: 10%;
  background-color: pink;
}
.contract-check-table {
  width: 75%;
  margin-left: 10%;
  margin-top: 2%;
}
.contract-check-botton {
  width: 20%;
  margin-top: 5%;
  margin-left: 20%;
  display: flex;
  justify-content: space-around;
}
</style>
