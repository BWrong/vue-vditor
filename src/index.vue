<script lang="ts">
import Vditor from 'vditor';
import { onMounted, ref, watch, toRaw, computed, defineComponent, h } from 'vue-demi';
import type { PropType } from 'vue-demi';
import { defaultConfig, simpleConfig, mobileConfig } from './config';
// 创建唯一id
function ganerNanoid() {
  window._VUE_VDITOR_ID = window._VUE_VDITOR_ID || 0;
  return window._VUE_VDITOR_ID++;
}
const options = {
  simple: simpleConfig,
  full: defaultConfig,
  mobile: mobileConfig
};
export default defineComponent({
  emits: ['update:modelValue', 'after', 'focus', 'blur', 'esc', 'ctrlEnter', 'select'],
  props: {
    mode: {
      type: String as PropType<'simple' | 'full' | 'mobile'>,
      default: 'full'
    },
    options: {
      type: Object,
      default: () => {}
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    let editorId = 'vue-vditor-' + ganerNanoid();
    const contentEditor = ref<Vditor | null>(null);
    const editorRef = ref<HTMLElement|null>(null);
    const toolbarOptions = computed(() => options[props.mode]);
    let preview = {
      actions: ['desktop', 'tablet', 'mobile'],
      ...(props?.options?.preview || {})
    };
    onMounted(() => {
      contentEditor.value = new Vditor(editorRef.value!, {
        toolbar: toolbarOptions.value,
        ...props.options,
        preview,
        cache: {
          ...(props?.options?.cache||{}),
          id: editorId
        },
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
    return {
      editorRef
    };
  },
  render() {
    return h('div', {
      ref: 'editorRef',
      class: 'vue-vditor'
    });
  }
});
</script>
