<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label
        >Show dark modal? <input type="checkbox" v-model="showDarkModal"
      /></label>
    </div>
    <button @click="showModal = true">Show Modal</button>
    <component
      v-model="showModal"
      :is="Modal"
      title="This is the modal title (via prop)"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum,
        asperiores officiis commodi sint eligendi magni aut et. Laboriosam,
        cupiditate.
      </p>
    </component>
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
const showDarkModal = ref(false);
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
