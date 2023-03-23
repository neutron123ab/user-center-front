import { Rule } from 'ant-design-vue/es/form'

export function registerRules(formData?: Recordable) {
  const validateAccount = async (_rule: Rule, value: string) => {
    if (value === '') {
      return Promise.reject('请输入账号')
    }
    if (value.length < 4) {
      return Promise.reject('账号长度不能小于4')
    }
    if (value.length > 20) {
      return Promise.reject('账号长度不能超过20')
    }
    return Promise.resolve()
  }

  const validatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
      return Promise.reject('请输入密码')
    }
    if (value.length < 8) {
      return Promise.reject('账号密码不能小于8')
    }
    if (value.length > 20) {
      return Promise.reject('账号密码不能超过20')
    }
    return Promise.resolve()
  }

  const validateConfirmPass = async (_rule: Rule, value: string) => {
    // @ts-ignore
    if (value != formData.password) {
      return Promise.reject('两次输入的密码不一致')
    }
    return Promise.resolve()
  }

  const validateUserCode = async (_rule: Rule, value: string) => {
    if (value === '') {
      return Promise.reject('请输入公司编号')
    }
    if (!/^\d+$/.test(value)) {
      return Promise.reject('公司编号只能包含数字')
    }
    if (value.length < 1) {
      return Promise.reject('公司编号不能小于1')
    }
    if (value.length > 5) {
      return Promise.reject('公司编号长度不能大于5')
    }
    return Promise.resolve()
  }

  const rules: Record<string, Rule[]> = {
    account: [{ required: true, validator: validateAccount, trigger: 'change' }],
    password: [{ required: true, validator: validatePass, trigger: 'change' }],
    confirmPassword: [{ required: true, validator: validateConfirmPass, trigger: 'change' }],
    userCode: [{ required: true, validator: validateUserCode, trigger: 'change' }],
  }

  return { rules }
}
