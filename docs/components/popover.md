---
title: Popover - 弹框
sidebarDepth: 2
---

---

title: Button
sidebarDepth: 2

---

# Popover 弹框 <Badge text="beta" type="warn"/>

## click 触发
<popover-demo1 />

```vue
<div>
  <funk-popover position="top">
    <template slot="content">这是一条弹窗</template>
    <funk-button>点我</funk-button>
  </funk-popover>
  <funk-popover position="bottom">
    <template slot="content">这是一条弹窗</template>
    <funk-button>点我</funk-button>
  </funk-popover>
  <funk-popover position="left">
    <template
      slot="content"
    >这是一条弹窗</template>
    <funk-button>点我</funk-button>
  </funk-popover>
  <funk-popover position="right">
    <template slot="content">这是一条弹窗</template>
    <funk-button>点我</funk-button>
  </funk-popover>
</div>
```

## hover 触发

<popover-demo2 />

```vue
<div style="margin: 40px 0">
  <funk-popover position="top" trigger="hover">
    <template slot="content">这是一条弹窗</template>
    <funk-button>hover</funk-button>
  </funk-popover>
  <funk-popover position="bottom" trigger="hover">
    <template slot="content">这是一条弹窗</template>
    <funk-button>hover</funk-button>
  </funk-popover>
  <funk-popover position="left" trigger="hover">
    <template
      slot="content"
    >这是一条弹窗</template>
    <funk-button>hover</funk-button>
  </funk-popover>
  <funk-popover position="right" trigger="hover">
    <template slot="content">这是一条弹窗</template>
    <funk-button>hover</funk-button>
  </funk-popover>
</div>
```

## Attributes

|   参数   |   说明   |  类型  |           可选值            | 默认值 |
| :------: | :------: | :----: | :-------------------------: | :----: |
| trigger  | 触发方式 | String |         click/hover         | click  |
| position | 出现位置 | String | left / right / top / bottom |  top   |

<style>
table th:nth-child(4) {
    width: 290px;
}
</style>
