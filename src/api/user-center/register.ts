import { RegisterModel } from '/@/api/user-center/model/registerModel'
import { defHttp } from '/@/utils/http/axios'

enum Api {
  REGISTER = '/user/register',
}

export const userRegister = (data: RegisterModel) =>
  defHttp.post<RegisterModel>({
    url: Api.REGISTER,
    data,
  })
