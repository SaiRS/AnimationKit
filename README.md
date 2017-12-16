# AnimationKitEditor
这个一个个人兴趣项目，希望能够在web端/桌面端向Hype3那样子可视化的来编辑动画。
> 注意事项：
> 因为是个个人开发项目，所以一些配置是跟自己的电脑的环境设置有关，主要是执行```npm run build:web```命令时所生成的文件的路径，我将这个路径设置在了自己本地创建的nginx配置的根目录下边用于访问。

![](https://ws1.sinaimg.cn/large/006tNc79gy1fmipp2noqej31kw0wogoe.jpg)
## Finished
* Action有关
  - 基本的action
    - moveBy
    - moveTo
    - scaleBy
    - scaleTo
    - rotateBy
    - rotateTo
    - hide
    - show
    - sequence
    - spawn
  - Action管理类
    - actionManager(stop, start, restart action等操作)
  - Action驱动类
    - actionDriver(requestFrame, 驱动actionManager)
* 配置文件的解析
  - scene(场景)
    - 节点
      - 属性解析
        - position
        - rotation
        - scale
        - background
        - anchor
        - ...
      - action属性解析
        - actionId:
          - property
            - keyframes
    - action配置
      - duration
      - actionId
      - actionName
      - ...
* UI(部分)
  - 检查器
    - 元素检查器
      - 边框
      - 透明度
      - ...
    - 度量检查器
      - 位置
      - 尺寸
      - 缩放
      - 旋转
      - 锚点
    - 元素编辑区域
      - 拖动

## TODO:
需要做的还有好多，先说下一阶段的事情

* 元素action的编辑功能
  - 元素
    - 显示场景中所有元素（有层级，可锁定，可显隐）
  - action属性
    - 关键帧的添加，删除，编辑
  - action的播放控制
    - 开始，暂停，循环，上一帧，下一帧
* action的通知
* 自定义事件
