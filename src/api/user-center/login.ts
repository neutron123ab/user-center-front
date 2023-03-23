import { defHttp } from '/@/utils/http/axios'
import { LoginModel } from '/@/api/user-center/model/loginModel'

enum Api {
  LOGIN = '/user/login',
}

export const loginTest = (data: LoginModel) =>
  defHttp.post<LoginModel>({
    url: Api.LOGIN,
    data,
  })
