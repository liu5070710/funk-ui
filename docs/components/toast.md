---
title: Toast - 提示框
sidebarDepth: 2
---

# Toast 提示框 <Badge text="beta" type="warn"/>

## Toast 基本用法
```vue
import Toast from 'toast-plugin';
import Vue from 'vue';
Vue.use(Toast);
```
<br />
<toast-demo1 />

```vue
<div>
  <funk-button @click="$toast('弹出提示1')">上方弹出</funk-button>
  <funk-button @click="$toast('弹出提示2',{position:'middle'})">中间弹出</funk-button>
  <funk-button @click="$toast('弹出提示3',{position:'bottom'})">下方弹出</funk-button>
</div>
```

## 自定义 Toast
**1.可自定义消息内容<br />2.可自定义关闭按钮文字<br />3.可触发回调函数**
<br />

<toast-demo2 />


```vue
<template>
  <div>
    <funk-button @click="toastTest">点我</funk-button>
  </div>
</template>
<script>
import Button from "button";
import Toast from "toast-plugin";
import Vue from "vue";
Vue.use(Toast);
export default {
  components: {
    "funk-button": Button
  },
  methods: {
    toastTest() {
      this.$toast(`你掷出: ${parseInt(Math.random() * 100)}(0-100)`, {
        autoClose: false,
        position: "top",
        closeButton: {
          text: "点击触发回调",
          callback: toast => {
            console.log("用户做一些事...");
            console.log("toast实例", toast);
          }
        }
      });
    }
  }
</script>
```

## Attributes

|   参数    |            说明             |  类型  |        可选值         | 默认值 |
| :-------: | :-------------------------: | :----: | :-------------------: | :----: |
|  message  |            文本             | String |           —           |   —    |
| autoClose | 是否自动关闭,可设置关闭时间 |   —    |     Number/false      |  2000ms  |
| position  |        设置弹出位置         | String | top / bottom / middle |  top   |
| closeButton  |        设置按钮的文本和事件         | Object | — |  —   |


<style>
table th:nth-child(1) {
    width: 100px;
}
table th:nth-child(2) {
    width: 100px;
}
table th:nth-child(3) {
    width: 100px;
}
table th:nth-child(4) {
    width: 290px;
}
table th:nth-child(5) {
    width: 100px;
}
</style>
