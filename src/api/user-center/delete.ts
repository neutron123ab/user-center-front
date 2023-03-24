import { defHttp } from '/@/utils/http/axios'

enum Api {
  DELETE = '/user/delete',
}

export function deleteUser(userId: string) {
  return defHttp.post({
    url: Api.DELETE,
    data: `${userId}`,
  })
}
