<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>{{ title }}</h1>
      <slot></slot>
      <button>Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
/*
  props
*/

const props = defineProps({
  title: {
    type: String,
    default: 'No title specified',
  },
});
</script>

<!--
USING OPTIONS API:

<script>
export default {
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
