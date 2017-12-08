
declare type XXTimeFunction{

}

declare type XXKeyframeProperty = {
  time: number,

  propertyType: string,
  propertyName: string,
  propertyValue: any,

  timeFunction: XXTimeFunction,
}

declare type XXActionItemProperty = {
  keyframes: Array<XXKeyframeProperty>
}

declare type XXActionProperty = {
  propertyName1: XXActionItemProperty
  propertyName2: XXActionItemProperty
}

declare type XXActionsProperty {
  actionId1: XXActionProperty,
  actionId2: XXActionProperty,
}


// XXActionsProperty
//   actionName: XXActionProperty
//                 propertyName: XXActionItemProperty
