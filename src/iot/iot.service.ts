import { Injectable } from '@nestjs/common';
import { IoT, IoTInput } from './dto/iot.dto';

@Injectable()
export class IoTService {
	private devices: IoT[] = [];

	getAllDevices(): IoT[] {
		return this.devices;
	}

	createDevice(input: IoTInput): IoT {
		const newDevice = { ...input, id: crypto.randomUUID() } as IoT;
		this.devices.push(newDevice);

		return newDevice;
	}

	updateDevice(id: string, input: IoTInput): IoT {
		const deviceIndex = this.devices.findIndex((device) => device.id === id);
		if (deviceIndex === -1) throw new Error('Device not found');

		if(input.id) delete input.id;

		this.devices[deviceIndex] = { ...this.devices[deviceIndex], ...input };

		return this.devices[deviceIndex];
	}

	deleteDevice(id: string): boolean {
		const deviceIndex = this.devices.findIndex((device) => device.id === id);
		if (deviceIndex === -1) throw new Error('Device not found');
		this.devices.splice(deviceIndex, 1);
		return true;
	}
}