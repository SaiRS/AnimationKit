// @flow
//


const XXActionEvent = {
  // action开始的事件， 所有action都有
  ActionStartEvet: 'xxActionStartEvent',

  // action完成的事件, 所有action都有
  ActionFinishedEvent: 'xxActionFinishedEvent',

  // action暂停的事件，所有action都有
  ActionPausedEvent: 'xxActionPausedEvent',

  // action restart事件, 所有action都有
  ActionRestartEvent: 'xxActionRestartEvent',

  // action repeat事件，只有repeat和repeatForever action才有
  ActionRepeatEvent: 'xxActionRepeatEvent',


};

export default XXActionEvent;
export {
  XXActionEvent,
};
