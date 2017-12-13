// 统一管理type-value的解析
import {XXPropertyTypeEnum} from 'XXLoader/Constant/XXPropertyTypeConstant.js';

import {
  XXPositionPropertyParser,
  XXSizePropertyParser,
  XXStringPropertyParser,
  XXScalePropertyParser,
  XXRotationPropertyParser} from 'XXLoader/DataParser/XXDataParser.js';
/**
 * {
 *  type: parser
 * }
 * @type {Object}
 */
const XXTypeValueParserRegisterManger = {

};

/**
 * [xxfRegisterTypeValueParser description]
 * @param  {[type]} type   [description]
 * @param  {[type]} parser [description]
 */
function xxfRegisterTypeValueParser(type, parser) {
  let exist = XXTypeValueParserRegisterManger[type];

  if (exist) {
    console.warn(`已经存在${type}的parser, 此操作将会覆盖旧的parser`);
    XXTypeValueParserRegisterManger[type] = parser;
  } else {
    XXTypeValueParserRegisterManger[type] = parser;
  }
}

/**
 * [xxfGetRegisteredTypeValueParser description]
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
function xxfGetRegisteredTypeValueParser(type) {
  return XXTypeValueParserRegisterManger[type];
}


// 默认值
xxfRegisterTypeValueParser(XXPropertyTypeEnum.PointType, XXPositionPropertyParser);
xxfRegisterTypeValueParser(XXPropertyTypeEnum.SizeType, XXSizePropertyParser);
xxfRegisterTypeValueParser(XXPropertyTypeEnum.StringType, XXStringPropertyParser);
xxfRegisterTypeValueParser(XXPropertyTypeEnum.ScaleType, XXScalePropertyParser);
xxfRegisterTypeValueParser(XXPropertyTypeEnum.RotationType, XXRotationPropertyParser);


export {
  xxfGetRegisteredTypeValueParser,
  xxfRegisterTypeValueParser,
};
