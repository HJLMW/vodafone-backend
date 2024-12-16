import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IoT } from './iot.entity';
import { IoTInput } from './dto/iot.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class IoTService {
	constructor(
		@InjectRepository(IoT)
		private readonly deviceRepository: Repository<IoT>,
	) { }

	async getAllDevices(): Promise<IoT[]> {
		return this.deviceRepository.find();
	}

	async createDevice(input: IoTInput): Promise<IoT> {
		const newDevice = this.deviceRepository.create({
			...input,
			id: uuidv4(),
		});

		return this.deviceRepository.save(newDevice);
	}

	async updateDevice(id: string, input: IoTInput): Promise<IoT> {
		const device = await this.deviceRepository.findOne({ where: { id } });
		if (!device) throw new Error('Device not found');

		// Actualiza los campos del dispositivo
		Object.assign(device, input);
		return this.deviceRepository.save(device);
	}

	async deleteDevice(id: string): Promise<boolean> {
		const device = await this.deviceRepository.findOne({ where: { id } });
		if (!device) throw new Error('Device not found');

		await this.deviceRepository.remove(device);
		return true;
	}
}