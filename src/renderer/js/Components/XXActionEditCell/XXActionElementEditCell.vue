<template>
  <xx-action-edit-cell>
    <slot>
      <!-- 默认 -->
    </slot>
    <div class='icons-container' slot='right'>
      <div class='lock-icon'>
        <img src='./lock.png' />
      </div>
      <div class='visible-icon'>
        <img src='./view-on.png' />
      </div>
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

.icons-container{
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .lock-icon{
    width: 16px;
    height: 16px;
  }

  .visible-icon{
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
}

.lock-icon{
  img{
    height: 100%;
  }
}

.visible-icon{
  img{
    width: 100%;
    height: 10px;
  }
}
</style>
