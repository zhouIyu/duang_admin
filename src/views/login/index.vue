<script lang="ts" setup>
import type { FormInstance, FormItemRule } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

type FormItemRules = FormItemRule | FormItemRule[]

interface LoginForm {
  username: string
  password: string
}

const loginForm: LoginForm = reactive({
  username: 'admin',
  password: '123456'
})

const usernameRules: FormItemRules = {
  required: true,
  trigger: 'blur',
  message: '请输入用户名'
}

const passwordRules: FormItemRules = [
  {
    required: true,
    trigger: 'blur',
    message: '请输入密码'
  },
  {
    type: 'string',
    min: 6,
    max: 18,
    trigger: ['blur', 'change'],
    message: '请输入6-18位密码'
  }
]

const formRef = ref<FormInstance>()

const router = useRouter()

const onSubmit = async (formEl: FormInstance | undefined) => {
  formEl?.validate((valid) => {
    console.log(valid)
    if (valid) {
      console.log('submit!')
      router.replace('/home')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const onReset = (formEl: FormInstance | undefined) => {
  formEl?.resetFields()
}
</script>
<template>
  <div class="login">
    <div class="login-rt">
      <div class="header">
        <img
          src="@/assets/logo.png"
          class="logo"
        >
        <span class="title">Duang-Admin</span>
      </div>
      <el-form
        ref="formRef"
        :model="loginForm"
      >
        <el-form-item
          prop="username"
          :rules="usernameRules"
        >
          <el-input
            v-model="loginForm.username"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="passwordRules"
        >
          <el-input
            v-model="loginForm.password"
            :prefix-icon="Lock"
            type="password"
            :show-password="true"
          />
        </el-form-item>
        <el-form-item>
          <div class="login-btn">
            <el-button
              round
              @click="onReset(formRef)"
            >
              重置
            </el-button>
            <el-button
              round
              type="primary"
              @click="onSubmit(formRef)"
            >
              登录
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./index";
</style>
