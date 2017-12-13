<template>
  <div class='xx-action-timeline-control-bar-self-container'>
    <Select :value="currentTimeLineId" size="small" style="width:100px" @on-change='currentTimeLineChanged'>
      <Option v-for="timeline in timelinesForOptions" :value="timeline.value" :key="timeline.value">{{ timeline.label }}</Option>
    </Select>
    <xx-action-add-edit-cell>时间线操作</xx-action-add-edit-cell>
    <xx-action-element-edit-cell></xx-action-element-edit-cell>
  </div>
</template>


<script>
  import XXActionAddEditCell from 'XXComponents/XXActionEditCell/XXActionAddEditCell.vue'
  import XXActionElementEditCell from 'XXComponents/XXActionEditCell/XXActionElementEditCell.vue'
  export default {
    name: 'XXActionTimeLineControlBar',

    components: {
      'xx-action-add-edit-cell': XXActionAddEditCell,
      'xx-action-element-edit-cell': XXActionElementEditCell
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
      currentTimeLineId: {

      }
    },

    computed: {
      timelinesForOptions() {
        let results = []
        if (this.actionConfigs) {
          let keys = Object.keys(this.actionConfigs)
          for (let i = 0; i < keys.length; i++) {
            let value = keys[i] // action id
            results.push({
              value: value,
              label: this.$actionConfigParser.getActionName(this.actionConfigs[value])
            })
          }
        }

        return results
      },
    },

    methods: {
      currentTimeLineChanged(value) {
        console.log('currentTimeLineChanged', value)
        this.$emit('currentTimeLineChanged', value)
      }
    }
  }
</script>


<style lang='scss' scoped>

.xx-action-timeline-control-bar-self-container{

}
</style>
