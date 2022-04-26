import { main } from 'ioa';
const { router } = main;
export function Controller(controller) {
    controller.prototype.test = function (ctx) {
        ctx.body = '@hello ioa';
    };
}
export function get(path, ...middleware) {
    return function (target, propertyKey, descriptor) {
        router.get(path, ...middleware, descriptor.value);
    };
}
export function post(path, ...middleware) {
    return function (target, propertyKey, descriptor) {
        router.post(path, ...middleware, descriptor.value);
    };
}
