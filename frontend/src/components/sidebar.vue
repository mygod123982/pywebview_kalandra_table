<!--
 * components-sidebar
 * @author: zrhooks
 * @since: 2022-09-22
 * sidebar.vue
-->
<template>
  <div class="components_sidebar">
    <n-button tag="div" color="#134857" @click="tableStatusStore.setTableType(0)"> 4x5类型 </n-button>
    <n-button tag="div" color="#134857" @click="tableStatusStore.setTableType(1)"> 5x5类型 </n-button>
    <n-button tag="div" color="#134857" @click="tableStatusStore.setTableType(2)"> 5x4类型 </n-button>
  </div>
</template>

<script setup >
    import { NButton } from 'naive-ui';
    import {useTableStatusStore} from "@/store"

    const tableStatusStore = useTableStatusStore()

</script>

<style scoped lang="scss">
    .components_sidebar {
        display: grid;
        align-content: space-around;
        justify-content: center;
    }
</style>
