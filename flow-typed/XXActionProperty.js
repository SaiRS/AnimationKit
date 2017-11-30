
declare type XXTimeFunction{

}

declare type XXKeyframeProperty = {
  time: number,

  propertyType: string,
  propertyName: string,
  propertyValue: any,

  timeFunction: XXTimeFunction,
}

declare type XXActionItemProperty{
  keyframes: Array<XXKeyframeProperty>
}

declare type XXActionProperty = {
  propertyName1: XXActionItemProperty
  propertyName2: XXActionItemProperty
}

declare type XXActionsProperty {
  actionName1: XXActionProperty,
  actionName2: XXActionProperty,
}


// XXActionsProperty
//   actionName: XXActionProperty
//                 propertyName: XXActionItemProperty
