<template>
  <div class='xxPropertyInspector-rootVueContainer'>
    <div class='propertyInspector-titleBar'>
      <div class='titleItem' :class='{inspectorselected: documentShowed}' @click='showDocument'>
        文稿
      </div>

      <div class='titleItem' :class='{inspectorselected: measurementShowed}' @click='showMeasurement'>
        度量
      </div>

      <div class='titleItem' :class='{inspectorselected: elementShowed}' @click='showElement'>
        元素
      </div>

      <div class='titleItem' :class='{inspectorselected: printShowed}' @click='showPrint'>
        文字
      </div>

      <div class='titleItem' :class='{inspectorselected: eventShowed}' @click='showEvent'>
        事件
      </div>

      <div class='titleItem' :class='{inspectorselected: indentifyShowed}' @click='showIndentify'>
        身份
      </div>
    </div>
    <div>
      <XXDocumentPropertyInspector v-show="documentShowed">
      </XXDocumentPropertyInspector>

      <XXMeasurementPropertyInspector v-show="measurementShowed">
      </XXMeasurementPropertyInspector>

      <XXElementPropertyInspector v-show="elementShowed">
      </XXElementPropertyInspector>

      <XXPrintPropertyInspector v-show="printShowed">
      </XXPrintPropertyInspector>

      <XXEventPropertyInspector v-show="eventShowed">
      </XXEventPropertyInspector>

      <XXIndentifyPropertyInspector v-show="indentifyShowed">
      </XXIndentifyPropertyInspector>

    </div>
  </div>
</template>

<script>
  import XXDocumentPropertyInspector from
    '../PropertyInspector/XXDocumentPropertyInspector.vue';
  import XXEventPropertyInspector from
    '../PropertyInspector/XXEventPropertyInspector.vue';
  import XXElementPropertyInspector from
    '../PropertyInspector/XXElementPropertyInspector.vue';
  import XXIndentifyPropertyInspector from
    '../PropertyInspector/XXIndentifyPropertyInspector.vue';
  import XXMeasurementPropertyInspector from
    '../PropertyInspector/XXMeasurementPropertyInspector.vue'
  import XXPrintPropertyInspector from
    '../PropertyInspector/XXPrintPropertyInspector.vue'

  export default {
    name: 'XXPropertyInspector',

    data: function () {
      return {
        documentShowed: true,
        measurementShowed: false,
        elementShowed: false,
        printShowed: false,
        eventShowed: false,
        indentifyShowed: false,
      }
    },

    props: {

    },

    components: {
      XXDocumentPropertyInspector: XXDocumentPropertyInspector,
      XXElementPropertyInspector: XXElementPropertyInspector,
      XXEventPropertyInspector: XXEventPropertyInspector,
      XXPrintPropertyInspector: XXPrintPropertyInspector,
      XXMeasurementPropertyInspector: XXMeasurementPropertyInspector,
      XXIndentifyPropertyInspector: XXIndentifyPropertyInspector
    },

    methods: {
      /*************
      * 事件
      **************/

      showDocument() {
        if (!this.documentShowed) {
          this.documentShowed = true;

          this.measurementShowed = false;
          this.elementShowed = false;
          this.printShowed = false;
          this.eventShowed = false;
          this.indentifyShowed = false;
        }
      },

      showMeasurement() {

        if (!this.measurementShowed) {
          this.measurementShowed = true;

          this.documentShowed = false;
          this.elementShowed = false;
          this.printShowed = false;
          this.eventShowed = false;
          this.indentifyShowed = false;
        }
      },

      showElement() {

        if (!this.elementShowed) {
          this.elementShowed = true;

          this.documentShowed = false;
          this.measurementShowed = false;
          this.printShowed = false;
          this.eventShowed = false;
          this.indentifyShowed = false;
        }
      },

      showPrint() {

        if (!this.printShowed) {
          this.printShowed = true;

          this.documentShowed = false;
          this.measurementShowed = false;
          this.elementShowed = false;
          this.eventShowed = false;
          this.indentifyShowed = false;
        }
      },

      showEvent() {

        if (!this.eventShowed) {
          this.eventShowed = true;

          this.measurementShowed = false;
          this.elementShowed = false;
          this.printShowed = false;
          this.documentShowed = false;
          this.indentifyShowed = false;
        }
      },

      showIndentify() {

        if (!this.indentifyShowed) {
          this.indentifyShowed = true;

          this.measurementShowed = false;
          this.elementShowed = false;
          this.printShowed = false;
          this.eventShowed = false;
          this.documentShowed = false;
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.xxPropertyInspector-rootVueContainer{
  background-color: #323236;
  padding: 8px;
  box-sizing: border-box;
  border-left: solid 1px black;

  .propertyInspector-titleBar{
    widht: 100%;
  }
}

.propertyInspector-titleBar{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .titleItem{
    padding: 8px;
    width: 40px;
    height: 30px;
  }
}

.inspectorselected{
  background-color: white;
  color: black
}

</style>


<xx-vue-docs>
## PropertyInspector
this is tool document for the vue.
</xx-vue-docs>
