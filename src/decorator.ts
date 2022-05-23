import  "reflect-metadata";

function Column(target : any, key : string) {
  var t = Reflect.getMetadata("design:type", target, key);
  console.log(`${key}: ${t.name}`);
}

export class User {
  @Column
  firstName: string
  @Column
  lastName: string
  @Column
  age: number
}
