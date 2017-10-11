<template>
  <div class='xxToolBar-rootVueContainer'>
    <div class="xxToolBar-firstGroup">

      <Dropdown class='xxToolBarItem' @on-click="insert">
        <a href="javascript:void(0)">
            元素
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem name='imageactor'>图片</DropdownItem>
            <DropdownItem name='textactor'>文本</DropdownItem>
            <DropdownItem divided name='baseactor'>矩形</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

    <div class='xxToolBar-seconGroup'>
      <div class='xxToolBarItem' @click='group'>
        成组
      </div>
      <div class='xxToolBarItem' @click='unGroup'>
        取消成组
      </div>
      <div class='xxToolBarItem' @click='foreward'>
        前方
      </div>
      <div class='xxToolBarItem' @click='backward'>
        后方
      </div>
    </div>

    <div class='xxToolBar-thirdGroup'>
      <div class='xxToolBarItem' @click='left'>
        左边
      </div>
      <div class='xxToolBarItem' @click='bottom'>
        下边
      </div>
      <div class='xxToolBarItem' @click=right>
        右边
      </div>
    </div>
  </div>
</template>

<script>
  // 通知
  import xxvNotificationCenter from
    'XXVendor/Notification/NotificationCenter.js';

  import {XXSelectedElementsChangedNotification} from
    '../Notification/XXElementEditNotification.js'

  import {XXInsertBasicActorNotification,
          XXInsertTextActorNotification,
          XXInsertImageActorNotification} from
    '../Notification/XXInsertElementNotification.js'

  import {XXToolBarShowRightPanelNotification} from
    '../Notification/XXToolBarNotification.js'

  export default {
    name: 'XXToolBar',

    data: function() {
      return {
        leftShowed: true,
        bottomShowed: true,
        rightShowed: true,
      }
    },

    /*********************
    * 声明周期
    **********************/
    mounted: function() {
      // 注册监听
      xxvNotificationCenter.addObserver(
        this,
        'selectedElementsChanged',
        XXSelectedElementsChangedNotification
      )
    },

    methods: {

      /************************
       * 通知
       ************************/
      selectedElementsChanged() {
        console.log('接收到通知，然后移除监听')

        xxvNotificationCenter.removeObserverWithNameSender(
          this,
          XXSelectedElementsChangedNotification)
      },

      /************************
       * 事件
       ************************/

      insert: function(itemName) {
        // 显示下拉菜单
        if ('baseactor' === itemName) {
          this.insertBasicActor();
        } else if ('textactor' === itemName) {
          this.insertTextActor();
        } else if ('imageactor' === itemName) {
          this.insertImageActor();
        }
      },

      insertBasicActor() {
        console.log('insertBasicActor');
        xxvNotificationCenter.postNotification(
          XXInsertBasicActorNotification, this);
      },

      insertImageActor() {
        console.log('insertImageActor');
        xxvNotificationCenter.postNotification(
          XXInsertImageActorNotification, this);
      },

      insertTextActor() {
        console.log('insertTextActor');
        xxvNotificationCenter.postNotification(
          XXInsertTextActorNotification, this);
      },

      group: function() {
        console.log('clicked group');
      },

      unGroup: function() {
        console.log('clicked unGroup');
      },

      foreward: function() {
        console.log('clicked foreward');
      },

      backward: function() {
        console.log('clicked backward');
      },

      left: function() {
        console.log('clicked left');
      },

      bottom: function() {
        console.log('clicked bottom');
      },

      right: function() {
        console.log('clicked right');

        this.rightShowed = !this.rightShowed;
        xxvNotificationCenter.postNotification(
          XXToolBarShowRightPanelNotification,
          this,
          {
            show: this.rightShowed
          })
      }
    }
  }
</script>

<style lang='scss' scoped>

.xxToolBar-rootVueContainer{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;

  .xxToolBar-firstGroup{
    flex: 1 1 auto;
  }

  .xxToolBar-seconGroup{
    flex: 2 1 auto;
  }

  .xxToolBar-thirdGroup{
    flex: 1 1 auto;
  }
}

.xxToolBar-firstGroup{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.xxToolBar-seconGroup{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.xxToolBar-thirdGroup{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.xxToolBarItem{
  padding: 4px 8px;
}
</style>


<xx-vue-docs>
## ToolBar
this is tool document for the vue.
</xx-vue-docs>
