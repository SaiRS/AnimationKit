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
        <xx-action-timeline-control-bar class='timeline-control-bar-container' :nodeGraph='nodeGraph'></xx-action-timeline-control-bar>
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
      nodeGraph: {
        type: Object,
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
        this.currentFrame = Math.max(0, --this.currentFrame)
      },

      onClickPlay() {
        this.isPlaying = !this.isPlaying
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
