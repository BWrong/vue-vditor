# Vue Vditor

![npm](https://img.shields.io/npm/dt/vue-vditor)
![npm](https://img.shields.io/npm/v/vue-vditor)
![NPM](https://img.shields.io/npm/l/vue-vditor)
![build](https://travis-ci.com/BWrong/vue-vditor.svg?branch=main)
![GitHub stars](https://img.shields.io/github/stars/bwrong/vue-vditor?style=social)

一款基于[vditor](https://b3log.org/vditor/)实现的vue版本的markdown编辑器，支持在Vue2.0和Vue3.0中使用。

![](https://gitee.com/letwrong/Picture/raw/master/20210623092516.png)

[Vditor预览地址](https://ld246.com/guide/markdown)

## 功能需求
- 支持 Markdown 语法、兼容 HTML
- 支持多种编辑模式，需要有即时渲染、分屏预览模式
- 支持 xss 安全过滤
- 支持主题切换并提供多套主题
- 针对不同应用场景可支持简洁模式、全功能模式切换
- 预留文件在线预览功能（需后台功能支持）
- 支持附件上传（需提供文件服务），并对常见格式附件图标渲染
- 支持图片全屏预览功能

### 使用方法
#### 安装
```shell
# Vue3 不用安装 @vue/composition-api
npm install -S vue-vditor vditor @vue/composition-api
```
#### 使用
```js
import 'vditor/dist/index.css';
import VueVditor from 'vue-vditor';

Vue.use(VueVditor);
```
```html
<VueVditor v-model="content" :options="options" @after="handleAfter" class="editor"></VueVditor>
```

#### 配置

- Props

属性|必须|说明|类型|默认值
:---:|:---:|:---:|:---:|:---:
mode|false|编辑器模式，支持完整（full）、简洁（simple）、移动端模式（mobile）|String|'full'
v-model|false|内容，响应式的|String|''
options|false|编辑器配置，详细请看[Vditor API](https://ld246.com/article/1549638745630)|Object|

- Events

名字|说明
:---:|:---:
after(editor: Vditor)|编辑器异步渲染完成后的回调方法，可通过参数获取编辑器实例，调用编辑器method
input(value: string)|输入后触发
focus(value: string)|聚焦后触发
blur(value: string)|失焦后触发
esc(value: string)|esc 按下后触发
ctrlEnter(value: string)|⌘/ctrl+enter 按下后触发
select(value: string)|编辑器中选中文字后触发

- Methods

支持[Vditor](https://ld246.com/article/1549638745630)全部Methods，可通过after获取到Vditor实例，然后调用其method：
```html
<VueVditor v-model="content"  @after="handleAfter"></VueVditor>
```
```js

let vueEditor = null;
function handleAfter(editor: Vditor) {
  vueEditor = editor;
}
// 插入内容
vueEditor.insertValue('![](https://gitee.com/letwrong/Picture/raw/master/20210331155321.jpg)');
// 获取内容
vueEditor.getValue()
// ...更多method请查看Vditor文档
```