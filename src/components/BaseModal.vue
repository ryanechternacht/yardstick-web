<template>
  <div class="background">
    <div class="content">
      <div>
        <slot name="default" />
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
  @apply fixed h-full w-full top-0 left-0 mt-60;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.content {
  @apply fixed bg-white border-gray-graph-dark border-2;
  width: 60%;
  height: 60%;
  top: 10%;
  left: 20%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
