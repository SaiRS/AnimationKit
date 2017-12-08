<template>
  <div class='xx-action-timeline-control-bar-self-container'>
    <Select v-model="currentTimeline" size="small" style="width:100px">
      <Option v-for="timeline in timelinesForOptions" :value="timeline.value" :key="timeline.value">{{ timeline.label }}</Option>
    </Select>
    <xx-action-add-edit-cell>时间线操作</xx-action-add-edit-cell>
  </div>
</template>


<script>
  import XXActionAddEditCell from 'XXComponents/XXActionEditCell/XXActionAddEditCell.vue'
  export default {
    name: 'XXActionTimeLineControlBar',

    components: {
      'xx-action-add-edit-cell': XXActionAddEditCell,
    },

    props: {
      // 永远为根结点的nodeGraph
      nodeGraph: {
        type: Object
      },

      // 为文档中的actionConfigs属性
      actionConfigs: {
        type: Object,
        default: function() {
          return {};
        }
      },

      // 当前时间线
      currentTimeline: {

      }
    },

    computed: {
      timelinesForOptions() {
        let results = []
        if (this.actionConfigs) {
          let keys = Object.keys(this.actionConfigs)
          for (let i = 0; i < keys.length; i++) {
            value = keys[i] // action id
            results.push({
              value: value,
              label: this.$actionConfigParser.getActionName(this.actions[value])
            })
          }
        }

        return results
      },
    }
  }
</script>


<style lang='scss' scoped>

.xx-action-timeline-control-bar-self-container{

}
</style>
