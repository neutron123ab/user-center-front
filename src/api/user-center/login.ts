import { defHttp } from '/@/utils/http/axios'
import { LoginModel } from '/@/api/user-center/model/loginModel'

enum Api {
  LOGIN = '/user/login',
}

export function userLogin(data: LoginModel) {
  return defHttp.post({
    url: Api.LOGIN,
    data,
  })
}
