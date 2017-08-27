// @flow

import XXActionInterval from './XXActionInterval.js';


/**
 * 用来表示连续执行的一系列action
 */
class XXActionSequence extends XXActionInterval {

  _actions: Array<XXAction>;
  _currentExecuteActionIndex: number;
  _totalActions: number;

  /**
   * 构造函数
   * @param  {Array<XXAction>} actions 一系列action
   */
  constructor(...actions: Array<XXAction>) {
    super();
    this._init();

    let last = actions.length - 1;
    if (last > 0 ) { // 两个以上的参数
      // 将所有的actions组合成两个
      this._totalActions = 2;
      let prevAction: XXAction = actions[0];
      for (let i = 1; i < last; i++) {
        prevAction = new XXActionSequence(prevAction, actions[i]);
      }
      this._actions.push(prevAction);
      this._actions.push(actions[last]);

      let duration = this._actions[0].getDuration() +
                      this._actions[1].getDuration();
      this.initWithDuration(duration);
    } else if (last == 0) { // 一个参数
      this._totalActions = 1;
      this._actions.push(actions[last]);

      let duration = this._actions[0].getDuration();
      this.initWithDuration(duration);
    } else {
      this._totalActions = 0;
      this.initWithDuration(0);
    }
  }

  /**
   * 初始化
   */
  _init() {
    this._actions = [];
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXActor) {
    super.startWithTarget(actionTarget);

    if (0 == this._totalActions) {
      // do nothing
    } else if (1 == this._totalActions) {
      this._actions[0].startWithTarget(actionTarget);
    } else {
      this._actions[0].startWithTarget(actionTarget);
      this._actions[1].startWithTarget(actionTarget);
    }
  }

  /**
   * @inheritdoc
   */
  step(deltaTime: number) {
    this._elapsed += deltaTime;

    let firstActionDuration = this._actions[0].getDuration();
    if (this._elapsed > firstActionDuration) {
      // 转换到下一个action时，执行上一个action的完成回调
      if (0 == this._currentExecuteActionIndex) {
        this._actions[0].doDoneTask();
      }
      // 注意到这儿的判断是this._elapsed > firstActionDuration
      // 有可能此时的action已经执行完成
      // 所以下面的判断加上了一个executedAction.isDone()
      this._currentExecuteActionIndex = 1;
    } else {
      this._currentExecuteActionIndex = 0;
    }

    let executedAction = this._actions[this._currentExecuteActionIndex];
    if (executedAction && !executedAction.isDone()) {
      executedAction.step(deltaTime);
    }

    if (this.isDone()) {
      this.doDoneTask();
    }
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionSequence';
  }
}

export default XXActionSequence;
