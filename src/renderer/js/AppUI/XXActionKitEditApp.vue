<template>
  <div class='xxActionEditApp-rootVueContainer'>
    <XXToolBarComponent class='xxActionEditApp-topPart'>
    </XXToolBarComponent>

    <div class='xxActionEditApp-middlePart'>
      <XXResourceInspectorComponent class='xxMiddlePart-leftPart'>
      </XXResourceInspectorComponent>

      <div class='xxMiddlePart-centerPart'>
        <XXElementEditPanelComponent class='xxCenterPart-topPart' :nodeGraph="nodeGraph">
        </XXElementEditPanelComponent>

        <XXActionEditPanelComponent class='xxCenterPart-bottomPart'>
        </XXActionEditPanelComponent>
      </div>

      <XXPropertyInspectorComponent class='xxMiddlePart-rightPart'>
      </XXPropertyInspectorComponent>
    </div>

    <XXStatusBarComponent class='xxActionEditApp-bottomPart'>
    </XXStatusBarComponent>
  </div>
</template>


<script>

import XXActionEditPanel from 'XXAppUI/XXActionEditPanel.vue';
import XXElementEditPanel from 'XXAppUI/XXElementEditPanel.vue';
import XXPropertyInspector from 'XXAppUI/XXPropertyInspector.vue';
import XXResourceInspector from 'XXAppUI/XXResourceInspector.vue';
import XXStatusBar from 'XXAppUI/XXStatusBar.vue';
import XXToolBar from 'XXAppUI/XXToolBar.vue';

import xxvNotificationCenter from
  'XXVendor/Notification/NotificationCenter.js';
import {XXToolBarShowRightPanelNotification} from
  '../Notification/XXToolBarNotification.js'
import {XXInsertBasicActorNotification,
        XXInsertTextActorNotification,
        XXInsertImageActorNotification} from
  '../Notification/XXInsertElementNotification.js'


import XXBaseActorBuilder from 'XXVendor/Builder/BaseActor/XXBaseActorBuilder.js';

export default {
  name: 'XXActionKitEditApp',

  data: function() {
    return {
      nodeGraph: {}, // 当前元素的结构图
    };
  },

  components: {
    XXActionEditPanelComponent: XXActionEditPanel,
    XXElementEditPanelComponent: XXElementEditPanel,
    XXPropertyInspectorComponent: XXPropertyInspector,
    XXResourceInspectorComponent: XXResourceInspector,
    XXStatusBarComponent: XXStatusBar,
    XXToolBarComponent: XXToolBar
  },

  /****************************
  * 生命周期
  *****************************/

  mounted: function () {
    // 注册通知

    // 右边面板可见性改变
    xxvNotificationCenter.addObserver(
      this,
      'receivedToolBarRightPanelVisibleChangedNotification',
      XXToolBarShowRightPanelNotification
    );

    // 插入基本元素
    xxvNotificationCenter.addObserver(
      this,
      'receivedInsertBasicActorNotification',
      XXInsertBasicActorNotification
    );

    // 插入文字元素
    xxvNotificationCenter.addObserver(
      'receivedInsertTextActorNotification',
      XXInsertTextActorNotification
    );

    // 插入图片元素
    xxvNotificationCenter.addObserver(
      this,
      'receivedInsertImageActorNotification',
      XXInsertImageActorNotification
    );
  },

  methods: {
    /******************
    * 通知
    *******************/
    receivedToolBarRightPanelVisibleChangedNotification(info) {
      console.log('收到tool bar right panel 改变的消息');
      console.dir(info)
    },

    receivedInsertBasicActorNotification(info) {
      console.log('收到插入基本元素的通知');
      console.dir(info);
      if (!Object.keys(this.nodeGraph).length) {
        this.nodeGraph = XXBaseActorBuilder.buildInitActor();
      } else {
        this.nodeGraph['children'].push(XXBaseActorBuilder.buildInitActor());
      }

    },

    receivedInsertTextActorNotification(info) {
      console.log('收到插入文字元素的通知');
      console.dir(info);
    },

    receivedInsertImageActorNotification(info) {
      console.log('收到插入图片元素的通知');
      console.dir(info);
    }
  }
}

</script>


<style lang='scss' scoped>

.xxActionEditApp-rootVueContainer{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #191919;
  color: white;

  .xxActionEditApp-topPart{
    height: 44px;
    width: 100%;
  }

  .xxActionEditApp-middlePart{
    width: 100%;
    height: calc(100% - 88px);
  }

  .xxActionEditApp-bottomPart{
    height: 44px;
    width: 100%;
  }

}

.xxActionEditApp-topPart{

}

.xxActionEditApp-bottomPart{

}

.xxActionEditApp-middlePart{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .xxMiddlePart-leftPart{
    height: 100%;
    width: 160px;
    flex: 0 0 auto;
  }

  .xxMiddlePart-centerPart{
    height: 100%;
    width: calc(100% - 160px - 320px);
    flex: 1 1 auto;
  }

  .xxMiddlePart-rightPart{
    height: 100%;
    width: 320px;
    flex: 0 0 auto;
    overflow-y: scroll;
  }
}

.xxMiddlePart-centerPart{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .xxCenterPart-topPart{
    width: 100%;
    height: 50%;
    flex: 0 0 auto;
  }

  .xxCenterPart-bottomPart{
    width: 100%;
    height: 50%;
    flex: 0 0 auto;
  }
}

</style>


<xx-vue-docs>
## App
this is tool document for the vue.
</xx-vue-docs>
