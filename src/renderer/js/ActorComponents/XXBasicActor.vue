<template>
  <div>
      <div>
        Basic Actor
      </div>
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
      }
    }
  }
</script>


<style lang='scss' scoped>
</style>
