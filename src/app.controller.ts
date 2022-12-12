import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getRootRoute() {
        return '<h1>Hello world!!</h1>';
    }

    @Get('/test')
    getTestRoute() {
        return 'test!';
    }

    @Get('/json/test')
    getTestJsonRoute() {
        return {
            message: 'test'
        };
    }
};
