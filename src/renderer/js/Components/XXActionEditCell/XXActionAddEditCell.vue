<template>
  <xx-action-edit-cell>
    <slot>
      <!-- 默认 -->
    </slot>
    <div class='add-icon' slot='right'>

    </div>
    <div slot='sop' slot-scope="props">
      <span>hello from parent</span>
      <span>{{ props.text }}</span>
    </div>
  </xx-action-edit-cell>
</template>

<script>
  import XXActionEditCell from './XXActionBaseEditCell.vue'
  export default {
    name: 'XXActionAddEditCell',

    components: {
      'xx-action-edit-cell': XXActionEditCell
    }
  }
</script>

<style lang='scss' scoped>

.add-icon{
  background: url('./add.png') no-repeat;
  width: 16px;
  height: 16px;
  background-size: 100%;
}
</style>
