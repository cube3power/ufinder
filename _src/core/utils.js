var Utils = UFinder.Utils = {
    argsToArray: function ( args,index ) {
        return Array.prototype.slice.call( args, index || 0 );
    }
};

$.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object', 'Boolean'], function (k, v) {
    Utils['is' + v] = function (obj) {
        return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
    };
});