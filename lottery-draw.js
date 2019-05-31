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
}]
function Draw(prizes) {
 
    this.prizes = prizes;
    var prizeList = []
    prizes.map(function(item){
        prizeList.push({
            name: item.name,
            value: item.key
        })
        for(var i=0; i< item.radio; i++) {
            prizeList.push({
                name: item.name,
                value: item.key
            })
        }
    });
    prizeList = reset(prizeList)
    function randomFrom(lowerValue, upperValue) {
        return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    };
    function reset(arr) {
        var eachArr = arr.concat([])
        var lastArr = []
        function deepEach(deepArr) {
            if (deepArr.length) {
                var randomIndex = randomFrom(0, eachArr.length - 1)
                lastArr.push(eachArr[randomIndex])
                eachArr.splice(randomIndex, 1) 
                deepEach(eachArr)
            }
        }
        deepEach(eachArr)
        return lastArr
    }
    this.getResult = function() {
        var random = randomFrom(0, prizeList.length - 1);
        return prizeList[random]
    }
}
