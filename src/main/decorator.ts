export function Controller(controller: Function): any {
  controller.prototype.test = function (ctx) {
    ctx.body = '@hello ioa';
  }
}

export function get(path: string): any {
  return function (target, name: string, value) {
    console.log(path, name, value.value);
  }
}

export function post(path: string): any {
  return function (target, name: string, value) {
    console.log(path, name, value.value);
  }
}
