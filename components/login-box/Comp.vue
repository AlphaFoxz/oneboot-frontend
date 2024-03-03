<script setup lang="ts">
import {
  Flex as AFlex,
  Space as ASpace,
  TypographyTitle as ATypographyTitle,
  InputGroup as AInputGroup,
  Input as AInput,
  InputPassword as AInputPassword,
  Button as AButton,
  Form as AForm,
  FormItem as AFormItem,
  Popover as APopover,
  Checkbox as ACheckbox,
  Divider as ADivider,
} from 'ant-design-vue'
import { QuestionCircleOutlined } from '@ant-design/icons-vue'

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
    <div class="login-form">
      <a-typography-title :level="2">Oneboot</a-typography-title>
      <a-form>
        <a-form-item>
          <a-input v-model:value="username" allow-clear placeholder="账号"></a-input>
        </a-form-item>
        <a-form-item>
          <a-input-password v-model:value="password" placeholder="密码"></a-input-password>
        </a-form-item>
        <a-form-item>
          <a-input-group compact>
            <a-input v-model:value="validateCode" placeholder="验证码" style="width: 50%"></a-input>
            <a-input v-model:value="validateCode" placeholder="验证码" style="width: 50%"></a-input>
          </a-input-group>
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-checkbox
              >七天内免登录
              <a-popover>
                <template #content>勾选并登录后，规定天数内无需输入用户名和密码会自动登入系统</template>
                <QuestionCircleOutlined />
              </a-popover>
            </a-checkbox>
            <a-button type="link">忘记密码</a-button>
          </a-space>
        </a-form-item>
        <a-form-item>
          <a-button @click="handleLogin" id="login-btn" type="primary">登录</a-button>
        </a-form-item>
      </a-form>
      <div>
        <a-divider style="font-size: 0.75rem">第三方登录</a-divider>
        <a-form-item>
          <a-flex gap="middle" horizontal>
            <div class="form-item-content">
              <a-button type="link" title="微信登录"><IconsWeXin /></a-button>
            </div>
            <div class="form-item-content">
              <a-button type="link" title="支付宝登录"><IconsZhiFuBao /></a-button>
            </div>
            <div class="form-item-content">
              <a-button type="link" title="QQ登录"><IconsQQ /></a-button>
            </div>
            <div class="form-item-content">
              <a-button type="link" title="微博登录"><IconsWeiBo /></a-button>
            </div>
          </a-flex>
        </a-form-item>
      </div>
    </div>
  </div>
</template>

<style>
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
  width: 25%;
}
</style>
