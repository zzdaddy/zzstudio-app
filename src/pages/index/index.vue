<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view
    class="bg-sky-500/75 h-full overflow-hidden pt-2 px-4"
    :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
  >
    <view class="h-8">早上好</view>
    <view class="bg-white rounded-md p-4 flex mb-4 mt-4">
      <nut-avatar size="large">
        <img
          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        />
      </nut-avatar>
      <view class="flex-1 ml-2">
        <view class="text-lg font-bold"
          >{{ username }}, {{ coin }}<nut-icon name="star" custom-color="#fa2c19"></nut-icon
        ></view>
        <view>道阻且长</view>
      </view>
    </view>

    <view class="bg-white rounded-md p-4 flex">
      <view class="w-50%">color</view>
      <view class="w-50%">pixeled</view>
      <view class="w-50%">post</view>
      <view class="w-50%">newsstand</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const username = ref('zzdaddy')
const coin = ref(9999)
const quoteUrl = ref('https://github.com/codercup/hello-unibest')
const description = ref(
  'unibest 是由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI 驱动的跨端快速启动模板，使用 VS Code 开发，具有代码提示、自动格式化、统一配置、代码片段等功能，同时内置了大量平时开发常用的基本组件，开箱即用，让你编写 uniapp 拥有 best 体验。',
)

onLoad(() => {
  console.log(username)
})
</script>

<style>
.main-title-color {
  color: #d14328;
}
</style>
