import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('saludo')
export class AppController {
  constructor(appService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
