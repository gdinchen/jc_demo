/**
 * ���촴��ֽ����
 * type:ֽ���ϵĻ�ɫ
 * number:ֽ���ϵ�����
 */
var Cards = function () {
    this.init();
};
Cards.prototype = {
    // ���캯����
    constructor: Cards,
    // ��ʼ��
    init: function () {
        this._createCards();
    },
    // ���쵥��ֽ�ƶ���
    _createCard: function (type, number) {
        return {
            type: type,
            number: number
        }
    },
    /**
     *  ����54��ֽ�Ƶ�����
     * ��ɫ0-���� 1-÷�� 2-���� 3-���� 4-��� 5-С��
     * ��ֵ0-13�� 1-10 J Q K
     */
    _createCards: function () {
        var index = 2;
        var arr = [];
        for (var i = 0; i <= 13; i++) {
            // ��С�� ����ǰ��λ
            if (i == 0) {
                arr[0] = this._createCard(4, 0);
                arr[1] = this._createCard(5, 0);
            } else {
                // ��ɫ �������λ
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

// ��ʼ��ֽ��
var cards = new Cards();
//����ƴ洢����
var RandomCards = [];
// ϴ��һ�� ������ֽ��
RandomCards = cards.sortCards();
console.log(RandomCards);
