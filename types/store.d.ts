import { ErrorTypeEnum } from '/@/enums/exceptionEnum'
import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum'
import { RoleInfo } from '/@/api/sys/model/userModel'

// Error-log information
export interface ErrorLogInfo {
  // Type of error
  type: ErrorTypeEnum
  // Error file
  file: string
  // Error name
  name?: string
  // Error message
  message: string
  // Error stack
  stack?: string
  // Error detail
  detail: string
  // Error url
  url: string
  // Error time
  time?: string
}

export interface UserInfo {
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
  homePath?: string
}

export interface BeforeMiniState {
  menuCollapsed?: boolean
  menuSplit?: boolean
  menuMode?: MenuModeEnum
  menuType?: MenuTypeEnum
}
