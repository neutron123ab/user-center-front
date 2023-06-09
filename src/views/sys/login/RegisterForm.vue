<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <Form class="p-4 enter-x" :model="formData" :rules="rules" ref="formRef">
      <FormItem name="account" class="enter-x">
        <Input
          class="fix-auto-fill"
          size="large"
          v-model:value="formData.account"
          :placeholder="t('sys.login.userName')"
        />
      </FormItem>
      <FormItem name="password" class="enter-x">
        <StrengthMeter
          size="large"
          v-model:value="formData.password"
          :placeholder="t('sys.login.password')"
        />
      </FormItem>
      <FormItem name="confirmPassword" class="enter-x">
        <InputPassword
          size="large"
          visibilityToggle
          v-model:value="formData.confirmPassword"
          :placeholder="t('sys.login.confirmPassword')"
          allow-clear
        />
      </FormItem>
      <FormItem name="userCode" class="enter-x">
        <Input
          size="large"
          visibilityToggle
          v-model:value="formData.userCode"
          :placeholder="'公司编号'"
        />
      </FormItem>

      <Button
        type="primary"
        class="enter-x"
        size="large"
        block
        @click="handleRegister"
        :loading="loading"
      >
        {{ t('sys.login.registerButton') }}
      </Button>
      <Button size="large" block class="mt-4 enter-x" @click="handleBackLogin">
        {{ t('sys.login.backSignIn') }}
      </Button>
    </Form>
  </template>
</template>
<script lang="ts" setup>
  import { reactive, ref, unref, computed } from 'vue'
  import LoginFormTitle from './LoginFormTitle.vue'
  import { Form, Input, InputPassword, Button, message } from 'ant-design-vue'
  import { StrengthMeter } from '/@/components/StrengthMeter'
  import { useI18n } from '/@/hooks/web/useI18n'
  import { useLoginState, useFormValid, LoginStateEnum } from './useLogin'
  import { userRegister } from '/@/api/user-center/register'
  import { registerRules } from '/@/views/sys/login/userRegister'

  const FormItem = Form.Item
  const { t } = useI18n()
  const { handleBackLogin, getLoginState } = useLoginState()

  const formRef = ref()
  const loading = ref(false)

  const formData = reactive({
    account: '',
    password: '',
    confirmPassword: '',
    userCode: '',
  })

  const { rules } = registerRules(formData)
  const { validForm } = useFormValid(formRef)

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER)

  async function handleRegister() {
    const data = await validForm()
    if (!data) return
    try {
      loading.value = true
      await userRegister({
        userAccount: formData.account,
        userPassword: formData.password,
        checkPassword: formData.confirmPassword,
        userCode: formData.userCode,
      })
    } finally {
      loading.value = false
      message.success('注册成功')
      formData.account = ''
      formData.password = ''
      formData.confirmPassword = ''
      formData.userCode = ''
      handleBackLogin()
    }
    console.log(data)
  }
</script>
