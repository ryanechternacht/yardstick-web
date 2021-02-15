<template>
  <div
    class="background"
  >
    <div class="content">
      <div>
        Lorem Ipsum
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal'
}
</script>

<style lang="postcss" scoped>
.background {
  @apply fixed h-full w-full top-0 left-0;
  background-color: rgba(0,0,0,0.4);
  z-index: 100;
}

.content {
  @apply fixed bg-white;
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
}
</style>
