<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <Modal v-if="showModal"></Modal>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue';
// IMPORT MODAL USING COMPOSITIONS API
import Modal from '@/components/Modal.vue';

/*
  modals
*/

const showModal = ref(false);
</script>

<!--
// IMPORT MODAL USING OPTIONS API 
<script>
import { Modal } from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
};
</script>
-->
