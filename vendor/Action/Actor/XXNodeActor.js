// @flow

import XXActor from './XXActor.js';


/**
 * 需要传递dom对象的动画宿主对象
 * NOTE: 对于NodeActor的设计，采用了模型树和呈现树的概念
 * 模型树是记录对象属性数据的，但这是方法跟UI的实时状态可能不一致
 * 呈现树也是记录对象属性数据，但这个数据跟ui的实时状态一致
 * 之所以这么设计的原因：
 * 1. 在子类XXNodeDomActor的实现过程中，scaleTo，rotateTo均是采用修改css('transform')
 * 的属性来达到目的的，这个方法会覆盖之前的'transform'的信息，结果就是我们必须记录之前的
 * 一系列transform的操作，然后再和当前的变化组合起来形成新的transorms操作。而动画的执行过程
 * 中，我们却不能在每一次的update()函数中去同步更新transforms的组合，原因如下
 *     * 比如说初始的transforms为[], 我们要执行scaleTo(2,2), 每次delta为0.2， 则第一次
 *     调用scaleTo的参数为scaleTo(new XXScale(0.2, 0.2)), 第二次的调用为
 *     scaleTo(new XXScale(0.4, 0.4)), 我们的出发点是动画执行前的那个状态，所以实时更新
 *     的后果就是将原本应该是（0.4，0.4）的缩放量变成了（0.2，0.2）*（0.4，0.4）=（0.08,0.08)，与实际不符
 *     * 至于我们为什么每次计算都采用动画执行前的那个状态而不是动画的上一个状态，
 *     是因为那样子更简单，将整个过程看作是0-1的过程，对于执行ease，控制播放都方便很多
 * 基于上面的原因，在执行动画的过程中，自然就造成了模型树和呈现树的分离。
 *2. 这种思想也算是借鉴oc中动画的模型树和呈现树的想法。
 *3. 为了统一起见，将模型树和呈现树的体现放在了XXNodeActor这个类中
 *4. 目前呈现树的一些属性，主要设计来用获得对象的实时信息
 */
class XXNodeActor extends XXActor {

  /**
   * @inheritdoc
   * @param  {[string]} uuid 对象的唯一标识符
   */
  constructor(uuid: ?string = undefined, option: Object = {}) {
    super(uuid);
  }


  /** **************************
  * 获取对象状态的方法
  *****************************/

  /**
   * @override
   * 获得对象当前坐标（模型树）
   * @return {XXPosition} 当前物体的坐标
   */
  position(): XXPosition | null {
    return null;
  }

  /**
   * @override
   * 获得对象当前坐标（呈现树）
   * @return {XXPosition} 当前物体的坐标
   */
  presentationPosition(): XXPosition | null {
    return null;
  }

  /**
   * @override
   * 获得对象当前的缩放信息（模型树）
   * @return {XXScale}  当前对象的缩放信息
   */
  scale(): XXScale | null {
    return null;
  }

  /**
   * @override
   * 获得对象当前的缩放信息（呈现树）
   * @return {XXScale}  当前对象的缩放信息
   */
  presentationScale(): XXScale | null {
    return null;
  }

  /**
   * @override
   * 获得对象当前的旋转信息（模型树）
   * @return {XXRotation}  对象当前的旋转信息
   */
  rotation(): XXRotation | null {
    return null;
  }

  /**
   * @override
   * 获得对象当前的旋转信息（呈现树）
   * @return {XXRotation}  对象当前的旋转信息
   */
  presentationRotation(): XXRotation | null {
    return null;
  }

  /** *************************
   * 修改对象状态的方法
   ****************************/

  /**
   * @inherit
   * 修改当前物体的坐标
   * @param  {XXPosition} postion 坐标信息
   * @param  {boolean} updateModeProperty 在更新呈现的同时是不是也更新模型，
   * 一般的调用设置为true，在动画过程中设置为false，在动画结束后根据动画的选项来决定是否更新模型
   */
  moveTo(postion: XXPosition, updateModeProperty: boolean = true): void {
    // inherit by subclass
  }

  /**
   * @inherit
   * 修改当前对象的缩放
   * @param  {XXScale} scale 缩放信息
   * @param  {boolean} updateModeProperty 在更新呈现的同时是不是也更新模型，
   * 一般的调用设置为true，在动画过程中设置为false，在动画结束后根据动画的选项来决定是否更
   */
  scaleTo(scale: XXScale, updateModeProperty: boolean = true): void {
    // inheirt by subclass
  }

  /**
   * @inherit
   * 修改当前对象的旋转角度
   * @param  {XXRotation} rotaion 旋转信息
   * @param  {boolean} updateModeProperty 在更新呈现的同时是不是也更新模型，
   * 一般的调用设置为true，在动画过程中设置为false，在动画结束后根据动画的选项来决定是否更
   */
  rotateTo(rotaion: XXRotation, updateModeProperty: boolean = true): void {
    // inheirt by subclass
  }

  /**
   * 获得当前对象的状态
   * @override
   * @return {XXNodeActorState}  当前对象的状态
   */
  getState(): XXNodeActorState {
    return null;
  }

  /**
   * 恢复对象的状态
   * @param  {[type]} state [description]
   */
  restoreState(state: XXNodeActorState) {

  }


}

export default XXNodeActor;
