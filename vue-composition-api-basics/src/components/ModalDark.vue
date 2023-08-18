<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal-dark">
      <h1>{{ title }}</h1>
      <slot></slot>
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
/*
  props
*/

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'No title specified',
  },
});

/*
emits
*/

const emit = defineEmits(['update:modelValue']);

/*
  handleButtonClick
*/

// const handleButtonClick = () => {
//   emit('update:modelValue', false);
// };
</script>

<!--
USING OPTIONS API:

<script>
export default {
  emits: ['hideModal'],
  props: {
    title: {
      type: String,
      default: 'No title specified',
    }
  }
}
</script>
-->

<style>
.modal-dark {
  background: #333;
  color: #fff;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
