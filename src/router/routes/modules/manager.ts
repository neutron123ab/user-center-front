import { AppRouteModule } from '/@/router/types'
import { LAYOUT } from '/@/router/constant'

const manager: AppRouteModule = {
  path: '/manager',
  name: 'Manager',
  component: LAYOUT,
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    title: '管理页',
  },
  children: [
    {
      path: 'userManager',
      name: 'UserManager',
      component: () => import('/@/views/manager/userManager/index.vue'),
      meta: {
        title: '用户管理',
      },
    },
  ],
}

export default manager
