import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPrice(duration: number, startTime: string, distance: number): number {
    return duration * distance * 0.1;
  }
}
