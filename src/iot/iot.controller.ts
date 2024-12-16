import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { IoTService } from './iot.service';
import { IoTInput } from './dto/iot.dto';
import { IoT } from './iot.entity';

// The `IoTController` class is responsible for handling HTTP requests related to IoT devices.
// It maps incoming HTTP requests to service methods for interacting with the IoT devices.
@Controller('iot')
export class IoTController {
	// Injecting the IoTService to interact with the database and perform CRUD operations
	constructor(private readonly iotService: IoTService) { }

	// GET endpoint to retrieve all IoT devices
	@Get()
	async getAllDevices(): Promise<IoT[]> {
		return this.iotService.getAllDevices();
	}

	// POST endpoint to create a new IoT device
	@Post()
	async createDevice(@Body() input: IoTInput): Promise<IoT> {
		return this.iotService.createDevice(input);
	}

	// PUT endpoint to update an existing IoT device by ID
	@Put(':id')
	async updateDevice(
		@Param('id') id: string, // `id` is extracted from the URL parameter
		@Body() input: IoTInput // `input` is the data to update the device with
	): Promise<IoT> {
		return this.iotService.updateDevice(id, input);
	}

	// DELETE endpoint to delete an IoT device by ID
	@Delete(':id')
	async deleteDevice(@Param('id') id: string): Promise<boolean> {
		return this.iotService.deleteDevice(id);
	}
}