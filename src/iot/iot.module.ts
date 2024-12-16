import { Module } from '@nestjs/common';
import { IoTService } from './iot.service';
import { IoTResolver } from './iot.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IoT } from './iot.entity';
import { IoTController } from './iot.controller';

@Module({
	imports: [TypeOrmModule.forFeature([IoT])],
	providers: [IoTService, IoTResolver],
	controllers: [IoTController]

})
export class IotModule { }
