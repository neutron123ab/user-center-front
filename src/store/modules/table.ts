import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTableState = defineStore('table', () => {
  const status = ref(0)
  const tableInfo = ref([])
  function setTableInfo(data) {
    tableInfo.value = data
  }
  function changeStatus() {
    if (status.value === 0) status.value = 1
    else status.value = 0
  }
  return { status, tableInfo, changeStatus, setTableInfo }
})
