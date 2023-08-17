<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1><slot name="title"></slot></h1>
      <slot></slot>
      <button>Hide modal</button>
    </div>
  </teleport>
</template>

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
