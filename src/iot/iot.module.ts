import { Module } from '@nestjs/common';
import { IoTService } from './iot.service';
import { IoTResolver } from './iot.resolver';

@Module({
  providers: [IoTService, IoTResolver]
})
export class IotModule {}
