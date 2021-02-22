<template>
  <div class="spinner-base">
    <div class="arrow-zone">
      <img
        v-if="index !== 0"
        src="~/assets/svg/arrow_back.svg"
        class="arrow"
        @click="goToItem(index - 1)"
      >
    </div>
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
    <div class="arrow-zone">
      <img
        v-if="index !== items.length - 1"
        src="~/assets/svg/arrow_forward.svg"
        class="arrow"
        @click="goToItem(index + 1)"
      >
    </div>
    <div class="item-selectors-area">
      <div class="item-selectors space-x-10">
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
  @apply w-full h-full grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
}

.content {
  @apply flex-grow;
}

.arrow-zone {
  @apply flex flex-col items-center h-full justify-center;
  grid-row: span 2;
  width: 100px;
}

.arrow {
  @apply cursor-pointer;
}

.item-selectors-area {
  @apply flex flex-col items-center w-full;
  grid-column: 2 / span 1;
}

.item-selectors {
  @apply flex mt-10 mb-25;
}

.item-selector {
  @apply cursor-pointer rounded-full w-25 h-25 border-2 border-gray-graph-dark;
}

.item-selector--selected {
  @apply bg-gray-graph-dark;
}
</style>
