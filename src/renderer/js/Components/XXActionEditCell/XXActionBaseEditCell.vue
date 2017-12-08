// 基础的编辑cell, 只含有左边一个文字
<template>
  <div class="xx-action-edit-cell-self-container">
    <slot>
      Default Tip
    </slot>
    <slot name='right'>
    </slot>
  </div>
</template>


<script>
  export default {
    name: 'XXActionEditCell'
  }
</script>


<style lang='scss' scoped>
.xx-action-edit-cell-self-container{
  height: 20px;
  width: 100%;
  padding: 0 4px 0 8px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
