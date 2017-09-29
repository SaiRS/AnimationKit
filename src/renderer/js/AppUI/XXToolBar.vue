<template>
  <div class='xxToolBar-rootVueContainer'>
    <div class="xxToolBar-firstGroup">
      <div class='xxToolBarItem' @click='insert'>
        插入
      </div>
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
  import xxvNotificationCenter from
        'XXVendor/Notification/NotificationCenter.js';


  export default {
    name: 'XXToolBar',

    data: function() {
      return {

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
        'xxSelectedElementsChanged'
      )
    },

    methods: {

      /************************
       * 通知
       ************************/
      selectedElementsChanged() {
        console.log('接收到通知，然后移除监听')

        xxvNotificationCenter.removeObserver(this)
      },

      /************************
       * 事件
       ************************/

      insert: function() {
        console.log('clicked insert');
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
