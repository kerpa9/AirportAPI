import Passenger from "../models/passenger.model.js";

export class PassengerService {
  async createPassenger(data) {
    return await Passenger.create(data);
  }

  async findAllPassengers() {
    return await Passenger.findAll({
      where: {
        status: true,
      },
    });
  }

  async findOnePassenger(id) {
    return await Passenger.findOne({
      where: {
        id,
        status: true,
      },
    });
  }

  async updatePassenger(passenger, data) {
    return await passenger.update(data);
  }

  async deletePassenger(passenger) {
    return await passenger.update({ status: false });
  }
}
