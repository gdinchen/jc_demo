/**
 * 构造创建纸牌类
 * type:纸牌上的花色
 * number:纸牌上的数字
 */
var Cards = function () {
    this.init();
};
Cards.prototype = {
    // 构造函数绑定
    constructor: Cards,
    // 初始化
    init: function () {
        this._createCards();
    },
    // 创造单个纸牌对象
    _createCard: function (type, number) {
        return {
            type: type,
            number: number
        }
    },
    /**
     *  创造54张纸牌的数组
     * 花色0-黑桃 1-梅花 2-方块 3-红桃 4-大鬼 5-小鬼
     * 数值0-13鬼 1-10 J Q K
     */
    _createCards: function () {
        var index = 2;
        var arr = [];
        for (var i = 0; i <= 13; i++) {
            // 大小鬼 数组前两位
            if (i == 0) {
                arr[0] = this._createCard(4, 0);
                arr[1] = this._createCard(5, 0);
            } else {
                // 花色 数组后四位
                for (var j = 0; j <= 3; j++) {
                    arr[index] = this._createCard(j, i);
                    index++;
                }
            }
        }
        console.log(arr);
        return arr;
    },
    sortCards: function () {
         return this._createCards().sort(function (a,b) {
            return 0.5 - Math.random();
        });
    }
};

// 初始化纸牌
var cards = new Cards();
//随机牌存储数组
var RandomCards = [];
// 洗牌一次 获得随机纸牌
RandomCards = cards.sortCards();
console.log(RandomCards);
