var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Controller, get, post } from '../decorator.js';
let Home = class Home {
    index(ctx) {
        ctx.body = 'hello ioa';
    }
    sms(ctx) {
        ctx.body = ctx.params;
    }
    login(ctx) {
        const body = ctx.request.body;
        ctx.body = {
            type: 'login',
            body
        };
    }
};
__decorate([
    get('/')
], Home.prototype, "index", null);
__decorate([
    get('/sms/:id/sd/:kk')
], Home.prototype, "sms", null);
__decorate([
    post('/login')
], Home.prototype, "login", null);
Home = __decorate([
    Controller
], Home);
;
export default Home;
