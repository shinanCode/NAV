<template>
  <a-menu
    class="select-none"
    mode="inline"
    :openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @openChange="onOpenChange"
    v-for="(item, index) in sideData" :key="index"
  >
    <a-sub-menu :key="item.value">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>{{ item.label }}</template>
      <a-menu-item v-for="ele in item.childList" :key="ele.value" >{{ ele.label }}</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons-vue";
import { SIDEDATA } from '../../utils/const'
export default defineComponent({
  name: "LeftSide",
  components: { MailOutlined },
  setup() {
    const state = reactive({
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: ["sub1"],
      selectedKeys: [],
    });
    const onOpenChange = (openKeys: string[]) => {
      const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1);
      if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };

    const sideData = reactive(SIDEDATA)
    return {
      sideData,
      ...toRefs(state),
      onOpenChange,
    };
  },
});
</script>
<style lang="less" scoped>
</style>