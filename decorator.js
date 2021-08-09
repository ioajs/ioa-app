export function Controller(controller) {
    controller.prototype.test = function (ctx) {
        ctx.body = '@hello ioa';
    };
}
export function get(path) {
    return function (target, name, value) {
        console.log(path, name, value.value);
    };
}
export function post(path) {
    return function (target, name, value) {
        console.log(path, name, value.value);
    };
}
