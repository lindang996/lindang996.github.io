# 流程结束事件

[[TOC]]

>## 基本信息

### 事件说明
```text
流程结束事件
```

### 事件触发时间点
- after

>## 事件方法

方法名 | 方法参数 | 方法返回值 | 版本 | 参数描述
 --- | --- | --- | --- | --- 
setUserId|[{"required":false,"name":"arg0","classType":"java.lang.Long"}]|void|设置处理人 ID
getUserId|null|java.lang.Long|获取处理人 ID
getAffair|null|com.seeyon.ctp.common.po.affair.CtpAffair|获取Affair
setAffair|[{"required":false,"name":"arg0","classType":"com.seeyon.ctp.common.po.affair.CtpAffair"}]|void|设置Affair
setFinishTime|[{"required":false,"name":"arg0","classType":"java.util.Date"}]|void|当前处理时间
getFinishTime|null|java.util.Date|获取完成时间


> ## 事件示例

```java
{demo}
```

## 备注
{remark}