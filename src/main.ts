import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";


@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return '<h1>Hello world!!</h1>';
    }
}

@Module({
    controllers: [AppController]
})
class AppModule {}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(4000);
}

bootstrap();