var Stat = /** @class */ (function () {
    function Stat() {
    }
    Stat.prototype.use = function () {
        Stat.stat_value--;
        console.log("value is : " + Stat.stat_value);
    };
    Stat.stat_value = 100;
    return Stat;
}());
var s1 = new Stat();
s1.use();
var s2 = new Stat();
s1.use();
