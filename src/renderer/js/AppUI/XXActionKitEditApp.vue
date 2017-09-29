<template>
  <div class='xxActionEditApp-rootVueContainer'>
    <XXToolBarComponent class='xxActionEditApp-topPart'>
    </XXToolBarComponent>

    <div class='xxActionEditApp-middlePart'>
      <XXResourceInspectorComponent class='xxMiddlePart-leftPart'>
      </XXResourceInspectorComponent>

      <div class='xxMiddlePart-centerPart'>
        <XXElementEditPanelComponent class='xxCenterPart-topPart'>
        </XXElementEditPanelComponent>

        <XXActionEditPanelComponent class='xxCenterPart-bottomPart'>
        </XXActionEditPanelComponent>
      </div>

      <XXPropertyInspectorComponent class='xxMiddlePart-rightPart'>
      </XXPropertyInspectorComponent>
    </div>

    <XXStatusBarComponent class='xxActionEditApp-bottomPart'>
    </XXStatusBarComponent>
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


<style lang='scss' scoped>

.xxActionEditApp-rootVueContainer{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #191919;
  color: white;

  .xxActionEditApp-topPart{
    height: 44px;
    width: 100%;
  }

  .xxActionEditApp-middlePart{
    width: 100%;
    height: calc(100% - 88px);
  }

  .xxActionEditApp-bottomPart{
    height: 44px;
    width: 100%;
  }

}

.xxActionEditApp-topPart{

}

.xxActionEditApp-bottomPart{

}

.xxActionEditApp-middlePart{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .xxMiddlePart-leftPart{
    height: 100%;
    width: 88px;
    flex: 0 0 auto;
  }

  .xxMiddlePart-centerPart{
    height: 100%;
    width: calc(100% - 176px);
    flex: 1 1 auto;
  }

  .xxMiddlePart-rightPart{
    height: 100%;
    width: 88px;
    flex: 0 0 auto;
  }
}

.xxMiddlePart-centerPart{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .xxCenterPart-topPart{
    width: 100%;
    height: 50%;
    flex: 0 0 auto;
  }

  .xxCenterPart-bottomPart{
    width: 100%;
    height: 50%;
    flex: 0 0 auto;
  }
}

</style>
