<template>
  <div class="main flex-1 y-scroll">
    <div class="wrap" v-for="item in pageData" :key="item.value">
      <div class="title">{{ item.title }}</div>

      <div class="box-wrap flex">
        <div class="single-box cursor-pointer" v-for="(ele, i) in item.childList" :key="i" @click="gopage(ele.url)">
          <div class="name flex flex-align-center">
            <img class="icon" v-if="ele.icon" :src="ele.icon" alt="">
            <span class="one-ellipsis">{{ ele.name }}</span>
          </div>
          <div class="desc">{{ ele.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import { PAGEDATA } from "../utils/const";
export default defineComponent({
  name: "",
  setup() {
    const pageData = reactive(PAGEDATA);

    const gopage = (val:string) => {
      window.open(val)
    }
    return { pageData, gopage };
  },
});
</script>
<style lang="less" scoped>
.main {
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  &::-webkit-scrollbar{display:none}
}
.wrap {
  margin-top: 25px;
  .title {
    font-size: 14px;
    color: #000;
    font-weight: bold;
    &::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: #000;
      border-radius: 50%;
      margin: 0 8px;
    }
  }
}

.box-wrap {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  margin-top: 10px;
  .single-box {
    background-color: #eee;
    padding: 8px;
    border-radius: 8px;
    .name {
      font-size: 16px;
      font-weight: bold;
      height: 32px;
      .icon {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
    .desc {
      margin-top: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 45px;
    }
  }
}
</style>