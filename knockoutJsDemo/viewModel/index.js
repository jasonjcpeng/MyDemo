/**
 *
 * Created by Jason on 2016/8/8.
 */
var index = {
    init:function () {
        var _self = this;
        _self.firstName = ko.observable("");
        _self.lastName = ko.observable("");
        _self.fullName = ko.computed({
            read: function () {
                return _self.firstName() + "" + _self.lastName();
            }
        });
    },
}
ko.applyBindings(new index.init());