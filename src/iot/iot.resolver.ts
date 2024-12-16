import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IoTService } from './iot.service';
import { IoT, IoTInput } from './dto/iot.dto';

@Resolver(() => IoT)
// Defines a GraphQL resolver for the `IoT` type.
// Handles GraphQL queries and mutations related to IoT devices.
export class IoTResolver {
	constructor(private readonly iotService: IoTService) { }

	@Query(() => [IoT])
	// GraphQL query to retrieve all IoT devices.
	// Calls the `getAllDevices` method from the IoT service.
	getAllDevices() {
		return this.iotService.getAllDevices();
	}

	@Mutation(() => IoT)
	// GraphQL mutation to create a new IoT device.
	// Takes an `IoTInput` object as input and calls the `createDevice` method in the IoT service.
	createDevice(
		@Args('input') input: IoTInput, // The `input` argument is expected to be an `IoTInput` type.
	) {
		return this.iotService.createDevice(input);
	}

	@Mutation(() => IoT)
	// GraphQL mutation to update an existing IoT device.
	// Takes an `IoTInput` object, extracts its `id`, and calls the `updateDevice` method in the IoT service.
	updateDevice(
		@Args('input') input: IoTInput, // The `input` argument contains the updated device fields, including the `id`.
	) {
		return this.iotService.updateDevice(input.id, input);
	}

	@Mutation(() => Boolean)
	// GraphQL mutation to delete an IoT device.
	// Takes a device `id` as an argument and calls the `deleteDevice` method in the IoT service.
	deleteDevice(@Args('id') id: string) {
		return this.iotService.deleteDevice(id);
	}
}