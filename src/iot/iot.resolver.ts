import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IoTService } from './iot.service';
import {  IoT, IoTInput } from './dto/iot.dto';
import { createTracing } from 'trace_events';

@Resolver(() => IoT)
export class IoTResolver {
	constructor(private readonly iotService: IoTService) { }

	@Query(() => [IoT])
	getAllDevices() {
		return this.iotService.getAllDevices();
	}

	@Mutation(() => IoT)
	createDevice(
		@Args('input') input: IoTInput,
	) {
		return this.iotService.createDevice(input);
	}

	@Mutation(() => IoT)
	updateDevice(
		@Args('input') input: IoTInput,
	) {
		return this.iotService.updateDevice(input.id, input);
	}

	@Mutation(() => Boolean)
	deleteDevice(@Args('id') id: string) {
		return this.iotService.deleteDevice(id);
	}
}
