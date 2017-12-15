<template>
  <div class='xxActionEditPanel-rootVueContainer'>
    <xx-action-control-bar :currentFrame='currentFrame' :playing='isPlaying' :recycle='isRecycleMode' :record='isRecording'
      @clickFirstFrame='onClickFirstFrame'
      @clickBackwardFrame='onClickBackwardFrame'
      @clickPlay='onClickPlay'
      @clickForwardFrame='onClickForwardFrame'
      @clickRecycle='onClickRecycle'
      @clickRecord='onClickRecord'
    ></xx-action-control-bar>
    <div class='xxActionEditPanel-Timeline-Property-Frame-container'>
      <div class='xxActionEditPanel-Timeline-Property-container'>
        <xx-action-timeline-control-bar class='timeline-control-bar-container'
          :nodeGraph='nodeGraph'
          :actionConfigs='actionConfigs'
          :currentTimeLineId='currentTimeLineId'
          @currentTimeLineChanged='onCurrentTimeLineChanged'
          ></xx-action-timeline-control-bar>
        <xx-action-property-control-bar class='property-control-bar-container'></xx-action-property-control-bar>
      </div>
      <xx-action-frame-control-bar class='xxActionEditPanel-Frame-container'></xx-action-frame-control-bar>
    </div>
  </div>
</template>

<script>
  import XXActionControlBar from 'XXComponents/ActionControlBar/XXActionControlBar.vue'
  import XXActionFrameControlBar from 'XXComponents/XXActionFrameControlBar/XXActionFrameControlBar.vue'
  import XXActionPropertyControlBar from 'XXComponents/XXActionPropertyControlBar/XXActionPropertyControlBar.vue'
  import XXActionTimeLineControlBar from 'XXComponents/XXActionTimeLineControlBar/XXActionTimeLineControlBar.vue'


  import XXVueActor from 'XXVendor/Action/Actor/XXVueActor.js'
  export default {
    name: 'XXActionEditPanel',

    data() {
      return {
        isPlaying: false,
        isRecording: true,
        currentFrame: 0,
        isRecycleMode: false,
      }
    },

    props: {
      // 场景的根结点
      nodeGraph: {
        type: Object,
      },

      // 场景的action配置
      actionConfigs: {
        type: Object,
      },

      // 当前的时间线id
      currentTimeLineId: {
        type: String,
      }
    },

    components: {
      'xx-action-control-bar': XXActionControlBar,
      'xx-action-frame-control-bar': XXActionFrameControlBar,
      'xx-action-property-control-bar': XXActionPropertyControlBar,
      'xx-action-timeline-control-bar': XXActionTimeLineControlBar
    },

    updated: function () {
    },

    computed: {
    },

    methods: {
      onClickFirstFrame() {
        this.currentFrame = 0
      },

      onClickBackwardFrame() {
        this.currentFrame = Math.max(0, --this.currentFrame);
      },

      onClickPlay() {
        this.isPlaying = !this.isPlaying

        // TODO: 先取消选择当前的actor，不然会触发vue-store 不能在mutation之外修改state的错误
        let currentActor = this.currentSelectedActorMixin;
        this.resetCurrentSelectedActorMixin();
        this.runTimelineAction(this.currentTimeLineId);
      },

      onClickForwardFrame() {
        // TODO: 最大值限制
        this.currentFrame++
      },

      onClickRecycle() {
        this.isRecycleMode = !this.isRecycleMode
      },

      onClickRecord() {
        this.isRecording = !this.isRecording
      },

      onCurrentTimeLineChanged(value) {
        this.$emit('currentTimeLineChanged', value);
      },

      /**
       * 执行整个场景的actionId的动画
       * @param  {[type]} actionId [description]
       * @return {[type]}            [description]
       */
      runTimelineAction(actionId) {
        // 根结点的action
        // this.runAction(this.nodeGraph, actionId);

        // 子节点
        let children = this.$nodeGraphParser.getChildren(this.nodeGraph);
        for (let i = 0; i < children.length; i++) {
          this.runAction(children[i], actionId);
        }
      },

      /**
       * node执行actionId对应动画
       * @param  {[type]} actor       node的数据结构
       * @param  {[type]} actionId [description]
       * @return {[type]}            [description]
       */
      runAction(actor, actionId) {
        // 播放当前选择的actor的当前时间线action
        let actions = this.$nodeGraphParser.getActions(actor);
        // 当前时间线对应的action配置
        let actionData = this.$actionsInfoParser.getActionProperty(actions, actionId);

        let action = this.$actionInfoParser.createActionObject(actionData);
        let vueActor = new XXVueActor(this.$nodeGraphParser.getUUID(actor), actor)
        vueActor.runAction(action)

        // 子节点
        let children = this.$nodeGraphParser.getChildren(actor);
        for (let i = 0; i < children.length; i++) {
          this.runAction(children[i], actionId);
        }
      }
    }
  }
</script>

<style lang='scss' scoped>

.xxActionEditPanel-rootVueContainer{
  background-color: #323236;
}

.xxActionEditPanel-Timeline-Property-Frame-container{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: calc(100% - 40px);

  .xxActionEditPanel-Timeline-Property-container{
    flex: 0 0 240px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;

    border-right: 1px solid black;
  }

  .xxActionEditPanel-Frame-container{
    flex: 1 1 auto;
  }
}

.xxActionEditPanel-Timeline-Property-container{
  .property-control-bar-container,
  .timeline-control-bar-container{
    flex: 0 0 50%;
    width: 100%;
    overflow-y: auto;

    border-bottom: 1px solid black;
  }
}


</style>


<xx-vue-docs>
## ActionEditPanel
this is tool document for the vue.
</xx-vue-docs>
