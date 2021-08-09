var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { get } from '../../decorator.js';
class News {
    index(ctx) {
        ctx.body = 'news home';
    }
    details(ctx) {
        ctx.body = {
            params: ctx.params,
            body: 'news details'
        };
    }
}
__decorate([
    get('/news')
], News.prototype, "index", null);
__decorate([
    get('/news/:id')
], News.prototype, "details", null);
export default News;
