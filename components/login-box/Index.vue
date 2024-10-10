<script setup lang="ts">
import { Space as ASpace, TypographyTitle as ATypographyTitle } from 'ant-design-vue'
import { QuestionCircleOutlined, UserOutlined, UnlockOutlined, CheckCircleOutlined } from '@ant-design/icons-vue'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import ButtonGroup from 'primevue/buttongroup'
import Checkbox from 'primevue/checkbox'
import Divider from 'primevue/divider'

const router = useRouter()
const username = ref()
const password = ref()
const validateCode = ref()
const handleLogin = () => {
  router.push('/')
}
</script>

<template>
  <div class="login-box">
    <form class="login-form">
      <a-typography-title :level="2">Oneboot</a-typography-title>
      <div>
        <InputGroup>
          <InputGroupAddon>
            <UserOutlined />
          </InputGroupAddon>
          <InputText v-model="username" placeholder="账号" />
        </InputGroup>
      </div>
      <div>
        <InputGroup>
          <InputGroupAddon>
            <UnlockOutlined />
          </InputGroupAddon>
          <Password v-model="password" :feedback="false" placeholder="密码" />
        </InputGroup>
      </div>
      <div>
        <InputGroup>
          <InputGroupAddon>
            <CheckCircleOutlined />
          </InputGroupAddon>
          <InputText v-model="validateCode"></InputText>
          <InputText v-model="validateCode" placeholder="验证码"></InputText>
        </InputGroup>
      </div>
      <div>
        <a-space>
          <Checkbox inputId="rememberMe"></Checkbox>
          <label for="rememberMe">七天内免登录</label>
          <Button
            text
            severity="secondary"
            v-tooltip.top="`勾选并登录后，规定天数内无需输入用户名和密码会自动登入系统`"
            style="cursor: default"
            ><QuestionCircleOutlined
          /></Button>
          <Button label="忘记密码" text severity="info"></Button>
        </a-space>
      </div>
      <div>
        <Button id="login-btn" @click="handleLogin" label="登录" severity="info"></Button>
      </div>
      <div style="display: flex; justify-content: space-around">
        <Button label="手机登录" severity="secondary" outlined></Button>
        <Button label="二维码登录" severity="secondary" outlined></Button>
        <Button label="注册" severity="secondary" outlined></Button>
      </div>
      <div style="display: flex">
        <Divider><label>第三方登录</label></Divider>
      </div>
      <div>
        <ButtonGroup>
          <Button severity="info" text rounded title="微信登录"><IconsWeXin /></Button>
          <Button severity="info" text rounded title="支付宝登录"><IconsZhiFuBao /></Button>
          <Button severity="info" text rounded title="QQ登录"><IconsQQ /></Button>
          <Button severity="info" text rounded title="微博登录"><IconsWeiBo /></Button>
        </ButtonGroup>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.login-box {
  display: flex;
  align-items: center;
  text-align: center;
}
.login-form {
  width: 360px;
}
form {
  display: block;
  margin-top: 0em;
}
#login-btn {
  width: 100%;
}
.form-item-content {
  width: 100%;
}
</style>
