const plusOne = function(digits) {
    const length = digits.length
    //逆向遍历数组，找出第一个不为9的元素，使其+1，并将其后面元素改为0
    //若未找到，则说明全部为9，返回一个该元素长度+1的数组，该数组第一个元素为1，其余元素用0补齐
    for (let i = length - 1; i > 0; i++) {
        if(digits[i] !== 9) {
            digits[i] += 1
            // 若 j > length, 则表示该数组最后一个元素不为9，将其+1后返回
            for (let j = i + 1; j < length; ++j) {

            }
            return digits
        }
    }
};