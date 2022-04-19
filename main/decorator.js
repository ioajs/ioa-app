export function Controller(controller) {
    controller.prototype.test = function (ctx) {
        ctx.body = '@hello ioa';
    };
}
export function get(path) {
    // console.log(path);
    return function (target, name, value) {
        // console.log(name, value.value);
    };
}
export function post(path) {
    // console.log(path);
    return function (target, name, value) {
        // console.log(name, value.value);
    };
}
