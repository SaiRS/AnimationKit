<template>
  <div>
    <img src='' />
  </div>
</template>

<script>

let basic = {
  name: 'XXBasicActor',
  props: {

  },
  methods:{
    test() {
      console.log('basic test')
    }
  }
}

let newProperties = {
  name: 'XXImageActor',

  props: {
    nodeGraph: {
      type: Object
    }
  },

  methods: {
    test: function() {
      console.log('new test')
    }
  }
}


let ImageActor = _.merge(basic, newProperties);


export default ImageActor;
</script>

<style lang='scss' scoped>
</style>
