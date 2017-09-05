# NotificationCenter中信息的结构

方案一：

```javascript
{
  name: {
    sender: {
      observer: {
        selector: ***
      }
    }
  }
}
```

方案二：

```javascript
{
  name: {
    observer: [
     {
       sender: ****
       selector: ***
     }   
    ]    
  }
}
```

采取方案二，原因如下：

1. sender可能为空，比如说```NotificationCenter.addNofication(notificationName, observer, selector)```, 这时候并没有传入sender，表明此时的observer监听所有notificationName的通知，方案一不好处理这种情况
2. 方案一处理不了observer可以对于同一个sender, 同一个name，有两个不同的selector的情况，虽然这种情况不多。
3. removeObserver的操作，方案二比较简单