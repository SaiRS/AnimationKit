<template>
  <div class='xx-basic-actor' :style='styleObject'>
    <template v-for='(child, index) in nodeGraph.children'>
      <XXBasicActor style='padding: 0px 0 0 8px' :nodeGraph="child" v-if='child.parentClassName == "XXNodeDomActor"'></XXBasicActor>
      <XXTextActor style='padding: 0px 0 0 8px' :nodeGraph="child" v-if='child.parentClassName == "XXNodeDomTextActor"'></XXTextActor>
      <XXImageActor style='padding: 0px 0 0 8px' :nodeGraph="child" v-if='child.parentClassName == "XXNodeDomImageActor"'></XXImageActor>
    </template>
  </div>
</template>


<script>

  export default {
    name: 'XXBasicActor',

    components: {

    },

    props: {
      nodeGraph: {
        type: Object
      },
    },

    computed: {
      /**
       * 度量
       */

      left: function() {
        return 0;
      },

      top: function() {
        return 10;
      },

      width: function() {
        return 86;
      },

      height: function() {
        return 86;
      },

      overflow: function() {
        return 'auto';
      },

      scaleX: function() {
        return 1;
      },

      scaleY: function() {
        return 1;
      },

      rotateZ: function() {
        return 0;
      },

      rotateX: function() {
        return 0;
      },

      rotateY: function() {
        return 0;
      },

      anchorX: function() {
        return 0.5;
      },

      anchorY: function() {
        return 0.5;
      },

      /**
       * 元素
       */
      background: function() {
        return '#000';
      },

      leftBorderWidth: function() {
        return 1;
      },

      leftBorderStyle: function() {
        return 'solid'
      },

      leftBorderColor: function() {
        return '#000'
      },

      rightBorderWidth: function() {
        return 1;
      },

      rightBorderStyle: function() {
        return 'solid'
      },

      rightBorderColor: function() {
        return '#000'
      },

      topBorderWidth: function() {
        return 1;
      },

      topBorderStyle: function() {
        return 'solid'
      },

      topBorderColor: function() {
        return '#000'
      },

      bottomBorderWidth: function() {
        return 1;
      },

      bottomBorderStyle: function() {
        return 'solid'
      },

      bottomBorderColor: function() {
        return '#000'
      },

      leftBottomBorderRadius: function() {
        return 0;
      },
      rightBottomBorderRadius: function() {
        return 0;
      },
      leftTopBorderRadius: function() {
        return 0;
      },
      rightTopBorderRadius: function() {
        return 0;
      },

      leftPadding: function() {
        return 0;
      },
      rightPadding: function() {
        return 0;
      },
      topPadding: function() {
        return 0;
      },
      bottomPadding: function() {
        return 0;
      },

      visible: function() {
        return true;
      },

      alpha: function() {
        return 1;
      },

      shadowColor: function() {
        return '#000'
      },

      shadowOffsetX: function() {
        return 0;
      },

      shadownOffsetY: function() {
        return 0;
      },

      shadowBlur: function() {
        return 0;
      },

      shadowSpread: function() {
        return 0;
      },

      /**
       * 生成的样式对象
       */
      styleObject: function() {
        return {
          // 度量
          overflow: this.overflow,
          left: this.left + 'px',
          top: this.top + 'px',
          width: this.width + 'px',
          height: this.height + 'px',
          transform: `scaleX(${this.scaleX}) scaleY(${this.scaleY})
            rotateZ(${this.rotateZ})
            rotateX(${this.rotateX}) rotateY(${this.rotateY})`,
          'transform-origin': `${this.anchorX} ${this.anchorY}`,
          // 元素
          'background': this.background,
          'border-left': `${this.leftBorderColor} ${this.leftBorderStyle}
            ${this.leftBorderWidth}`,
          'border-right': `${this.rightBorderColor} ${this.rightBorderStyle}
            ${this.rightBorderWidth}`,
          'border-top': `${this.topBorderColor} ${this.topBorderStyle}
            ${this.topBorderWidth}`,
          'border-bottom': `${this.bottomBorderColor} ${this.bottomBorderStyle}
            ${this.bottomBorderWidth}`,
          'border-bottom-left-radius': `${this.leftBottomBorderRadius}px`,
          'border-bottom-right-radius': `${this.rightBottomBorderRadius}px`,
          'border-top-left-radius': `${this.leftTopBorderRadius}px`,
          'border-top-right-radius': `${this.rightTopBorderRadius}px`,
          'padding-left': `${this.leftPadding}px`,
          'padding-right': `${this.rightPadding}px`,
          'padding-top': `${this.topPadding}px`,
          'padding-bottom': `${this.bottomPadding}px`,
          'display': `${this.visible}`,
          'opacity': `${this.alpha}`,
          'box-shadow': `${this.shadowColor} ${this.shadowOffsetX}px
            ${this.shadownOffsetY}px ${this.shadowBlur}px`,
        }
      }
    },

    methods: {

    },
  }
</script>


<style lang='scss' scoped>

.xx-basic-actor{
  position: absolute;
}

</style>
