<template>
  <div class="userTable">
    <Table :columns="columns" v-model:data-source="data">
      <template #bodyCell="{ column, index }">
        <template v-if="column.key === 'options'">
          <span>
            <a @click="handlerDelete(index)">Delete</a>
          </span>
        </template>
      </template>
    </Table>
    <div class="page">
      <Pagination
        size="small"
        v-model:current="page.current"
        :total="page.total"
        show-size-changer
        show-quick-jumper
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Table, Pagination } from 'ant-design-vue'
  import { reactive, ref, watch } from 'vue'
  import { useTableState } from '/@/store/modules/table'
  import { deleteUser } from '/@/api/user-center/delete'
  import { message } from 'ant-design-vue'

  const page = reactive({
    current: 1,
    pageSize: 10,
    total: 0,
  })

  const columns = [
    {
      title: '序号',
      key: 'number',
      dataIndex: 'number',
      align: 'center',
      width: 70,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      align: 'center',
      ellipsis: true,
      width: 120,
    },
    {
      title: '用户账户',
      dataIndex: 'userAccount',
      key: 'userAccount',
      align: 'center',
    },
    {
      title: '头像',
      dataIndex: 'avatarUrl',
      key: 'avatarUrl',
      align: 'center',
      ellipsis: true,
    },
    {
      title: '性别',
      key: 'gender',
      dataIndex: 'gender',
      align: 'center',
      width: 60,
    },
    {
      title: '电话',
      key: 'phone',
      dataIndex: 'phone',
      align: 'center',
    },
    {
      title: '邮件',
      key: 'email',
      dataIndex: 'email',
      align: 'center',
    },
    {
      title: '状态',
      key: 'userStatus',
      dataIndex: 'userStatus',
      align: 'center',
      width: 60,
    },
    {
      title: '公司编号',
      key: 'userCode',
      dataIndex: 'userCode',
      align: 'center',
      width: 60,
    },
    {
      title: '角色',
      key: 'userRole',
      dataIndex: 'userRole',
      align: 'center',
    },
    {
      title: '创建时间',
      key: 'createTime',
      dataIndex: 'createTime',
      align: 'center',
    },
    {
      title: '操作',
      key: 'options',
      dataIndex: 'options',
      align: 'center',
    },
  ]
  const state = useTableState()
  let data = reactive([])
  console.log(data)
  watch(
    () => state.status,
    () => {
      let l = data.length
      for (let i = 0; i < l; i++) {
        data.pop()
      }
      let len = state.tableInfo.length
      page.total = len
      for (let i = 0; i < len; i++) {
        data.push(state.tableInfo[i])
        data[i]['number'] = i + 1
      }
    },
  )
  async function handlerDelete(index: number) {
    console.log(index)
    const userId = data[index].id
    console.log(userId)
    const res = await deleteUser(userId)
    console.log(res.data.data)
    if (res.data.data === true) {
      message.success('删除成功')
      state.changeStatus()
    } else {
      message.error('删除失败')
    }
  }
</script>

<style scoped>
  .userTable {
    position: relative;
    width: 95%;
    background-color: #ffffff;
    margin-top: 15px;
    margin-left: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .page {
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: flex-end;
  }
</style>
