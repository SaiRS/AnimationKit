<template>
  <div class='xx-border-selector-self-container'>
    <xx-border-selector-item
      class='border-item-parent-container'
      v-for='(border, index) in borders'
      :type='border.type' :key='index'
      :isSelected='selectedBorderType == border.type'
      @selectBorder='onSelectBorder'
      ></xx-border-selector-item>
  </div>
</template>


<script>
  import XXBorderSelectorItem from './XXBorderSelectorItem.vue';
  export default {
    name: 'XXBorderSelector',

    data: function() {
      return {
        borders: [
          {
            type: 'top-left',
          },
          {
            type: 'top',
          },
          {
            type: 'top-right',
          },
          {
            type: 'left',
          },
          {
            type: 'none',
          },
          {
            type: 'right',
          },
          {
            type: 'bottom-left',
          },
          {
            type: 'bottom',
          },
          {
            type: 'bottom-right',
          }
        ]
      }
    },

    props: {
      selectedBorderType: {
        type: String,
        default: 'none'
      }
    },

    components: {
      'xx-border-selector-item': XXBorderSelectorItem,
    },

    methods: {
      onSelectBorder(type) {
        this.$emit('selectedBorderChanged', type)
      }
    }
  };
</script>


<style lang='scss' scoped>

.xx-border-selector-self-container{
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .border-item-parent-container{
    // width: calc(100% / 3);
    // height: calc(100% / 3);
    flex: 0 0 auto;
  }
}
</style>
