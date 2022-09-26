<!--
 * components\tableinfos_components-table
 * @author: zrhooks
 * @since: 2022-09-22
 * table.vue
-->
<template>
  <div class="components\tableinfos_components_table">
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
</template>

<script setup >
    const props = defineProps({
        sourceData: Array,
        is_main: Boolean
    })

</script>

<style scoped lang="scss"></style>
