<template>
  <div class='xx-element-inspector-vue-container' :class='classObject'>
    <!-- 背景 -->
    <div class='xx-element-inspector-group'>
      <div>背景</div>
      <div class='background-group-container'>
        <div class='background-fill-mode-container'>
          <div>填充样式</div>
          <Select v-model="fillmode" style="width:200px; margin-left: 8px;">
            <Option v-for="item in fillmodelist" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class='background-content-container'>
          <div v-if="fillmode=='none' || fillmode=='color'">
            <ColorPicker v-model="backgroundcolor" alpha />
          </div>
          <div v-else-if="fillmode=='gradient' " class='gradient-container'>
            <div class='gradient-color-container'>
              <ColorPicker v-model="gradientstart" alpha />
              <Button type="text" style="color:white" @click='switchGrident'><-----></Button>
              <ColorPicker v-model="gradientend" alpha />·
            </div>
            <div class="gradient-angle-container">
              <Slider v-model="gradientangle" :max=360 :min=0 show-input></Slider>
            </div>
          </div>
          <div v-else class='image-container'>
            <div class='thumbnail-image-container'>

            </div>
            <div class='image-config-container'>
              <Select v-model="backgroundimagemode" style="width: 108px; margin: 8px;">
                <Option v-for="item in backgroundimagemodelist" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <Button @click='chooseBackgroundImage'>选取</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- 边框 -->
    <div class='xx-element-inspector-group'>
      <div>边框</div>
      <div class='border-group-container'>
        <div class='border-group-left-container'>
          <div>宽度</div>
          <Input size="small" v-model='currentBorderWidth' :disabled='!isBorderSelected' placeholder="宽度"></Input>
          <div>样式</div>
          <Select v-model="currentborderstyle">
              <Option v-for="item in borderstylelist" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class='border-group-middle-container'>
          <div class='current-border-selected-container'>
            <xx-border-selector :selectedBorderType='selectedBorderType' @selectedBorderChanged='onSelectedBorder'></xx-border-selector>
          </div>
          <div class='current-border-color-container'>
            <ColorPicker v-model="currentbordercolor" alpha />
          </div>
        </div>
        <div class="border-group-right-container">
          <div>半径</div>
          <Input size="small" :disabled='!isBorderRadiusSelected' placeholder="半径"></Input>
          <div>补白</div>
          <Input size="small" :disabled='!isBorderSelected' placeholder="补白"></Input>
        </div>
      </div>
    </div>
    <!-- 可见性 -->
    <div class='xx-element-inspector-group'>
      <div>可见性</div>
      <div class='visible-group-container'>
        <div class='alpha-container'>
          <div>不透明度</div>
          <div class='alpha-input-container'>
            <Slider style="width: 80%;" v-model="alpha" show-input :max=100 :min=0></Slider>
          </div>

        </div>
        <div class='visible-container'>
          <div>显示</div>
          <RadioGroup v-model="show">
            <Radio label="true"><span>显示</span></Radio>
            <Radio label="false"><span>隐藏</span></Radio>
        </RadioGroup>
        </div>
      </div>
    </div>
    <!-- 阴影 -->
    <div class='xx-element-inspector-group'>
      <div>阴影</div>
      <div class='shadow-group-container'>
        <div class='shadow-left-group'>
          <div class='shadow-box-container'>
            <div class='shadow-indicator'>
            </div>
          </div>
        </div>
        <div class='shadow-middle-group'>
          <div class='shandow-middle-top-group'>
            <div>x</div>
            <Input class='shadow-input' size="small" placeholder="px"></Input>
          </div>
          <div class='shandow-middle-bottom-group'>
            <div>y</div>
            <Input class='shadow-input' size="small" placeholder="px"></Input>
          </div>
        </div>
        <div class='shadow-right-group'>
          <div class='shadow-right-top-group'>
            <div>模糊度</div>
            <Input class='shadow-input' size="small" placeholder="px"></Input>
          </div>
          <div class='shadow-right-bottom-group'>
            <div>颜色</div>
            <ColorPicker v-model="shadowcolor" alpha />
          </div>
        </div>
      </div>
    </div>
    <!-- 滤镜 -->
    <div class='xx-element-inspector-group'>
      <div>滤镜</div>
      <div style="height:300px;">
        TODO
      </div>
    </div>
    <!-- 倒影 -->
    <div class='xx-element-inspector-group'>
      <div>倒影</div>
      <div>
        TODO
      </div>
    </div>
  </div>
</template>

<script>
  import * as XXValueTool from 'XXTool/ValueTool.js';
  import XXBorderSelector from 'XXComponents/BorderSelector/XXBorderSelector.vue'
  export default {
    name: 'XXElementPropertyInspector',

    data: function () {
      return {
        fillmodelist: [
          {
            value: 'none',
            label: '无'
          },
          {
            value: 'color',
            label: '颜色'
          },
          {
            value: 'gradient',
            label: '渐变'
          },
          {
            value: 'image',
            label: '图片'
          }
        ],

        backgroundimagemode: 'scaleToFill',
        backgroundimagemodelist: [
          {
            value: 'scaleToFill',
            label: '缩放以适合'
          },
          {
            value: 'repeat',
            label: '重复'
          },
          {
            value: 'repeatx',
            label: '水平重复'
          },
          {
            value: 'repeaty',
            label: '垂直重复'
          },
        ],

        currentborderstyle: 'unset',
        borderstylelist: [
          {
            value: 'unset',
            label: '无'
          },
          {
            value: 'solid',
            label: '实线'
          },
          {
            value: 'double',
            label: '双线'
          },
          {
            value: 'dotted',
            label: '点线'
          },
          {
            value: 'dashed',
            label: '虚线'
          },
          {
            value: 'groove',
            label: '凹线'
          },
          {
            value: 'ridge',
            label: '凸线'
          },
          {
            value: 'inset',
            label: '内嵌'
          },
          {
            value: 'outset',
            label: '外嵌'
          },
        ],

        selectedBorderType: 'none', // 当前选中的border
        currentbordercolor: 'rgba(1, 1, 1, 1)',

        alpha: 100,
        show: "true",

        shadowcolor: 'rgba(0, 0, 0, 1)'
      }
    },

    components: {
      'xx-border-selector': XXBorderSelector,
    },

    computed: {
      classObject() {
        return {
          'xxg-disabled': this.currentSelectedActorMixin ? false : true,
        };
      },

      fillmode: {
        get() {
          let color = this.currentActorBackgroundColorMixin;
          if (this.currentActorBackgroundImageMixin) {
            if (this.isCurrentActorBackgroundImageImageModeMixin) {
              return 'image';
            } else if (this.isCurrentActorBackgroundImageGradientModeMixin) {
              return 'gradient';
            } else {
              return 'none';
            }
          } else if (color) {
            return 'color';
          } else {
            return 'none';
          }
        },

        set(value) {
          console.log('set fill mode ' + value);
          // 先删除
          this.deleteCurrentSelectedActorBackgroundMixin();
          if ('image' === value) {

          } else if ('gradient' === value) {
            this.setCurrentSelectedActorBackgroundGradientColorMixin({
              angle: '270deg',
              start: 'rgba(255, 255, 255, 1)',
              end: 'rgba(0, 0, 0, 1)'
            });
          } else if ('color' === value) {
            this.setCurrentSelectedActorBackgroundColorMixin('rgba(0, 0, 0, 1)');
          } else {
            // 删除background信息
          }
        },
      },

      backgroundcolor: {
        get() {
          let color = this.currentActorBackgroundColorMixin;
          if (color) {
            return color;
          } else {
            return 'rgba(0, 0, 0, 1)';
          }
        },

        set(value) {
          this.setCurrentSelectedActorBackgroundColorMixin(value);
        }
      },

      gradientstart: {
        get() {
          let color = this.currentActorBackgroundGradientStartColorMixin;
          if (color) {
            return color;
          } else {
            return 'rgba(255, 255, 255, 1)';
          }
        },

        set(value) {
          console.log('set gradient start ' + value);
          this.setCurrentSelectedActorBackgroundGradientColorMixin({
            angle: this.gradientangle + XXValueTool.xxfDefaultUnitOfAngle(),
            start: value,
            end: this.gradientend,
          });
        }
      },

      gradientend: {
        get() {
          let color = this.currentActorBackgroundGradientEndColorMixin;
          if (color) {
            return color;
          } else {
            return 'rgba(0, 0, 0, 1)';
          }
        },

        set(value) {
          console.log('set gradient end ' + value);
          this.setCurrentSelectedActorBackgroundGradientColorMixin({
            angle: this.gradientangle + XXValueTool.xxfDefaultUnitOfAngle(),
            start: this.gradientstart,
            end: value,
          });
        }
      },

      gradientangle: {
        get() {
          let angle = this.currentActorBackgroundGradientAngleMixin;
          return XXValueTool.xxfExtractNumberValueFromStringValue(angle);
        },

        set(value) {
          this.setCurrentSelectedActorBackgroundGradientColorMixin({
            angle: value + XXValueTool.xxfDefaultUnitOfAngle(),
            start: this.gradientstart,
            end: this.gradientend,
          });
        }
      },

      currentBorderWidth: {
        get() {
          // 判断当前是哪个边框
          if (this.selectedBorderType == 'top') {
            if (!this.currentActorBorderTopWidthMixin) {
              this.setCurrentSelectedActorBorderTopWidthMixin('1px');
              return '1px';
            } else {
              return this.currentActorBorderTopWidthMixin;
            }
          } else if(this.selectedBorderType == 'bottom'){
            if (!this.currentActorBorderBottomWidthMixin) {
              this.setCurrentSelectedActorBorderBottomWidthMixin('1px');
              return '1px';
            } else {
              return this.currentActorBorderBottomWidthMixin;
            }
          } else if (this.selectedBorderType == 'left') {
            if (!this.currentActorBorderLeftWidthMixin) {
              this.setCurrentSelectedActorBorderLeftWidthMixin('1px');
              return '1px';
            } else {
              return this.currentActorBorderLeftWidthMixin;
            }
          } else if (this.selectedBorderType == 'right') {
            if (!this.currentActorBorderRightWidthMixin) {
              this.setCurrentSelectedActorBorderRightWidthMixin('1px');
              return '1px';
            } else {
              return this.currentActorBorderRightWidthMixin;
            }
          } else {
            return '0px';
          }
        },

        set(value) {
          if (this.selectedBorderType == 'top') {
            this.setCurrentSelectedActorBorderTopWidthMixin(value);
          } else if (this.selectedBorderType == 'bottom') {
            this.setCurrentSelectedActorBorderBottomWidthMixin(value);
          } else if (this.selectedBorderType == 'left') {
            this.setCurrentSelectedActorBorderLeftWidthMixin(value);
          } else if (this.selectedBorderType == 'right') {
            this.setCurrentSelectedActorBorderRightWidthMixin(value);
          }
        }
      },

      currentBorderStyle: {
        get() {
          // 判断当前是哪个边框
          if (this.selectedBorderType == 'top') {
            if (!this.currentActorBorderTopWidthMixin) {
              this.setCurrentSelectedActorBorderTopWidthMixin('solid');
              return '1px';
            } else {
              return this.currentActorBorderTopWidthMixin;
            }
          } else {
            return 'unset';
          }
        },

        set(value) {

        }
      },

      isBorderSelected() {
        return ['top', 'bottom', 'right', 'left'].indexOf(this.selectedBorderType) != -1;
      },

      isBorderRadiusSelected() {
        return ['top-left', 'bottom-left', 'top-right', 'bottom-right'].indexOf(this.selectedBorderType) != -1;
      },
    },

    methods: {
      switchGrident: function() {
        let temp = this.gradientstart;
        this.gradientstart = this.gradientend;
        this.gradientend = temp;
      },

      chooseBackgroundImage: function() {
        console.log('选取背景图片')
      },

      onSelectedBorder(type) {
        this.selectedBorderType = type;
      }
    }

  }
</script>

<style lang='scss' scoped>

.xx-element-inspector-group{
  padding: 8px;
  position: relative;
}

.xx-element-inspector-group:not(:last-child)::after{
  content: '';
  position: absolute;
  height: 1px;
  background-color: #fff;
  width: 100%;
  bottom: 0px;
  left: 0px;
}

.background-group-container{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .background-fill-mode-container{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    padding: 8px;
  }

  .background-content-container{
    width: 100%;

    .gradient-container{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
    }

    .image-container{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.xx-element-inspector-vue-container{
  overflow-x: visible;
  overflow-y: scroll;
}


.gradient-angle-container{
  width: 100%;
}

.image-container{
  .thumbnail-image-container{
    width: 60px;
    height: 60px;
    border: 1px solid white;
    margin: 8px;
  }

  .image-config-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}


.border-group-container{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: no-wrap;

  .border-group-left-container,
  .border-group-middle-container,
  .border-group-right-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}

.border-group-middle-container{
  padding: 0 8px;
  .current-border-selected-container{
    width: 60px;
    height: 60px;
    background-color: white;
  }

  .current-border-color-container{
    margin-top: 8px;
  }
}

.visible-group-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-direction: column;

  .alpha-container,
  .visible-container{
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}

.alpha-input-container{
  width: 100%;
}

.shadow-group-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: no-wrap;

  .shadow-left-group{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shadow-middle-group{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .shadow-right-group{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.shadow-left-group{

  .shadow-box-container{
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    position: relative;

    .shadow-indicator{
      width: 3px;
      height: 3px;
      border-radius: 3px;
      z-index: 2;
      background-color: white;
    }
  }
}

.shadow-box-container::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: gray;
}

.shadow-box-container::after{
  content: '';
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: gray;
}

.shandow-middle-top-group,
.shandow-middle-bottom-group,
.shadow-right-top-group,
.shadow-right-bottom-group{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.shadow-input{
  width: 80px;
  padding: 4px 4px;
}

</style>

<xx-vue-docs>
## XXElementPropertyInspector
this is tool document for the vue.
</xx-vue-docs>
