<template>
  <div class="xx-border-selector-item-self-container" :class='selected' @click='onClick'>
  </div>
</template>


<script>
  export default {
    name: 'XXBorderSelectorItem',


    props: {
      type: {
        type: String, // top, bottom, left, right, top-left, top-right, bottom-left, bottom-right, none
        default: 'none',
      },

      isSelected: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      selected() {
        return {
          'selected': this.isSelected,
          'top': this.type == 'top',
          'bottom': this.type == 'bottom',
          'left': this.type == 'left',
          'right': this.type == 'right',
          'top-left': this.type == 'top-left',
          'top-right': this.type == 'top-right',
          'bottom-left': this.type == 'bottom-left',
          'bottom-right': this.type == 'bottom-right',
        };
      }
    },

    methods: {
      onClick() {
        this.$emit('selectBorder', this.type);
      }
    }
  };
</script>


<style lang='scss' scoped>

.xx-border-selector-item-self-container{
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid #9b9b9b;
}

.xx-border-selector-item-self-container.selected{
  background-color: #9b9b9b;
}

.xx-border-selector-item-self-container::after{
  content: '';
  position: absolute;
  background-color: black;
}

.xx-border-selector-item-self-container.top::after{
  left: 0;
  right: 0;
  height: 1px;
  top: 50%;
}
.xx-border-selector-item-self-container.bottom::after{
  left: 0;
  right: 0;
  height: 1px;
  bottom: 50%;
}

.xx-border-selector-item-self-container.left::after{
  top: 0;
  bottom: 0;
  width: 1px;
  left: 50%;
}

.xx-border-selector-item-self-container.right::after{
  top: 0;
  bottom: 0;
  width: 1px;
  right: 50%;
}

.xx-border-selector-item-self-container.top-left::after{
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  left: 50%;
  top: 50%;
  background-color: transparent;
}

.xx-border-selector-item-self-container.top-right::after{
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  left: -50%;
  top: 50%;
  background-color: transparent;
}

.xx-border-selector-item-self-container.bottom-left::after{
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  left: 50%;
  top: -50%;
  background-color: transparent;
}

.xx-border-selector-item-self-container.bottom-right::after{
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  left: -50%;
  top: -50%;
  background-color: transparent;
}

</style>
