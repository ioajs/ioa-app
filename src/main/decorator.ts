export function Controller(controller: Function): any {
  controller.prototype.test = function (ctx) {
    ctx.body = '@hello ioa';
  }
}

export function get(path: string): any {
  // console.log(path);
  return function (target, name: string, value) {
    // console.log(name, value.value);
  }
}

export function post(path: string): any {
  // console.log(path);
  return function (target, name: string, value) {
    // console.log(name, value.value);
  }
}
