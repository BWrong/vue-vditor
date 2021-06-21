<template>
  <div :id="editorId" class="vue-vditor"></div>
</template>

<script lang="ts" setup>
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import { defineEmit, defineProps, onMounted, ref, watch, toRaw, computed } from 'vue-demi';
import type { PropType } from 'vue-demi';
import { nanoid } from 'nanoid';
import { defaultConfig, simpleConfig, mobileConfig } from './config';
const props = defineProps({
  mode: {
    type: String as PropType<'simple' | 'full' | 'mobile'>,
    default: 'full'
  },
  options: {
    type: Object,
    default: ()=>{}
  },
  modelValue: {
    type: String,
    default: ''
  }
});
const options = {
  simple: simpleConfig,
  full: defaultConfig,
  mobile: mobileConfig
};
const emit = defineEmit(['update:modelValue', 'after', 'focus', 'blur', 'esc', 'ctrlEnter', 'select']);
const editorId = 'vue-vditor-' + nanoid();
const contentEditor = ref<Vditor | null>(null);
const toolbarOptions = computed(() => options[props.mode]);
let preview = {
  actions: ['desktop', 'tablet', 'mobile'],
  ...(props?.options?.preview || {})
};
console.log(preview);
onMounted(() => {
  contentEditor.value = new Vditor(editorId, {
    toolbar: toolbarOptions.value,
    ...props.options,
    preview,
    value: props.modelValue,
    after() {
      // const previewElement = document.getElementById(editorId);
      // const vditorContent = previewElement?.getElementsByClassName('vditor-content');
      // if (vditorContent) {
      //   vditorContent[0]?.addEventListener('click', (event: any) => {
      //     console.log(111);
      //     if (event.target.tagName === 'IMG') {
      //       Vditor.previewImage(event.target);
      //     }
      //   });
      // }
      emit('after', toRaw(contentEditor.value));
    },
    input(value: string) {
      emit('update:modelValue', value);
    },
    focus(value: string) {
      emit('focus', value);
    },
    blur(value: string) {
      emit('blur', value);
    },
    esc(value: string) {
      emit('esc', value);
    },
    ctrlEnter(value: string) {
      emit('ctrlEnter', value);
    },
    select(value: string) {
      emit('select', value);
    }
  });
});
watch(
  () => props.modelValue,
  (newVal) => contentEditor.value?.setValue(newVal)
);
</script>

<style >
.vditor-img__img img{
  max-width: 100%;
}
</style>
