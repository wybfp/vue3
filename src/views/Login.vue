<template>
  <div id="Login">
    <div class="login-title">电力用户智能交互系统</div>
    <div class="login-box">
      <div class="login-content">
        <div class="login-box-title">账户登录</div>
        <div class="login-account">
          <span>账号</span>
          <input type="text" placeholder="请输入" />
        </div>
        <div class="login-possword">
          <span>密码</span>
          <input type="password" />
        </div>
        <div class="login-choose">
          <input type="checkbox" />
          <span>记住密码</span>
          <span class="forget-password">忘记密码？</span>
        </div>
        <div class="login-button">
          <span>登录</span>
        </div>
        <div class="login-register">
          立即注册
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
});
</script>

<style scoped>
#Login {
  width: 100wh;
  height: 100vh;
  background: url(../assets/img/bg.jpg) no-repeat;
  background-size: cover;
}
.login-title {
  font-size: 50px;
  position: absolute;
  left: 36%;
  top: 10%;
  font-weight: 600;
  color: #ffcc33;
}
.login-box {
  position: absolute;
  width: 30%;
  height: 38%;
  left: 35%;
  top: 30%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 1px 3px rgba(117, 117, 117, 0.2);
}
.login-content {
  width: 70%;
  margin-left: 15%;
  height: 100%;
  /* border: 1px solid gold; */
}
.login-box-title {
  height: 17%;
  padding-top: 5%;
  font-size: 20px;
  font-weight: 600;
  color: #ffcc33;
  text-align: center;
  border-bottom: 1px solid rgb(223, 221, 221);
}
.login-account input,
.login-possword input {
  margin-left: 4%;
  height: 100%;
  width: 80%;
}
.login-account,
.login-possword {
  height: 15%;
  margin-top: 6%;
}
.login-possword {
  margin-top: 7%;
}
.login-account span,
.login-possword span {
  font-size: 20px;
  font-weight: 600;
}
.login-choose {
  margin-top: 4%;
  margin-left: 14%;
}
.forget-password {
  display: inline-block;
  margin-left: 48%;
}
.login-button {
  background-color: #009900;
  margin-left: 13%;
  margin-top: 3%;
  height: 13%;
  width: 80%;
  border-radius: 5pt;
}
.login-button span {
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-left: 44%;
  margin-top: 3%;
  text-shadow: 1px 1px 2px rgba(0, 0, 0);
}
.login-register {
  float: right;
  margin-top: 2%;
  margin-right: 10%;
}
</style>
