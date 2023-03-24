import { Repository } from "typeorm";
import { Travel } from "~/domain/entities";
import type { FindAllTravelsRepositoryInputInterface, FindAllTravelsRepositoryOutputInterface, InsertTravelRepositoryInputInterface, InsertTravelRepositoryInterface } from "~/domain/repositories/travels";

export class TravelTypeOrmRepository implements InsertTravelRepositoryInterface, FindAllTravelsRepositoryInputInterface {
  constructor(private readonly repository: Repository<Travel>) {}

  async insert(input: InsertTravelRepositoryInputInterface): Promise<void> {
    await this.repository.save({
      id: input.id,
      destination: input.destination,
      client: input.client,
      date: new Date(input.date)
    } as any);
  }
  async findAll(input: FindAllTravelsRepositoryInputInterface): Promise<FindAllTravelsRepositoryOutputInterface[]> {
    console.log(await this.repository.find());

    return [];
  }
}
