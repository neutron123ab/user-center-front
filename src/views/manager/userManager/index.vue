<template>
  <div class="demo">
    <SearchUser />
  </div>
  <UserTable />
</template>

<script lang="ts" setup>
  import SearchUser from '/@/views/manager/userManager/components/searchUser.vue'
  import UserTable from '/@/views/manager/userManager/components/userTable.vue'
</script>

<style scoped>
  .demo {
    display: flex;
    align-items: center;
    width: 95%;
    height: 70px;
    margin-left: 20px;
    margin-top: 20px;
    background-color: #fefefe;
  }
  .table {
    width: 100px;
    margin-left: 40px;
  }
</style>
