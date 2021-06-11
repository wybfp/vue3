<template>
  <div id="info-view">
    <my-single-nav-bar :titleName="'信息预览'" :isButton="true" />
    <div class="info-view-content">
      <div class="info-view-content-title">
        关于高峰期负荷调压降压的公告
      </div>
      <div class="info-view-content-subtitle">
        <span>发布人：{{ subtitle[0] }}</span>
        <span>时间：{{ subtitle[1] }}</span>
        <span>类别：{{ subtitle[2] }}</span>
        <span>合约名称：{{ subtitle[3] }}</span>
      </div>
      <div class="info-view-content-content" v-html="content"></div>
      <div class="add-broadcast-botton">
        <el-button type="warning">编辑</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import MySingleNavBar from "../../components/SingleNavBar.vue";
import { ref } from "vue";
export default {
  name: "InfoView",
  components: {
    MySingleNavBar,
  },
  setup(props) {
    const subtitle = ref([
      "管理员",
      "2021/3/4 9:15:02",
      "调峰公告",
      "调峰合约",
    ]);
    const content = ref(
      "01建立风险管理文化<br/><br/>风险管理是投资项目的生命，尤其综合能源服务项目具有客户需求多元、业务场景多样、技术形式复杂，投资回收期较长，投资效益受政策、行业发展和产业周期等因素的影响，其风险要素更加多样和隐秘。以重资产方式开展综合能源服务的企业，需要建立完善的风险管理体系和风险管理文化，个人认为需要考虑以下几方面：<br/><br/>1.依据自身优势和战略定位提出明确的风险偏好。我们经常对标其他企业的投资收益率标准，其实不一定具有太强的参考意义。不同企业的优势、业务定位有差异，风险偏好差别也明显。收益高低不在于收益的绝对值，而在于与风险的匹配度，较高风险的高收益不一定优于低风险下的低收益，核心在于风险管理能力是否与要承担的风险匹配。对于风险管控能力较强的企业，可以设置较高的风险偏好，更有机会获得额外收益；而对于风险管控能力较差的企业，应该基于自身比较优势选择风险较低的领域起步，不建议冒进，毕竟投资失败交出高昂学费的例子比比皆是。建议企业对综合能源业务不同细分领域开展风险分类管理，依据不同业务特点，建立收益率要求对照表和风险管控要点。<br/><br/>2.建立全流程的风险管理意识。项目风险存在于政策研究、业务类型选择、商务洽谈、投融资、合同管理、咨询设计、工程建设、运行维护等各个阶段，所以风险管理是一项极其复杂的系统工程，需要建立全过程的风险管理体系。从项目开发起到项目运营期结束，就是不断确定项目条件和排查风险的过程，只要是从事与业务相关工作的人员，都处于风险防控的链条中，都是可能放大或缩小风险的一个环节。建议建立业务前端、中台和后台几道风险管理防线，其中前端开发人员的工作质量对风险管理的影响最大，因为前端需要对项目边界条件进行确定，是后续专业风险管理的基础，建议以项目经理负责制为基础，严格把控风险评估流程、确定项目边界，如实获取项目的内外部条件。<br/><br/>3.全要素的风险管理。对项目中错综复杂的风险点进行条分缕析并合理归类，以此为条目指导主要风险要素的辨析，是风险管理的重要内容。当前，主要的项目风险可以归纳为政策、市场、信用和技术等几大类。<br/><br/>02主要风险要素和管理要点<br/><br/>1.政策风险方面由于能源行业具有较强的外部性，能源不可能三角表明，低碳能源往往不是最经济的能源，全靠市场化手段无法促进低碳能源和节能服务的长远发展，而依靠政策补贴或财税减免等政策，会带来整个行业的系统性风险。回顾近年的能源政策中，对于补贴的一刀切式下降，给风电、太阳能等行业的发展带来一定困扰，更给生物质发电行业带来沉重打击。虽说“绿水青山就是金山银山”，但是搭建起“绿水青山”和“金山银山”之间的转换桥梁，需要建立碳排放权交易等市场机制，把可再生能源、综合能源正的外部性显性化，有效化解政策风险，促进行业长远健康发展。同时，高耗能行业受行业政策影响大，加强政策研判，避免踩雷。<br/><br/>2.市场风险方面主要来自于原料市场和销售市场两端的量、价波动。一般来说，从燃料到终端销售产业链条越长的细分领域，风险越大。以生物质行业为例，从燃料收集、运输、储存、转化到终端利用，相对于其他能源产业链条较长，特别是制气、成型燃料等业务类型，不但受到上游供给约束，同时受到下游燃气接入、产品（副产品）销路的影响。整个产业需要打通的环节较多，价格和销售体系不畅，导致进入的企业上下受制，是生物质产业难以壮大的原因之一。反观风电、光伏，其起步之初对政策补贴的依赖甚至大于生物质能，但由于其产业链条短，从自然界的风、光直接转化成电能上网，能量来源和销路都很顺畅，也是促进风电、光伏快速发展壮大的重要原因。基于此原理，由于电网是中国最为广泛的基础设施，在电网的基础平台作用下，不管是新能源发电、还是以电制冷热等综合能源业务，总能在能量销售侧或来源侧化解一端的风险，为围绕电能的综合能源业务提供了重要支点。"
    );

    return {
      subtitle,
      content,
    };
  },
};
</script>

<style scoped>
#info-view {
  width: 100vw;
  height: 100vh;
}

.info-view-content {
  width: 98%;
  height: 90%;
  margin: 1% auto;
  background-color: #f3f3f3;
  border: 1px solid #e4e4e4;
}
.info-view-content-title {
  font-size: 20px;
  font-weight: bold;
  margin: 1% 40%;
}
.info-view-content-subtitle {
  margin: 2% 10%;
}
.info-view-content-subtitle span {
  margin-left: 12%;
}

.info-view-content-content {
  width: 80%;
  margin: 1% auto;
}
.add-broadcast-botton {
  width: 20%;
  margin: 1% auto;
  display: flex;
  justify-content: space-around;
}
</style>
