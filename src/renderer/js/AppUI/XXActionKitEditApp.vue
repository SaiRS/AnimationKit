<template>
  <div>
    <div>
      这个整个App
    </div>

    <XXActionEditPanelComponent></XXActionEditPanelComponent>
    <XXElementEditPanelComponent></XXElementEditPanelComponent>
    <XXPropertyInspectorComponent></XXPropertyInspectorComponent>
    <XXResourceInspectorComponent></XXResourceInspectorComponent>
    <XXStatusBarComponent></XXStatusBarComponent>
    <XXToolBarComponent></XXToolBarComponent>

  </div>
</template>


<script>

import XXActionEditPanel from 'XXAppUI/XXActionEditPanel.vue';
import XXElementEditPanel from 'XXAppUI/XXElementEditPanel.vue';
import XXPropertyInspector from 'XXAppUI/XXPropertyInspector.vue';
import XXResourceInspector from 'XXAppUI/XXResourceInspector.vue';
import XXStatusBar from 'XXAppUI/XXStatusBar.vue';
import XXToolBar from 'XXAppUI/XXToolBar.vue';


export default {
  name: 'XXActionKitEditApp',

  components: {
    XXActionEditPanelComponent: XXActionEditPanel,
    XXElementEditPanelComponent: XXElementEditPanel,
    XXPropertyInspectorComponent: XXPropertyInspector,
    XXResourceInspectorComponent: XXResourceInspector,
    XXStatusBarComponent: XXStatusBar,
    XXToolBarComponent: XXToolBar
  }
}

</script>


<style>
</style>
