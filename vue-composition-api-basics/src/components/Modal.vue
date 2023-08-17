<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot></slot>
      <button @click="handleButtonClick">Hide modal</button>
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
  handleButtonClick
*/

const handleButtonClick = () => {
  emit('hideModal');
};
const emit = defineEmits(['hideModal']);

/*
  emits
*/
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
.modal {
  background: slategray;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
