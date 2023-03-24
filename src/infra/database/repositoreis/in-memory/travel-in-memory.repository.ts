import { FindAllTravelsRepositoryInputInterface, FindAllTravelsRepositoryInterface, FindAllTravelsRepositoryOutputInterface, InsertTravelRepositoryInputInterface, InsertTravelRepositoryInterface } from "~/domain/repositories/travels";

export interface TravelDataInterface {
  id: string;
  destination: string;
  date: Date;
}

export class TravelInMemoryRepository implements InsertTravelRepositoryInterface, FindAllTravelsRepositoryInterface {
  travels: TravelDataInterface[] = [];
  async insert(input: InsertTravelRepositoryInputInterface): Promise<void> {
    this.travels.push(input);
  }
  async findAll(input: FindAllTravelsRepositoryInputInterface): Promise<FindAllTravelsRepositoryOutputInterface[]> {
    return this.travels;
  }
}
