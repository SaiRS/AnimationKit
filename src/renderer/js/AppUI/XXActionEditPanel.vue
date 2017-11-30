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
  </div>
</template>

<script>
  import XXActionControlBar from 'XXComponents/ActionControlBar/XXActionControlBar.vue'
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

    components: {
      'xx-action-control-bar': XXActionControlBar,
    },

    updated: function () {
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

</style>


<xx-vue-docs>
## ActionEditPanel
this is tool document for the vue.
</xx-vue-docs>
