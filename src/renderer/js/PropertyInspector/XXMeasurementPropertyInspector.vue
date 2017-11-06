<template>
  <div :class='classObject'>
    <!-- 内容概览 -->
    <div class="xx-measurement-inspector-group">
      <div>
        内容概览
      </div>
      <Select v-model="overflow" style="width:200px">
          <Option v-for="item in overflowlist" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <!-- 放置 -->
    <div class='xx-measurement-inspector-group'>
      <div>
        放置
      </div>
      <div class='xx-measurement-group'>
        <div class='measurement-positon-size'>
          <div class='measurement-positon-size-item'>
            <div class="item-not-middel">
              左
            </div>
            <Input v-model="left" size="small" placeholder="small size"></Input>
            <div class="item-not-middel">
              px
            </div>
          </div>
          <div class='measurement-positon-size-item'>
            <div class="item-not-middel">
              上
            </div>
            <Input v-model="top" size="small" placeholder="small size"></Input>
            <div class="item-not-middel">
              px
            </div>
          </div>
          <div class='measurement-positon-size-item'>
            <div class="item-not-middel">
              宽度
            </div>
            <Input v-model="width" size="small" placeholder="small size"></Input>
            <div class="item-not-middel">
              px
            </div>
          </div>
          <div class="measurement-positon-size-item">
            <div class="item-not-middel">
              高度
            </div>
            <Input v-model="height" size="small" placeholder="small size"></Input>
            <div class="item-not-middel">
              px
            </div>
          </div>
        </div>
        <div class='measurement-keep-scale'>
          <Checkbox v-model="keepScale">限制比例</Checkbox>
        </div>
        <div class='measurement-reset'>
          <Button>原始大小</Button>
        </div>
      </div>
    </div>
    <!-- 缩放 -->
    <div class='xx-measurement-inspector-group'>
      <div>
        缩放
      </div>
      <div class="measurement-scale-group">
        <div class='scale-info'>
          <div class='scale-info-item'>
            <div>
              宽度
            </div>
            <Input v-model="scaleX" size="small" placeholder="small size"></Input>
          </div>
          <div class='scale-info-item'>
            <div>
              高度
            </div>
            <Input v-model="scaleY" size="small" placeholder="small size"></Input>
          </div>
        </div>
        <div class='scale-keep-scale'>
          <Checkbox v-model="keepWHScale">限制比例</Checkbox>
        </div>
      </div>
    </div>
    <!-- 旋转 -->
    <div class='xx-measurement-inspector-group'>
      <div>
        旋转
      </div>
      <div class='measurement-rotate-group'>
        <div class="rotate-group-item">
          <div>
            角度
          </div>
          <Input class="rotate-content-item" v-model="rotationZ" size="small" placeholder="small size"></Input>
          <Input class="rotate-content-item" v-model="rotationY" size="small" placeholder="small size"></Input>
          <Input class="rotate-content-item" v-model="rotationX" size="small" placeholder="small size"></Input>
        </div>
        <div class='rotate-group-item'>
          <div style='visibility: hidden;'>角度</div>
          <div class="rotate-content-item">z</div>
          <div class="rotate-content-item">y</div>
          <div class="rotate-content-item">x</div>
        </div>
      </div>
    </div>
    <!-- 锚点 -->
    <div class='xx-measurement-inspector-group'>
      <div>
        锚点
      </div>
      <div class='measurement-anchor-group'>
        <div class="anchor-group-item">
          <div class="anchor-content-item">
            <div>
              x
            </div>
            <Input class="anchor-input-item" v-model="anchorX" size="small" placeholder="small size"></Input>
          </div>
          <div class="anchor-content-item">
            <div>
              y
            </div>
            <Input class="anchor-input-item" v-model="anchorY" size="small" placeholder="small size"></Input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'XXMeasurementPropertyInspector',

    data: function () {
      return {
        overflowlist: [
          {
            label: '可见',
            value: 'visible'
          },
          {
            label: '隐藏',
            value: 'hidden'
          },
          {
            label: '滚动条',
            value: 'scroll',
          },
          {
            label: '自动滚动条',
            value: 'auto'
          }
        ],

        keepScale: false,
        keepWHScale: false,
      }
    },

    props: {
      visibility: {
        type: String,
        default: 'visible'  // 默认可见
      },
    },

    computed: {
      classObject() {
        return {
          'xxg-disabled': this.currentSelectedActorMixin ? false : true,
        };
      },

      overflow: {
        get() {
          let overflow = this.currentActorOverflowMixin;
          return overflow ? overflow : '';
        },

        set(value) {
          this.modifyCurrentActorOverflowPropMixin(value);
        }
      },

      left: {
        get() {
          let pos = this.currentActorPositionMixin;
          return pos ? pos['x'] : 0;
        },

        set(value) {
          this.setCurrentSelectedActorPositionMixin({
            x: value,
            y: this.top
          });
        }
      },

      top: {
        get() {
          let pos = this.currentActorPositionMixin;
          return pos ? pos['y'] : 0;
        },

        set(value) {
          this.setCurrentSelectedActorPositionMixin({
            x: this.left,
            y: value
          });
        }
      },

      width: {
        get() {
          let size = this.currentActorSizeMixin;
          return size ? size['width'] : 0;
        },

        set(value) {
          this.setCurrentSelectedActorSizeMixin({
            width: value,
            height: this.height
          });
        }
      },

      height: {
        get() {
          let size = this.currentActorSizeMixin;
          return size ? size['height'] : 0;
        },

        set(value) {
          this.setCurrentSelectedActorSizeMixin({
            width: this.width,
            height: value
          });
        }
      },

      scaleX: {
        get() {
          let scale = this.currentActorScaleMixin;
          if (scale) {
            return scale['scaleX'];
          } else {
            return 1;
          }
        },
      },

      scaleY: {
        get() {
          let scale = this.currentActorScaleMixin;
          if (scale) {
            return scale['scaleY'];
          } else {
            return 1;
          }
        },
      },

      rotationZ: {
        get() {
          let rotation = this.currentActorRotationMixin;
          if (rotation) {
            return rotation['rotationZ'];
          } else {
            return 0;
          }
        },

        set(value) {

        }
      },

      rotationX: {
        get() {
          let rotation = this.currentActorRotationMixin;
          if (rotation) {
            return rotation['rotationX'];
          } else {
            return 0;
          }
        },

        set(value) {

        }
      },

      rotationY: {
        get() {
          let rotation = this.currentActorRotationMixin;
          if (rotation) {
            return rotation['rotationY'];
          } else {
            return 0;
          }
        },

        set(value) {

        }
      },

      anchorX: {
        get() {
          let anchor = this.currentActorAnchorPointMixin;
          if (anchor) {
            return anchor['anchorX'];
          } else {
            return 0.5;
          }
        },

        set(value) {

        }
      },

      anchorY: {
        get() {
          let anchor = this.currentActorAnchorPointMixin;
          if (anchor) {
            return anchor['anchorY'];
          } else {
            return 0.5;
          }
        },

        set(value) {

        }
      }
    },
  }
</script>

<style lang='scss' scoped>

.xx-measurement-inspector-group{
  position: relative;
  padding: 6px 0;
}


.xx-measurement-inspector-group:not(:last-child)::after {
  content: '';
  position: absolute;
  height: 1px;
  background-color: #fff;
  width: 100%;
  bottom: 0px;
  left: 0px;
}

.xx-measurement-group{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  .measurement-positon-size{

  }

  .measurement-keep-scale{

  }

  .measurement-reset{

  }
}

.measurement-positon-size{
  display: flex;
  align-items: center;
  align-content: space-around;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;

  .measurement-positon-size-item{
    flex: 1 1 50%;
    padding: 4px 8px;

    display: flex;
    align-items: center;

    .item-not-middel{
      padding: 0 4px;
      flex: 0 0 auto;
    }
  }
}


.measurement-scale-group{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  .scale-info{

  }

  .scale-keep-scale{

  }
}

.scale-info{
  display: flex;
  align-items: center;
  align-content: space-around;
  justify-content: flex-start;
  // flex-wrap: wrap;
  width: 100%;

  .scale-info-item{
    flex: 1 1 auto;
    padding: 4px 8px;
  }
}

.scale-info-item{
  display: flex;
}


.measurement-rotate-group,
.measurement-anchor-group{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}

.rotate-group-item{
  display: flex;
  align-items: center;

  .rotate-content-item{
    width: 60px;
    padding: 0 8px;
    text-align: center;
  }
}


.measurement-anchor-group{
  .anchor-group-item{
    display: flex;
    align-items: center;

    .anchor-content-item{
      flex: 1 1 auto;
      padding: 4px 8px;

      display: flex;
      align-items: center;
    }
  }
}

.anchor-input-item{
  padding: 4px 8px;
}

</style>

<xx-vue-docs>
## XXMeasurementPropertyInspector
this is tool document for the vue.
</xx-vue-docs>
