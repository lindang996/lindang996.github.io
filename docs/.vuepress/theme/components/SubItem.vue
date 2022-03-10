<template>
  <div class="sub-item">
    <h4 v-if="subItem.type === 'links'" @click="toggleSubItem">
      {{ subItem.text }}
      <span :class="['arrow', {'down': subOpen}, {'right': !subOpen}]" />
    </h4>

    <ul
      v-if="subItem.type === 'links' && subOpen"
      class="dropdown-subitem-wrapper"
    >
      <li
        v-for="childSubItem in subItem.items"
        :key="childSubItem.link"
        class="dropdown-subitem"
      >
        <NavLink
          :item="childSubItem"
          @focusout="$emit('setOpen', false)"
        />
      </li>
    </ul>

    <NavLink
      v-if="subItem.type !== 'links'"
      :item="subItem"
      @focusout="$emit('setOpen', false)"
    />
  </div>
</template>
<script>
import NavLink from "@theme/components/NavLink.vue";
import last from 'lodash/last'
export default {
  name: "sub-item",
  props: {
    subItem: Object,
  },
  components: {
      NavLink
  },
  data() {
    return {
      subOpen: true,
    };
  },
  methods: {
    isLastItemOfArray(item, array) {
      return last(array) === item;
    },
    toggleSubItem() {
      this.subOpen = !this.subOpen;
    },
  },
};
</script>
<style  lang="stylus">
sub-item
    h4
        margin 0.45rem 0 0
        border-top 1px solid #eee
        padding 1rem 1.5rem 0.45rem 1.25rem
    .dropdown-subitem-wrapper
        padding 0
        list-style none
        .dropdown-subitem
          font-size 0.9em
    a
        display block
        line-height 1.7rem
        position relative
        border-bottom none
        font-weight 400
        margin-bottom 0
        padding 0 1.5rem 0 1.25rem
        &:hover
          color $accentColor
        &.router-link-active
          color $accentColor
          &::after
            content ""
            width 0
            height 0
            border-left 5px solid $accentColor
            border-top 3px solid transparent
            border-bottom 3px solid transparent
            position absolute
            top calc(50% - 2px)
            left 9px
    &:first-child h4
        margin-top 0
        padding-top 0
        border-top 0
</style>