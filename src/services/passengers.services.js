import Passenger from "../models/passenger.model.js";

export class PassengerService {
  async createPassenger(data) {
    return await Passenger.create(data);
  }

  findAllPassengers() {}

  findOnePassenger() {}

  updatePassenger() {}

  deletePassenger() {}
}
