<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <Modal v-if="showModal" title="This is the modal title (via prop)">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum,
        asperiores officiis commodi sint eligendi magni aut et. Laboriosam,
        cupiditate.
      </p>
    </Modal>
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
