<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum,
        asperiores officiis commodi sint eligendi magni aut et. Laboriosam,
        cupiditate.
      </p>
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
