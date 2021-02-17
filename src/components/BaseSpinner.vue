<template>
  <div>
    <slot
      v-if="currentItem === 'item-1'"
      name="item-1"
    />
    <slot
      v-if="currentItem === 'item-2'"
      name="item-2"
    />
    <slot
      v-if="currentItem === 'item-3'"
      name="item-3"
    />
    <slot
      v-if="currentItem === 'item-4'"
      name="item-4"
    />
    <slot
      v-if="currentItem === 'item-5'"
      name="item-5"
    />
    <slot
      v-if="currentItem === 'item-6'"
      name="item-6"
    />
  </div>
</template>

<script>

export default {
  name: 'BaseSpinner',
  data () {
    return {
      index: 0
    }
  },
  computed: {
    currentItem () {
      return this.items[this.index]
    },
    items () {
      const items = []

      if (this.$slots['item-1']) {
        items.push('item-1')
      }
      if (this.$slots['item-2']) {
        items.push('item-2')
      }
      if (this.$slots['item-3']) {
        items.push('item-3')
      }
      if (this.$slots['item-4']) {
        items.push('item-4')
      }
      if (this.$slots['item-5']) {
        items.push('item-5')
      }
      if (this.$slots['item-6']) {
        items.push('item-6')
      }

      return items
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
