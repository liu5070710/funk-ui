---
title: Layout - 布局
sidebarDepth: 2
---

# Layout 布局 <Badge text="beta" type="warn"/>

用于布局的容器组件，方便快速搭建页面的基本结构:

-   `<funk-layout>`: 当子元素中包含 `<funk-slider>` 时，全部子元素会水平左右排列，否则会垂直上下排列。
-   `<funk-header>`: 顶栏容器。
-   `<funk-container>`: 主要区域容器。
-   `<funk-footer>`: 底部容器。
-   `<funk-slider>`: 侧边栏容器。

::: warning
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<funk-layout>` 的子元素只能是后四者，后四者的父元素也只能是 `<funk-layout>`。
:::


## 常见页面布局



<layout-demo />

```vue
<div>
   <h3>1.经典上下布局</h3>
   <funk-layout style="height: 300px;">
     <funk-header class="funk-header">header</funk-header>
     <funk-container class="funk-container">container</funk-container>
     <funk-footer class="funk-footer">footer</funk-footer>
   </funk-layout>
   <h3>2.左侧边栏布局</h3>
   <funk-layout style="height: 300px;">
     <funk-sider class="funk-sider">sider</funk-sider>
     <funk-layout>
       <funk-header class="funk-header">header</funk-header>
       <funk-container class="funk-container">container</funk-container>
       <funk-footer class="funk-footer">footer</funk-footer>
     </funk-layout>
   </funk-layout>
   <h3>3.侧边栏于内容区平齐布局</h3>
   <funk-layout style="height: 378px;">
     <funk-header class="funk-header">header</funk-header>
     <funk-layout>
       <funk-sider class="funk-sider">sider</funk-sider>
       <funk-container class="funk-container" style="height: 320px">container</funk-container>
     </funk-layout>
     <funk-footer class="funk-footer">footer</funk-footer>
   </funk-layout>
</div>
```

## Layout Attributes

|   参数    |   说明   |  类型  |        可选值         | 默认值 |
| :-------: | :------: | :----: | :-------------------: | :----: |
| direction | 排列方向 | String | horizontal / vertical |   —    |

## Header Attributes

|  参数  | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :--: | :----: | :----: | :----: |
| height | 高度 | String |   —    |   —    |

## Sider Attributes

| 参数  | 说明 |  类型  | 可选值 | 默认值 |
| :---: | :--: | :----: | :----: | :----: |
| width | 宽度 | String |   —    |   —    |

## Footer Attributes

|  参数  | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :--: | :----: | :----: | :----: |
| height | 高度 | String |   —    |   —    |

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