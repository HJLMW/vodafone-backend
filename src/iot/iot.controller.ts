import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { IoTService } from './iot.service';
import { IoTInput } from './dto/iot.dto';
import { IoT } from './iot.entity';

@Controller('iot') 
export class IoTController {
	constructor(private readonly iotService: IoTService) { }

	@Get()
	async getAllDevices(): Promise<IoT[]> {
		return this.iotService.getAllDevices();
	}

	@Post()
	async createDevice(@Body() input: IoTInput): Promise<IoT> {
		return this.iotService.createDevice(input);
	}

	@Put(':id')
	async updateDevice(
		@Param('id') id: string,
		@Body() input: IoTInput
	): Promise<IoT> {
		return this.iotService.updateDevice(id, input);
	}

	@Delete(':id')
	async deleteDevice(@Param('id') id: string): Promise<boolean> {
		return this.iotService.deleteDevice(id);
	}
}
