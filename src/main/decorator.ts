import { main } from 'ioa';

const { router } = main;

export function Controller(controller: Function): any {
  controller.prototype.test = function (ctx) {
    ctx.body = '@hello ioa';
  }
}

export function get(path:string, ...middleware: (string | Function)[]): any {
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    router.get(path, ...middleware, descriptor.value);
  }
}

export function post(path:string, ...middleware: (string | Function)[]): any {
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    router.post(path, ...middleware, descriptor.value);
  }
}

export function put(path:string, ...middleware: (string | Function)[]): any {
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    router.put(path, ...middleware, descriptor.value);
  }
}

export function del(path:string, ...middleware: (string | Function)[]): any {
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    router.del(path, ...middleware, descriptor.value);
  }
}
