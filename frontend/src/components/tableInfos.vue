<!--
 * components-tableInfos
 * @author: zrhooks
 * @since: 2022-09-21
 * tableInfos.vue
-->
<template>
  <div class="tableInfoVue">
    <sidebar-vue></sidebar-vue>
    <div class="content">
      <div class="components_tableInfos">
        <div
          :class="`row_${tableStatusStore.table_type}`"
          v-for="(row, rowIdx) in tableStatusStore.table_data_source"
          :key="'row-' + rowIdx"
        >
          <div
            class="cell"
            :class="{ select: column == 1 }"
            v-for="(column, colIdx) in row"
            :key="'column-' + colIdx"
            @click="tableStatusStore.setTableData(rowIdx, colIdx)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
import { storeToRefs } from "pinia";
import { useTableStatusStore } from "@/store";
import sidebarVue from "./sidebar.vue";
const tableStatusStore = useTableStatusStore();
</script>

<style scoped lang="scss">
.tableInfoVue {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
}
.components_tableInfos {
  padding: 20px;
  min-height: 256px;
  background-color: rgb(85, 85, 85);
  display: grid;
  grid-gap: 4px;
  justify-content: center;
  .row {
    &_0 {
      display: grid;
      grid-template-rows: 40px;
      grid-gap: 4px;
      grid-template-columns: repeat(4, 40px);
    }
    &_1 {
      display: grid;
      grid-template-rows: 40px;
      grid-gap: 4px;
      grid-template-columns: repeat(5, 40px);
    }
    &_2 {
      display: grid;
      grid-template-rows: 40px;
      grid-gap: 4px;
      grid-template-columns: repeat(5, 40px);
    }
  }

  .cell {
    background-color: rgb(39, 52, 61);
    border: 3px solid rgb(20, 20, 20);
    border-radius: 5px;
    border-top-color: rgb(170, 170, 170);
    border-right-color: #747474;
    background-size: cover;
    &.select {
      background-color: rgb(82, 89, 139);
      filter: grayscale(80%) brightness(150%);
      border-top-color: rgb(170, 170, 170);
      border-right-color: #747474;
    }
  }
}
</style>
