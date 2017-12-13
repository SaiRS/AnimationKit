<template>
  <div class='xxActionEditApp-rootVueContainer'>
    <XXToolBarComponent class='xxActionEditApp-topPart'>
    </XXToolBarComponent>

    <div class='xxActionEditApp-middlePart'>
      <XXResourceInspectorComponent class='xxMiddlePart-leftPart'>
      </XXResourceInspectorComponent>

      <div class='xxMiddlePart-centerPart'>
        <XXElementEditPanelComponent class='xxCenterPart-topPart' :nodeGraph="rootNodeGraph">
        </XXElementEditPanelComponent>

        <XXActionEditPanelComponent class='xxCenterPart-bottomPart' :nodeGraph='rootNodeGraph' :actionConfigs='actionConfigs'
          :currentTimeLineId='currentTimeLineId'
          @currentTimeLineChanged='onCurrentTimeLineChanged'>
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
import {XXSceneManager} from 'XXRenderer/js/Scene/XXSceneManager.js';

export default {
  name: 'XXActionKitEditApp',

  data: function() {
    return {
      scene: XXSceneManager.createNewScene(), // 场景
      currentTimeLineId: '', // 当前时间线的id
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

  created: function() {
    let actionConfigs = this.$sceneInfoParser.getActionConfigs(this.scene)
    this.currentTimeLineId = Object.keys(actionConfigs)[0];

    // FIXME: 测试的action config数据
    let testActionConfig = XXSceneManager.createNewActionTestConfig()
    this.$sceneInfoParser.addActionConfig(this.scene, testActionConfig)
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
      this,
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

  computed: {
    rootNodeGraph: function() {
      return this.$sceneInfoParser.getSceneRootNode(this.scene)
    },

    actionConfigs: function() {
      return this.$sceneInfoParser.getActionConfigs(this.scene)
    }
  },

  methods: {
    /******************
    * 通知
    *******************/
    receivedToolBarRightPanelVisibleChangedNotification(info) {
      console.log('收到tool bar right panel 改变的消息');
      console.dir(info)
      // TODO: 修改可见性
      this.$showInfoNoticeView('TODO: 修改右边可见性');
    },

    receivedInsertBasicActorNotification(info) {
      console.log('收到插入基本元素的通知');
      console.dir(info);

      // 先取消当前选择的actor, 否则this.nodeGraph有可能是当前的actor，再
      // 执行this.nodeGraph['children'].push会因为再store之外修改state的值
      // 而出错。

      // 记录当前actor
      let currentActor = this.currentSelectedActorMixin
      this.resetCurrentSelectedActorMixin();

      // FIXME: 创建新的node(为了测试，先使用测试node)
      let newNode = XXSceneManager.createTestNewRectangleNode();
      if (!currentActor) { // 没有选中，则添加在根结点之下
        this.$nodeGraphParser.addChild(this.rootNodeGraph, newNode)
      } else {
        this.$nodeGraphParser.addChild(currentActor, newNode)
      }

      // 选中新增的元素
      this.setCurrentSelectedActorMixin(newNode);
    },

    receivedInsertTextActorNotification(info) {
      console.log('收到插入文字元素的通知');
      console.dir(info);
      // TODO: 插入文字
      this.$showInfoNoticeView('TODO: 插入文字');
    },

    receivedInsertImageActorNotification(info) {
      console.log('收到插入图片元素的通知');
      console.dir(info);
      // TODO: 插入图片
      this.$showInfoNoticeView('TODO: 插入图片');
    },

    /**
     * 时间线改变事件
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    onCurrentTimeLineChanged(value) {
      this.currentTimeLineId = value;
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
    overflow: visible;
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
