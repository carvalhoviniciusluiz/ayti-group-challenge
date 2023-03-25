import { Repository } from "typeorm";
import { Travel } from "~/domain/entities";
import type { FindAllTravelsRepositoryInputInterface, FindAllTravelsRepositoryOutputInterface, InsertTravelRepositoryInputInterface, InsertTravelRepositoryInterface } from "~/domain/repositories/travels";

export class TravelTypeOrmRepository implements InsertTravelRepositoryInterface, FindAllTravelsRepositoryInputInterface {
  constructor(private readonly repository: Repository<Travel>) {}

  async insert(input: InsertTravelRepositoryInputInterface): Promise<void> {
    await this.repository.save({
      id: input.id,
      destination: input.destination,
      date: new Date(input.date),
      client: { id: input.client.id },
    } as any);
  }
  async findAll(input: FindAllTravelsRepositoryInputInterface): Promise<FindAllTravelsRepositoryOutputInterface[]> {
    const travels = await this.repository.find();
    const output = travels.map(travel => ({
      id: travel.id,
      destination: travel.destination,
      date: travel.date,
    }));
    return output;
  }
}
