import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IoT } from './iot.entity';
import { IoTInput } from './dto/iot.dto';
import { v4 as uuidv4 } from 'uuid';

// Marks this class as a provider that can be injected into other components.
// This service handles the business logic for IoT devices.
@Injectable()
export class IoTService {
	// Dependency injection of the IoT repository, which is used to interact with the database.
	constructor(
		@InjectRepository(IoT)
		private readonly deviceRepository: Repository<IoT>,
	) { }

	// Retrieves all IoT devices from the database.
	async getAllDevices(): Promise<IoT[]> {
		return this.deviceRepository.find();
	}

	// Creates a new IoT device and saves it to the database.
	// - A unique ID is generated using `uuidv4`.
	async createDevice(input: IoTInput): Promise<IoT> {
		const newDevice = this.deviceRepository.create({
			...input, // Spread operator to include all fields from the input.
			id: uuidv4(), // Generate a unique ID for the new device.
		});

		// Saves the newly created device to the database and returns it.
		return this.deviceRepository.save(newDevice);
	}

	// Updates an existing IoT device in the database.
	// - Throws an error if the device with the given ID is not found.
	async updateDevice(id: string, input: IoTInput): Promise<IoT> {
		// Find the device by its ID.
		const device = await this.deviceRepository.findOne({ where: { id } });
		if (!device) throw new Error('Device not found');

		// Update the device's fields with the provided input.
		Object.assign(device, input);
		// Save the updated device to the database and return it.
		return this.deviceRepository.save(device);
	}

	// Deletes an IoT device from the database.
	// - Throws an error if the device with the given ID is not found.
	async deleteDevice(id: string): Promise<boolean> {
		// Find the device by its ID.
		const device = await this.deviceRepository.findOne({ where: { id } });
		if (!device) throw new Error('Device not found');

		// Remove the device from the database.
		await this.deviceRepository.remove(device);
		// Return `true` to indicate successful deletion.
		return true;
	}
}