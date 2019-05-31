# lottery-draw
## 按照权重抽奖

### 使用方式
```
var model = [{
    name: '一等奖',
    key: 'level1',
    radio: 1,
},{
    name: '二等奖',
    key: 'level2',
    radio: 2,
},{
    name: '三等奖',
    key: 'level3',
    radio: 3,
},{
    name: '参与',
    key: 'level4',
    radio: 5
}];

var draw = new Draw(model);

var drawResult = draw.getResult();
```
