<template>
  <div class='xxActionEditPanel-rootVueContainer'>
  </div>
</template>

<script>

  import xxvNotificationCenter from
      'XXVendor/Notification/NotificationCenter.js';

  export default {
    name: 'XXActionEditPanel',

    mounted: function () {
      setTimeout(() => {
        console.log('发送通知')
        xxvNotificationCenter.postNotification('xxSelectedElementsChanged', this);
      }, 1000);

      setTimeout(() => {
        console.log('再次发送通知')
        xxvNotificationCenter.postNotification('xxSelectedElementsChanged', this);
      }, 2000);
    },

    updated: function () {
    }
  }
</script>

<style lang='scss' scoped>

.xxActionEditPanel-rootVueContainer{
}

</style>
