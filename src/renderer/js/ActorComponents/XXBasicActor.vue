<template>
  <div class='xx-basic-actor'
    :style='styleObject'
    draggable="true"
    @click.self.exact='onClick'
    @click.alt.exact='onAltClick'

    @dragstart.self='onDragStart'
    @drag.self='onDrag'
    @dragend.self='onDragEnd'>
    <template v-for='(child, index) in nodeGraph.children'>
      <XXBasicActor style='padding: 0px 0 0 8px' :nodeGraph="child" v-if='child.parentClassName == "XXNodeDomActor"'></XXBasicActor>
      <XXTextActor style='padding: 0px 0 0 8px' :nodeGraph="child" v-if='child.parentClassName == "XXNodeDomTextActor"'></XXTextActor>
      <XXImageActor style='padding: 0px 0 0 8px' :nodeGraph="child" v-if='child.parentClassName == "XXNodeDomImageActor"'></XXImageActor>
    </template>
  </div>
</template>


<script>
  import {XXNodeGraphParser,
    XXPositionPropertyParser,
    XXSizePropertyParser,
    XXStringPropertyParser,
    XXScalePropertyParser,
    XXRotationPropertyParser,
    XXAnchorPropertyParser,
    XXBackgroundPropertyParser,
    XXBorderPropertyParser,
    XXPaddingPropertyParser,
    XXNumberPropertyParser} from 'XXLoader/DataParser/XXDataParser.js';

  import xxvNotificationCenter from
    'XXVendor/Notification/NotificationCenter.js';

  export default {
    name: 'XXBasicActor',

    components: {

    },

    data: function() {
      return {
        dragStartX: 0,
        dragStartY: 0,
      }
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
        let posprop = XXNodeGraphParser.getPositionProperty(this.nodeGraph);
        let pos = XXPositionPropertyParser.getPosition(posprop);
        if (pos) {
          return pos['x'];
        } else {
          return 0;
        }
      },

      top: function() {
        let posprop = XXNodeGraphParser.getPositionProperty(this.nodeGraph);
        let pos = XXPositionPropertyParser.getPosition(posprop);
        if (pos) {
          return pos['y'];
        } else {
          return 0;
        }
      },

      width: function() {
        let sizeprop = XXNodeGraphParser.getSizeProperty(this.nodeGraph);
        let size = XXSizePropertyParser.getSizeValue(sizeprop);
        if (size) {
          return size['width'];
        } else {
          return 0;
        }
      },

      height: function() {
        let sizeprop = XXNodeGraphParser.getSizeProperty(this.nodeGraph);
        let size = XXSizePropertyParser.getSizeValue(sizeprop);
        if (size) {
          return size['height'];
        } else {
          return 0;
        }
      },

      overflow: function() {
        let overflowprop = XXNodeGraphParser.getOverflowProperty(this.nodeGraph);
        let overflow = XXStringPropertyParser.getStringValue(overflowprop);
        if (overflow) {
          return overflow;
        } else {
          return 'visible';
        }
      },

      scaleX: function() {
        let scaleprop = XXNodeGraphParser.getScaleProperty(this.nodeGraph);
        let scale = XXScalePropertyParser.getScaleValue(scaleprop);
        if (scale) {
          return scale['scaleX'];
        } else {
          return 1;
        }
      },

      scaleY: function() {
        let scaleprop = XXNodeGraphParser.getScaleProperty(this.nodeGraph);
        let scale = XXScalePropertyParser.getScaleValue(scaleprop);
        if (scale) {
          return scale['scaleY'];
        } else {
          return 1;
        }
      },

      rotateZ: function() {
        let rotationprop = XXNodeGraphParser.getRotationProperty(this.nodeGraph);
        let rotation = XXRotationPropertyParser.getRotation(rotationprop);
        if (rotation) {
          return rotation['rotationZ'];
        } else {
          return 0;
        }
      },

      rotateX: function() {
        let rotationprop = XXNodeGraphParser.getRotationProperty(this.nodeGraph);
        let rotation = XXRotationPropertyParser.getRotation(rotationprop);
        if (rotation) {
          return rotation['rotationX'];
        } else {
          return 0;
        }
      },

      rotateY: function() {
        let rotationprop = XXNodeGraphParser.getRotationProperty(this.nodeGraph);
        let rotation = XXRotationPropertyParser.getRotation(rotationprop);
        if (rotation) {
          return rotation['rotationY'];
        } else {
          return 0;
        }
      },

      anchorX: function() {
        let anchorprop = XXNodeGraphParser.getAnchorProperty(this.nodeGraph);
        let anchor = XXAnchorPropertyParser.getAnchor(anchorprop);
        if (anchor) {
          return anchor['anchorX'];
        } else {
          return '50%';
        }
      },

      anchorY: function() {
        let anchorprop = XXNodeGraphParser.getAnchorProperty(this.nodeGraph);
        let anchor = XXAnchorPropertyParser.getAnchor(anchorprop);
        if (anchor) {
          return anchor['anchorY'];
        } else {
          return '50%';
        }
      },

      /**
       * 元素
       */
      background: function() {
        return '#000';
      },

      backgroundcolor: function() {
        let background = XXNodeGraphParser.getBackgroundProperty(this.nodeGraph);
        if (background) {
          return XXBackgroundPropertyParser.getBackgroundColor(background);
        } else {
          return null;
        }
      },

      backgroundimage: function() {
        let background = XXNodeGraphParser.getBackgroundProperty(this.nodeGraph);
        if (background) {
          return XXBackgroundPropertyParser.getValidBackgroundImageCSSSyntax(background);
        } else {
          return null;
        }
      },

      leftBorderWidth: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getLeftBorderWidth(border);
        } else {
          return null;
        }
      },

      leftBorderStyle: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getLeftBorderStyle(border);
        } else {
          return null;
        }
      },

      leftBorderColor: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getLeftBorderColor(border);
        } else {
          return null;
        }
      },

      rightBorderWidth: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getRightBorderWidth(border);
        } else {
          return null;
        }
      },

      rightBorderStyle: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getRightBorderStyle(border);
        } else {
          return null;
        }
      },

      rightBorderColor: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getRightBorderColor(border);
        } else {
          return null;
        }
      },

      topBorderWidth: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getTopBorderWidth(border);
        } else {
          return null;
        }
      },

      topBorderStyle: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getTopBorderStyle(border);
        } else {
          return null;
        }
      },

      topBorderColor: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getTopBorderColor(border);
        } else {
          return null;
        }
      },

      bottomBorderWidth: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getBottomBorderWidth(border);
        } else {
          return null;
        }
      },

      bottomBorderStyle: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getBottomBorderStyle(border);
        } else {
          return null;
        }
      },

      bottomBorderColor: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getBottomBorderColor(border);
        } else {
          return null;
        }
      },

      leftBottomBorderRadius: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getBottomLeftRadius(border);
        } else {
          return '0px';
        }
      },
      rightBottomBorderRadius: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getBottomRightRadius(border);
        } else {
          return '0px';
        }
      },
      leftTopBorderRadius: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getTopLeftRadius(border);
        } else {
          return '0px';
        }
      },
      rightTopBorderRadius: function() {
        let border = XXNodeGraphParser.getBorderProperty(this.nodeGraph);
        if (border) {
          return XXBorderPropertyParser.getTopRightRadius(border);
        } else {
          return '0px';
        }
      },

      leftPadding: function() {
        let padding = XXNodeGraphParser.getPaddingProperty(this.nodeGraph);
        if (padding) {
          return XXPaddingPropertyParser.getLeftPaddingWidth(padding);
        } else {
          return '0px';
        }
      },
      rightPadding: function() {
        let padding = XXNodeGraphParser.getPaddingProperty(this.nodeGraph);
        if (padding) {
          return XXPaddingPropertyParser.getRightPaddingWidth(padding);
        } else {
          return '0px';
        }
      },
      topPadding: function() {
        let padding = XXNodeGraphParser.getPaddingProperty(this.nodeGraph);
        if (padding) {
          return XXPaddingPropertyParser.getTopPaddingWidth(padding);
        } else {
          return '0px';
        }
      },
      bottomPadding: function() {
        let padding = XXNodeGraphParser.getPaddingProperty(this.nodeGraph);
        if (padding) {
          return XXPaddingPropertyParser.getBottomPaddingWidth(padding);
        } else {
          return '0px';
        }
      },

      visible: function() {
        return true;
      },

      alpha: function() {
        let opacity = XXNodeGraphParser.getOpacityProperty(this.nodeGraph);
        return XXNumberPropertyParser.getNumber(opacity, 1);
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
          left: this.left,
          top: this.top,
          width: this.width,
          height: this.height,
          transform: `scaleX(${this.scaleX}) scaleY(${this.scaleY})
            rotateZ(${this.rotateZ})
            rotateX(${this.rotateX}) rotateY(${this.rotateY})`,
          'transform-origin': `${this.anchorX} ${this.anchorY}`,
          // 元素
          'background-image': this.backgroundimage,
          'background-color': this.backgroundcolor,
          'border-left': `${this.leftBorderColor} ${this.leftBorderStyle}
            ${this.leftBorderWidth}`,
          'border-right': `${this.rightBorderColor} ${this.rightBorderStyle}
            ${this.rightBorderWidth}`,
          'border-top': `${this.topBorderColor} ${this.topBorderStyle}
            ${this.topBorderWidth}`,
          'border-bottom': `${this.bottomBorderColor} ${this.bottomBorderStyle}
            ${this.bottomBorderWidth}`,
          'border-bottom-left-radius': `${this.leftBottomBorderRadius}`,
          'border-bottom-right-radius': `${this.rightBottomBorderRadius}`,
          'border-top-left-radius': `${this.leftTopBorderRadius}`,
          'border-top-right-radius': `${this.rightTopBorderRadius}`,
          'padding-left': `${this.leftPadding}`,
          'padding-right': `${this.rightPadding}`,
          'padding-top': `${this.topPadding}`,
          'padding-bottom': `${this.bottomPadding}`,
          'display': `${this.visible}`,
          'opacity': `${this.alpha}`,
          'box-shadow': `${this.shadowColor} ${this.shadowOffsetX}px
            ${this.shadownOffsetY}px ${this.shadowBlur}px`,
        }
      }
    },

    methods: {
      onClick(event) {
        console.log('选中了元素 ' + this.$getUUID(this.nodeGraph));
        console.log(`isTheCurrentActorByUUID = ${this.isTheCurrentActorByUUIDMixin(this.$getUUID(this.nodeGraph))}`);
        if (this.isTheCurrentActorByUUIDMixin(this.$getUUID(this.nodeGraph))) {
          // do nothing
        } else {
          // 设置
          this.setCurrentSelectedActorMixin(this.nodeGraph);
        }
      },

      onAltClick(event) {
        console.log('on Control click');
      },

      onDragEnter() {
        console.log('onDragEnter');
      },

      onDragStart(event) {
        // console.log('onDragStart');
        event.dataTransfer.effectAllowed = "move";

        console.log(event);

        this.dragStartX = event.clientX;
        this.dragStartY = event.clientY;
        if (this.isTheCurrentActorByUUIDMixin(this.nodeGraph)) {
          // 设置为当前node
          this.setCurrentSelectedActorMixin(this.nodeGraph);
        }
      },

      onDrag(event) {
        event.preventDefault();

        let offset = {
          x: event.clientX - this.dragStartX,
          y: event.clientY - this.dragStartY,
        };
        this.moveCurrentActorByOffsetMixin(offset);
        // 重新设置start
        this.dragStartX = event.clientX;
        this.dragStartY = event.clientY;
      },

      onDragEnd(event) {
        // console.log('onDragEnd');
        event.preventDefault();
      },

      onDragExit() {
        console.log('onDragExit');
      },

      onDragLeave() {
        console.log('onDragLeave');
      },

      onDragOver() {
        // console.log('onDragOver');
      },
    },
  }
</script>


<style lang='scss' scoped>

.xx-basic-actor{
  position: absolute;
}

</style>
