<template>
  <n-config-provider :theme="lightTheme" :locale="zhCN" :date-locale="dateZhCN">
    <layouts>
      <n-message-provider>
         <router-view></router-view>
      </n-message-provider>
    </layouts>
  </n-config-provider>
</template>

<script setup>
import { lightTheme, NConfigProvider, NMessageProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import Layouts from "./Layouts/index.vue";
</script>

<style>
html,
body {
  background-color: #f1f2f3;
}
#app {
  width: 100vw;
  height: 100vh;
  padding: 0;
}
</style>


<style lang="scss" scoped>
.n-config-provider {
  width: 100%;
  height: 100%;
}
</style>