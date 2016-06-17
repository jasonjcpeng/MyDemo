/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    Array.prototype.unique = function () {
        var result = [];
        var temObject = {};
        for (var i = 0; i < this.length; i++) {
            temObject[this[i]] || ((temObject[this[i]] = 1) && (result.push(this[i])));
        }
        return result;
    };
})();
