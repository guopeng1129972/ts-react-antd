var fangxiang;
(function (fangxiang) {
    fangxiang[fangxiang["up"] = 0] = "up";
    fangxiang[fangxiang["down"] = 1] = "down";
    fangxiang[fangxiang["left"] = 2] = "left";
    fangxiang[fangxiang["right"] = 3] = "right";
})(fangxiang || (fangxiang = {}));
console.log(fangxiang[0]);
console.log(fangxiang.up);
;
var value = "up";
if (value === fangxiang[0]) {
    console.log('is up');
}
