---
title: Grid - 网格
sidebarDepth: 2
---

# Grid  <Badge text="beta" type="warn"/>

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用单一分栏创建基础的栅格布局

<grid-demo1 />



```vue
<funk-row class="l-row">
   <funk-col span="24" class="bg-purple-dark"></funk-col>
</funk-row>
<funk-row class="l-row">
   <funk-col span="12" class="bg-purple"></funk-col>
   <funk-col span="12" class="bg-purple-light"></funk-col>
</funk-row>
<funk-row class="l-row">
   <funk-col span="8" class="bg-purple"></funk-col>
   <funk-col span="8" class="bg-purple-light"></funk-col>
   <funk-col span="8" class="bg-purple"></funk-col>
</funk-row>
<funk-row class="l-row">
   <funk-col span="6" class="bg-purple"></funk-col>
   <funk-col span="6" class="bg-purple-light"></funk-col>
   <funk-col span="6" class="bg-purple"></funk-col>
   <funk-col span="6" class="bg-purple-light"></funk-col>
</funk-row>
<funk-row>
   <funk-col span="4" class="bg-purple"></funk-col>
   <funk-col span="4" class="bg-purple-light"></funk-col>
   <funk-col span="4" class="bg-purple"></funk-col>
   <funk-col span="4" class="bg-purple-light"></funk-col>
   <funk-col span="4" class="bg-purple"></funk-col>
   <funk-col span="4" class="bg-purple-light"></funk-col>
</funk-row>
<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
.l-row {
  margin-bottom: 15px;
}
.bg-purple-dark {
  background: #99a9bf;
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-light {
  background: #e5e9f2;
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

## 网格间隙

Grid之间可以设置间隙

<grid-demo2 />

```vue
   <funk-row :gutter="20">
     <funk-col span="12">
       <div class="bg-purple"></div>
     </funk-col>
     <funk-col span="12">
       <div class="bg-purple-light"></div>
     </funk-col>
   </funk-row>
<style>
.bg-purple {
  background: #99a9bf;
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-light {
  background: #d3dce6;
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

## 分栏偏移

支持偏移指定的栏数。

<grid-demo3 />

```vue
<funk-row>
   <funk-col span="3"></funk-col>
   <funk-col span="8" offset="2"></funk-col>
   <funk-col span="8" offset="3"></funk-col>
</funk-row>
```

## 响应式布局

参照了 Bootstrap 的 响应式设计。

预设了 1 个默认尺寸和 5 个响应尺寸：phone、ipad、narrowPc、pc、widePc 和 默认的移动端尺寸。

<grid-demo4 />

```vue
<funk-row >
  <funk-col :phone="{span:2}" :ipad="{span:6}" :narrow-pc="{span:12}" :pc="{span:16}" :wide-pc="{span:22}">
  </funk-col>
  <funk-col :phone="{span:22}" :ipad="{span:18}" :narrow-pc="{span:12}" :pc="{span:8}" :wide-pc="{span:2}">
  </funk-col>
</funk-row>
```

## Row Attributes

|  参数  | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :--: | :----: | :----: | :----: |
| gutter | 间隔 | Number |   —    |   —    |

## Col Attributes

|   参数   |        说明        |  类型  |            可选值             | 默认值 |
| :------: | :----------------: | :----: | :---------------------------: | :----: |
|   span   |   栅格占据的列数   | Number |               —               |   —    |
|  phone   |   栅格占据的列数   | Number |               —               |   —    |
|  offset  | 栅格左侧的间隔格数 | Number |               —               |   —    |
|   ipad   |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |
| narrowPc |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |
|    pc    |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |
|  widePc  |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |

<style>

table th:nth-child(1n) {
    width: 100px;
}


table th:nth-child(4n) {
    width: 290px;
}

</style>
