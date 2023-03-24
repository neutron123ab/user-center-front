<template>
  <div class="searchUser">
    <Form :layout="'inline'" :model="formData">
      <FormItem label="用户名">
        <Input placeholder="请输入" class="input" v-model:value="formData.username" />
      </FormItem>
      <FormItem label="用户账户">
        <Input placeholder="请输入" class="input" v-model:value="formData.userAccount" />
      </FormItem>
      <Button class="btn">重置</Button>
      <Button type="primary" class="btn" @click="handlerSearch">查询</Button>
    </Form>
  </div>
</template>

<script lang="ts" setup>
  import { Form, FormItem, Input, Button } from 'ant-design-vue'
  import { reactive } from 'vue'
  import { searchUserList } from '/@/api/user-center/searchUser'
  import { TableResultModel } from '/@/api/user-center/model/tableModel'
  import { useTableState } from "/@/store/modules/table";

  const formData = reactive({
    username: '',
    userAccount: '',
  })
  async function handlerSearch() {
    const res = await searchUserList(formData.username)
    let userList = res.data.data
    const state = useTableState()
    state.changeStatus()
    state.setTableInfo(userList)
    console.log('handlerSearch finished', state.status)
  }
</script>

<style scoped>
  .input {
    width: 250px;
  }
  .searchUser {
    margin-left: 30px;
  }
  .btn {
    margin-left: 30px;
  }
</style>
