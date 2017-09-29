<template>
  <div class='xxElementEditPanel-rootVueContainer'>
    这是元素编辑区
  </div>
</template>

<script>
  import xxvNotificationCenter from
    'XXVendor/Notification/NotificationCenter.js';
  import {XXSelectedElementsChangedNotification} from
    '../Notification/XXElementEditNotification.js'

  export default {
    name: 'XXElementEditPanel',

    /******************
    * 生命周期
    *******************/

    mounted: function () {
      setTimeout(() => {
        console.log('发送通知')
        xxvNotificationCenter.postNotification(
          XXSelectedElementsChangedNotification, this);
      }, 1000);

      setTimeout(() => {
        console.log('再次发送通知')
        xxvNotificationCenter.postNotification(
          XXSelectedElementsChangedNotification, this);
      }, 2000);
    },
  }
</script>

<style lang='scss' scoped>

.xxElementEditPanel-rootVueContainer{
  background-color: white;
  color: #191919;
}
</style>


<xx-vue-docs>
## ElementEditPanel
this is tool document for the vue.
</xx-vue-docs>
