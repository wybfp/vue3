<template>
  <div>
    <div class="my-form-title">
      <el-button style="margin-left:2%;margin-top:0.5%" type="warning"
        >删除</el-button
      >
      <el-button
        style="margin-left:2%;margin-top:0.5%"
        type="primary"
        @click="handleFromAdd"
        >添加</el-button
      >

      <el-select
        style="float:right;margin-top:0.5%;margin-right:1%;"
        v-model="showValue"
        placeholder="排序方式"
      >
        <el-option
          v-for="item in showOption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        style="float:right;margin-top:0.5%;margin-right:1%;"
        v-model="numValue"
        placeholder="显示条数"
      >
        <el-option
          v-for="item in numOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="my-form-content">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          v-for="(item, index) in tableTitle"
          :prop="item[0]"
          :label="item[1]"
          :min-width="item[2]"
          :key="index"
        />
        <!-- <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="600">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column> -->

        <el-table-column v-if="isShow()" label="操作" min-width="20%">
          <template #default="scope">
            <!-- <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button> -->
            <!-- tableOption: ref([["查看"], []]),  0是对的  1是错的 -->
            <template v-if="handleTableOption(scope)">
              <el-button
                v-for="(item, index) in tableOption[0]"
                :key="index"
                type="text"
                size="small"
                v-text="item"
                @click="handleClickOption(item)"
              ></el-button>
            </template>

            <template v-else>
              <el-button
                v-for="(item, index) in tableOption[1]"
                :key="index"
                type="text"
                size="small"
                v-text="item"
                @click="handleClickOption(item)"
              ></el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="my-form-bottom">
      <el-pagination
        style="float:right;margin-top:0.5%"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        layout="total, prev, pager, next, jumper"
        :total="100"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Form",
  props: {
    tableTitle: Array,
    tableData: Array,
    tableIndex: {
      typeof: Array,
      default: [],
    },
    tableOption: {
      typeof: Array,
      default: [],
    },
  },
  emits: ["optionclick", "FromAdd"],
  setup(props, context) {
    // console.log(props.tableOption.length);
    // const operatorChhose = props.tableData.filter((elem) => {
    //   return elem.isre
    // });
    // const handleTableOption = computed(() => {});
    const methods = {
      isShow() {
        // console.log(props.tableOption.length);
        return props.tableOption.length !== 0;
      },
      handleTableOption(scope) {
        // console.log(Event);
        // console.log(scope);
        // console.log(props.tableIndex);
        if (scope.$index == -1) return false;
        return props.tableIndex[scope.$index];
        // scope.row.isrelease == "是";
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClickOption(item) {
        context.emit("optionclick", item);
      },
      handleFromAdd() {
        context.emit("FromAdd");
      },
    };
    const showOption = ref([
      {
        value: "选项1",
        label: "升序",
      },
      {
        value: "选项2",
        label: "降序",
      },
      {
        value: "选项3",
        label: "乱序",
      },
    ]);
    const numOptions = ref([
      {
        value: "选项1",
        label: "10",
      },
      {
        value: "选项2",
        label: "20",
      },
      {
        value: "选项3",
        label: "30",
      },
    ]);
    const showValue = ref("");
    const numValue = ref("");

    const currentPage = ref(1);
    return {
      ...methods,
      currentPage,
      showOption,
      numOptions,
      showValue,
      numValue,
    };
  },
});
</script>

<style scoped>
.my-form-title {
  width: 100%;
  height: 6%;
  background-color: #f3f3f3;
  border: 1px solid #e4e4e4;
}

.my-form-content {
  width: 100%;
  height: 60%;
  margin-top: 0.2%;
  border: 1px solid #e4e4e4;
}
.my-form-bottom {
  margin-top: 0.2%;
  width: 100%;
  height: 6%;
  background-color: #fdfdfe;
  border: 1px solid #e4e4e4;
}
</style>
