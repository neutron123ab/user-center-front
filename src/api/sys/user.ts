import { defHttp } from '/@/utils/http/axios'
import { LoginParams, LoginResultModel } from './model/userModel'

enum Api {
  Login = '/user/login',
  Logout = '/user/logout',
  GetUserInfo = '/user/getUserInfo',
  GetPermCode = '/user/getPermCode',
  TestRetry = '/user/testRetry',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  const res = defHttp.post<LoginResultModel>({
    url: Api.Login,
    params,
  })
  console.log(res)
  return res
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get({ url: Api.GetUserInfo }, { errorMessageMode: 'none' })
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode })
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout })
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  )
}
