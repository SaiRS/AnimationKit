<template>
  <div class='xxElementEditPanel-rootVueContainer'>
    <div class='xx-elements-container'
      @click.self.stop='onClick'

      @dragenter='onDragEnter'
      @dragover='onDragOver'>
      <!-- 唯一的节点 -->
      <XXBasicActor :nodeGraph='nodeGraph'></XXBasicActor>
    </div>
  </div>
</template>

<script>
  import xxvNotificationCenter from
    'XXVendor/Notification/NotificationCenter.js';
  import {XXSelectedElementsChangedNotification} from
    '../Notification/XXElementEditNotification.js'


  export default {
    name: 'XXElementEditPanel',

    props: {
      nodeGraph: {
        type: Object
      }
    },

    components: {
    },

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

    methods: {
      onClick() {
        // 取消当前选择的元素
        this.resetCurrentSelectedActorMixin();
      },

      onDragEnter() {
        // console.log('on Drag Enter');
        event.preventDefault();
      },

      onDragOver(event) {
        // console.log('on Drag Over');
        event.preventDefault();
      }
    },
  }
</script>

<style lang='scss' scoped>

.xxElementEditPanel-rootVueContainer{
  background-color: white;
  color: #191919;

  position: relative;

  .xx-elements-container{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }
}
</style>


<xx-vue-docs>
## ElementEditPanel
this is tool document for the vue.
</xx-vue-docs>
