import { Controller, Get, Dependencies } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('saludo')
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
