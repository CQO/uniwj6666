# lyyTable

#### 介绍
uni-app基于uni-table的数据展示表格

## 1、使用说明
下载解压插件，并复制到项目的components目录下。  
引入uni-table、uni-load-more  
引用插件或使用easycom

## 2、文件说明

lyy-table  
├─ css  
│└─ iconfont.css 字体图标（排序的向上和向下三角）  
├─ lyy-table.vue 插件主文件  
├─ lyy-progress.vue 进度条插件，可以单独使用，具体参数看源码  
└─test.vue 示例

## 3、属性说明
| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
|loading|Boolean|false|显示加载|
|loadMore|String|more|上拉加载文字，参考uni-load-more|
|showLoadMore|Boolean|false|是否显示上拉加载组件|
|headerFixed|Boolean|false|固定表头|
|<font color=#a0a0a0>firstColumnFixed</font>|<font color=#a0a0a0>Boolean</font>|<font color=#a0a0a0>false</font>|<font color=#a0a0a0>固定首列</font> <font color=red>ver1.3.3弃用</font>|
|columnFixed|Number|0|固定列数 <font color=red>ver1.3.3新增</font>|
|sortWays|Array|['none', 'asc', 'desc']|排序方式|
|emptyString|String|-|数据为空时的占位符|
|headers|Array|[]|表头|
|contents|Array|[]|表格数据|
|totalRow|Array|[]|合计列|
|@rowClick|Function|-|行点击事件，回传参数为行数据|
|@onPullup|Function|-|上拉加载事件|


## 4、参数说明

表头参数 headers

|参数|类型|说明|
|---|---|---|
|label|String|表头文字|
|key|String|绑定值|
|width|String|列宽|
|sort|Boolean|是否启用排序|
|hidden|Boolean|是否隐藏|
|format|Object|格式化参数|

格式化参数 format

|参数|类型|说明|
|---|---|---|
|type|String|格式化类型，可选值有：string 字符型、html html标签型、compute 计算型、progress 进度条|
|keys|Array|绑定值列表|
|template|String、Function|格式化模板，key用{下标}表示，如{0}，{1}|

 具体应用参考示例
