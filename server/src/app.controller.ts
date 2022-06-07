import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/price')
  getPriceWithDuration(
    @Query('duration') duration: number,
    @Query('startTime') startTime: string,
    @Query('distance') distance: number,
  ): number {
    //TODO: validate inputs
    return this.appService.getPrice(startTime, duration, distance);
  }
}
