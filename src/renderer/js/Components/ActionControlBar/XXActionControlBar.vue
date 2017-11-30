<template>
  <div class='xx-action-control-bar-self-container'>
    <div class='contron-bar'>
      <div class='control-bar-item' @click='onClickFirst'>
        <div class="first"></div>
      </div>
      <div class='control-bar-item' @click='onClickBackward'>
        <div class='backward'>
        </div>
      </div>
      <div class='control-bar-item' :class='bindPlayClass' @click='onClickPlay'>
        <div class='playorstop'>
        </div>
      </div>
      <div class='control-bar-item' @click='onClickForwardFrame'>
        <div class='forward'>
        </div>
      </div>
      <div class='control-bar-item' @click='onClickRecycle' :class='bindRecycleClass'>
        <div class='recycle'>
        </div>
      </div>
      <div class='control-bar-item' @click='onClickRecord' :class='bindRecordClass'>
        <div class='record'>
        </div>
      </div>
    </div>
    <div class='current-frame-info'>
      {{formatCurrentFrame}}
    </div>
    <div class='frame-scale-control'>
      TODO:缩放控制
    </div>
  </div>
</template>


<script>
  export default {
    name: 'XXActionControlBar',

    props: {
      currentFrame: {
        type: Number,
        default: 0,
      },

      playing: {
        type: Boolean,
        default: true
      },

      recycle: {
        type: Boolean,
        default: true
      },

      record: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      formatCurrentFrame() {
        return '00:00:00'
      },

      bindPlayClass() {
        return {
          'pause': !this.playing
        }
      },

      bindRecycleClass() {
        return {
          'recycling': this.recycle
        }
      },

      bindRecordClass() {
        return {
          'recording': this.record
        }
      }
    },

    methods: {
      onClickFirst() {
        this.$emit('clickFirstFrame')
      },

      onClickBackward() {
        this.$emit('clickBackwardFrame')
      },

      onClickPlay() {
        this.$emit('clickPlay')
      },

      onClickForwardFrame() {
        this.$emit('clickForwardFrame')
      },

      onClickRecycle() {
        this.$emit('clickRecycle')
      },

      onClickRecord() {
        this.$emit('clickRecord')
      }
    }
  }
</script>

<style lang='scss' scoped>

.xx-action-control-bar-self-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid black;
  .contron-bar{
    flex: 0 0 auto;
    margin-right: 8px;
  }

  .current-frame-info{
    margin-right: auto;
    flex: 0 1 auto;
  }

  .frame-scale-control{
    flex: 0 0 auto;
  }
}

.contron-bar{
  display: flex;
  justify-content: center;
  align-items: center;


  .control-bar-item{
    width: 40px;
    height: 40px;
    // background-color: #9b9b9b;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .control-bar-item:not(:last-child) {
    border-right: 1px solid black;
  }

  & .control-bar-item:active{
    opacity: 0.5;
    background-color: #9b9b9b;
  }
}


.control-bar-item{
  .first{
    background: url('./first-frame.png') no-repeat;
    width: 16px;
    height: 12px;
    background-size: 100%;
  }

  .backward{
    background: url('./pre-frame.png') no-repeat;
    width: 16px;
    height: 12px;
    background-size: 16px 12px;
  }

  .playorstop{
    background: url('./play.svg') no-repeat;
    width: 16px;
    height: 12px;
    background-size: 16px 12px;
  }

  .playorstop .pause{
    background: url('./pause.svg') no-repeat;
  }

  .forward{
    background: url('./next-frame.png') no-repeat;
    width: 16px;
    height: 12px;
    background-size: 16px 12px;
  }

  .recycle{
    background: url('./reload_round.svg') no-repeat;
    width: 16px;
    height: 12px;
    background-size: 16px 12px;
  }

  .record{
    border-radius: 8px;
    width: 16px;
    height: 16px;
    background-color: #f44336;
  }


}

.control-bar-item.recycling {
  background-color: #9b9b9b;

  .recycle{
    background-image: url('./reload_round_fill.svg');
  }
}

.control-bar-item.recording {
  background-color: #f44336;

  .record{
    background-color: white;
  }
}
</style>
