import { Controller, Get, Header } from '@nestjs/common';   //Decorators from nest.js
import { AppService } from './app.service';


//access it at project-name.com
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}    //Dependency injector

  @Get()
  @Header('Content-type', 'text/html')
  getHello(): string {
    return this.appService.getHello();
  }
}
