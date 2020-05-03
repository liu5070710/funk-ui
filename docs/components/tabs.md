---
title: Tabs - 标签
sidebarDepth: 2
---

# Tabs 标签 <Badge text="beta" type="warn"/>

## tabs 基本用法

<tabs-demo />

```vue
  <div style="margin: 40px 0">
    <funk-tabs selected="focus">
      <funk-tabs-head>
        <funk-tabs-item name="focus">关注</funk-tabs-item>
        <funk-tabs-item name="recommend" disabled>推荐</funk-tabs-item>
        <funk-tabs-item name="technology">科技</funk-tabs-item>
        <funk-tabs-item name="music">音乐</funk-tabs-item>
      </funk-tabs-head>
      <hr />
      <funk-tabs-body>
        <funk-tabs-pane name="focus">关注相关</funk-tabs-pane>
        <funk-tabs-pane name="recommend">推荐相关</funk-tabs-pane>
        <funk-tabs-pane name="technology">科技相关</funk-tabs-pane>
        <funk-tabs-pane name="music">音乐相关</funk-tabs-pane>
      </funk-tabs-body>
    </funk-tabs>
  </div>
```

## Tabs Attributes

|   参数   |   说明   |  类型  | 可选值 | 默认值 |
| :------: | :------: | :----: | :----: | :----: |
| selected | 选中的值 | String |   —    |   —    |

## TabsPane Attributes

| 参数 |  说明  |  类型  | 可选值 | 默认值 |
| :--: | :----: | :----: | :----: | :----: |
| name | 标识符 | String |   —    |   —    |

## TabsItem Attributes

|   参数   |   说明   |  类型   |   可选值   | 默认值 |
| :------: | :------: | :-----: | :--------: | :----: |
|   name   |  标识符  | String  |     —      |   —    |
| disabled | 是否禁用 | Boolean | true/false | false  |

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
