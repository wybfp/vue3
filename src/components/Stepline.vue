<template>
  <div id="step-line">
    <el-steps :active="curpoint" align-center>
      <el-step
        v-for="(item, index) in showlineinfo"
        :key="index"
        icon="icon-yuandian"
        :title="item.pointName"
      >
        <template v-slot:description>
          <div class="stepline-des-up">
            {{ item.other.operator }}
            <br />
            {{ item.other.name }}: {{ item.other.time }}
          </div>
          <div class="my-triangle"></div>
          <div class="stepline-des-down">
            {{ item.operator }}
            <br />
            {{ item.operatDate }}
            <br />
            {{ item.operatTime }}
          </div>
        </template>
      </el-step>
      <el-step
        v-for="(item, index) in noshowlineinfo"
        :key="index"
        icon="icon-yuandian"
        :title="item.pointName"
      ></el-step>
    </el-steps>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "Stepline",
  props: {
    lineinfo: {
      typeof: Array,
    },
  },
  setup(props) {
    const showlineinfo = computed(() => {
      return props.lineinfo.filter((item) => {
        return item.isdone;
      });
    });
    const curpoint = ref(showlineinfo.value.length - 1);

    const noshowlineinfo = computed(() => {
      return props.lineinfo.filter((item) => {
        return !item.isdone;
      });
    });

    return {
      showlineinfo,
      noshowlineinfo,
      curpoint,
    };
  },
});
</script>

<style>
#step-line {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 5%;
  /* background-color: pink; */
}
.el-step__description {
  padding-right: 10%;
  margin-top: -150px;
  font-size: 12px;
  line-height: 80px;
  font-weight: 400;
  /* background-color: red; */
}
.stepline-des-up {
  margin-top: 20px;
  margin-left: 30%;
  width: 130px;
  line-height: 25px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4%;
  box-shadow: 1px 1px 1px 2px rgba(217, 217, 217, 0.3);
}
.my-triangle {
  width: 8px;
  line-height: 8px;
  margin-left: 48%;
  margin-top: -6px;
  border: 1px solid #fff;
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  transform-origin: center, center;
  transform: rotate(45deg);
  background-color: #fff;
  box-shadow: 1px 1px 1px -3px rgba(217, 217, 217, 0.3);
}

.my-triangle:before {
  content: "6";
  font-size: 10%;
  visibility: hidden;
}
.stepline-des-down {
  margin-top: 80px;
  line-height: 20px;
  /* background-color: #fff;
  border: 1px solid black; */
}
.el-step__description.is-finish {
  color: #989898 !important;
}
.el-step__icon {
  background: transparent;
}
.el-step__head.is-finish .el-step__line {
  background-color: #409eff;
}
</style>
