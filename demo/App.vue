<template>
  <div class="contrainor">
    <div class="controls">
      <button @click="handleMethod('disabled')">禁用</button>
      <button @click="enable">启用</button>
      <button @click="setTheme">深色模式</button>
      <button @click="getValue">获取内容</button>
      <button @click="getHTML">获取HTML</button>
      <button @click="destroy">销毁</button>
    </div>
    <!-- 完整模式 -->
    <h5>完整模式</h5>
    <VueVditor v-model="contentStr" :options="options" @after="handleAfter" class="editor"></VueVditor>
    <!-- 简洁模式 -->
    <h5>简洁模式</h5>
    <VueVditor v-model="contentStr" mode="simple" class="editor"></VueVditor>
    <!-- 极简/移动端模式 -->
    <h5>移动端模式</h5>
    <VueVditor v-model="contentStr" mode="mobile" class="editor"></VueVditor>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import Vditor from 'vditor';
// import VueVditor from '../src/index.vue';
import {content} from './content'
const contentStr = ref('# 这是一个MarkDown编辑器\n![](https://gitee.com/letwrong/Picture/raw/master/20210331155321.jpg)');
let vueEditor: Vditor | null = null;

function handleAfter(editor: Vditor) {
  vueEditor = editor;
}
function handleMethod(method: string) {
  (vueEditor as any)[method]();
}
function enable() {
  vueEditor?.enable();
}
function destroy() {
  vueEditor?.destroy();
}
function getValue() {
  console.log(vueEditor?.getValue());
}
function getHTML() {
  console.log(vueEditor?.getHTML());
}
function setTheme() {
  console.log(vueEditor);
  let curtTheme = vueEditor?.vditor.options.theme;
  let nextTheme = curtTheme === 'dark' ? 'classic' : 'dark';
  let nextContenTheme = curtTheme === 'dark' ? 'light' : 'dark';
  vueEditor?.setTheme(nextTheme as any, nextContenTheme);
}
const options: IOptions = {
  // theme: 'dark',
  // preview: {
    // theme: {
    //   current: 'dark'
    // },
  // },
  // 模拟上传
  upload: {
    url: '/aaa',
    handler(files: File[]) {
      console.log(files);
      vueEditor?.insertValue('![](https://gitee.com/letwrong/Picture/raw/master/20210331155321.jpg)');
      return '上传成功';
    }
  }
};
</script>

<style scoped>
.contrainor {
  padding: 30px;
}
.editor {
  margin: 20px;
}
.controls button {
  margin: 5px;
}
</style>
