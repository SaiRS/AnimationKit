<template>
  <Alert v-bind:type=alertType show-icon closable v-on:on-close='close'>
    {{alertTitle}}
    <template slot="desc">
      {{alertDesc}}
    </template>
  </Alert>
</template>

<script>
  export default {
    name: 'XXStaticTipView',

    props: {
      alertType: {
        type: String,
        require: true,
        default: 'success', // 'warning', 'error'
      },

      alertTitle: {
        type: String,
        default: ''
      },

      alertDesc: {
        type: String,
        default: ''
      }
    },

    methods: {
      close: function (event) {
        // 关闭事件
      }
    }
  }


</script>


<style>
</style>
