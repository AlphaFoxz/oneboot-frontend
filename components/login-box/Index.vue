<script setup lang="ts">
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import ButtonGroup from 'primevue/buttongroup'
import Checkbox from 'primevue/checkbox'
import Divider from 'primevue/divider'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const router = useRouter()
const username = ref()
const password = ref()
const validateCode = ref()
const handleLogin = FnUtil.throttle(function () {
  toast.add({ severity: 'success', life: 3000, summary: '登录成功', detail: '欢迎回来' })
  router.push('/admin/welcome')
}, 3000)
</script>

<template>
  <div class="login-box">
    <form class="login-form" @submit.prevent="handleLogin">
      <h1>Oneboot</h1>
      <LayoutSpace wrapFlex margin="0.5rem 0">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-user"></i>
          </InputGroupAddon>
          <InputText v-model="username" placeholder="账号" />
        </InputGroup>
      </LayoutSpace>
      <LayoutSpace wrapFlex margin="0.5rem 0">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-key"></i>
          </InputGroupAddon>
          <Password v-model="password" :feedback="false" placeholder="密码" />
        </InputGroup>
      </LayoutSpace>
      <LayoutSpace wrapFlex margin="0.5rem 0">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-check-circle"></i>
          </InputGroupAddon>
          <InputText v-model="validateCode"></InputText>
          <InputText v-model="validateCode" placeholder="验证码"></InputText>
        </InputGroup>
      </LayoutSpace>
      <LayoutSpace wrapFlex margin="0.5rem 0" style="gap: 8px">
        <Checkbox inputId="rememberMe"></Checkbox>
        <label for="rememberMe">七天内免登录</label>
        <!-- <Button text severity="secondary" style="cursor: default"> -->
        <i
          class="pi pi-exclamation-circle"
          v-tooltip.top="`勾选并登录后，规定天数内无需输入用户名和密码会自动登入系统`"
        ></i>
        <!-- </Button> -->
        <Button label="忘记密码" text severity="info"></Button>
      </LayoutSpace>
      <div>
        <Button id="login-btn" @click="handleLogin" type="submit" label="登录" severity="info"></Button>
      </div>
      <LayoutSpace wrapFlex margin="1rem 0" style="justify-content: space-around">
        <Button label="手机登录" severity="secondary" outlined></Button>
        <Button label="二维码登录" severity="secondary" outlined></Button>
        <Button label="注册" severity="secondary" outlined></Button>
      </LayoutSpace>
      <div>
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
