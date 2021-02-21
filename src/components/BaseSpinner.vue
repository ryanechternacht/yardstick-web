<template>
  <div class="spinner-base">
    <div class="content">
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
    <div class="item-selectors-area">
      <div class="item-selectors">
        <div
          v-for="(item, i) in items"
          :key="item"
          class="item-selector"
          :class="{'item-selector--selected': i === index}"
          @click="goToItem(i)"
        />
      </div>
    </div>
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
  },
  methods: {
    goToItem (index) {
      this.index = index
    }
  }
}
</script>

<style lang="postcss" scoped>
/* TODO style the selectors and add the arrows
   this will make us switch to grid instead of flex */
.spinner-base {
  @apply w-full h-full flex flex-col;
}

.content {
  @apply flex-grow;
}

.item-selectors-area {

}

.item-selectors {
  @apply flex;
}

.item-selector {
  @apply cursor-pointer rounded-full w-25 h-25 border-2 border-gray-graph-dark;
}

.item-selector--selected {
  @apply bg-gray-graph-dark;
}
</style>
