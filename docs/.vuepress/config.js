module.exports = {
   base: '/funk-ui/',
   title: 'Funk-UI',
   description: '一套好用的UI框架',
   themeConfig: {
      nav: [{
            text: '主页',
            link: '/'
         },
         {
            text: '文档',
            link: '/guide'
         },
         {
            text: '交流',
            link: 'https://google.com'
         }
      ],
      sidebar: [{
            title: '入门',
            children: ['/install/', '/get-started/']
         },
         {
            title: '组件',
            children: [
               '/components/button',
               '/components/grid',
               "/components/input",
               "/components/layout",
               "/components/popover",
               "/components/tabs",
               "/components/toast",
            ]
         }
      ]
   }
}