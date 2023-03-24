/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  userAccount: string
  userPassword: string
}

export interface RoleInfo {
  roleName: string
  value: string
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  id: string
  username: string
  userAccount: string
  userStatus: string
  userRole: string
  userCode: string
  avatarUrl: string
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  id: string | number
  username: string
  userAccount: string
  userStatus: string
  userRole: string
  userCode: string
  avatarUrl: string
  gender: string
  phone: string
  email: string
  createTime: string
}
