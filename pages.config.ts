import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'vue3-uniapp',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^nut-(.*)?-(.*)': 'nutui-uniapp/components/$1$2/$1$2.vue',
      '^nut-(.*)': 'nutui-uniapp/components/$1/$1.vue',
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
      '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue',
    },
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: '/static/home.png',
        selectedIconPath: '/static/home-select.png',
        text: '首页',
      },
      {
        pagePath: 'pages/market/index',
        iconPath: '/static/home.png',
        selectedIconPath: '/static/home-select.png',
        text: '集市',
      },
      {
        pagePath: 'pages/main/index',
        iconPath: '/static/home.png',
        selectedIconPath: '/static/home-select.png',
        text: '我的',
      },
    ],
  },
})
