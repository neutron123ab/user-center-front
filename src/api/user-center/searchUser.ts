import { defHttp } from "/@/utils/http/axios";

enum Api {
  SEARCH = '/user/search',
}

export function searchUserList(username: string) {
  return defHttp.get({
    url: Api.SEARCH,
    params: {
      username,
    },
  })
}
