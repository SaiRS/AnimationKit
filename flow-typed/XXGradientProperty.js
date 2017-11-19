// @flow

declare type XXLinearGradientValue = {
  angle: string, // 带单位
  colors: Array<XXColorValue>, //
}

declare type XXGradientProperty = {
  type: 'linear-gradient' | 'radial-gradient' | 'repeating-linear-gradient' | 'repeating-radial-gradient',
  name: string,
  value: ''
}
