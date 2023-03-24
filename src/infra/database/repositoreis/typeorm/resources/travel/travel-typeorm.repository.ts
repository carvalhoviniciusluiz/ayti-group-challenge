import { Repository } from "typeorm";
import { Travel } from "~/domain/entities";
import type { FindAllTravelsRepositoryInputInterface, FindAllTravelsRepositoryOutputInterface, InsertTravelRepositoryInputInterface, InsertTravelRepositoryInterface } from "~/domain/repositories/travels";

export class TravelTypeOrmRepository implements InsertTravelRepositoryInterface, FindAllTravelsRepositoryInputInterface {
  constructor(private readonly repository: Repository<Travel>) {}

  async insert(input: InsertTravelRepositoryInputInterface): Promise<void> {
    await this.repository.query('INSERT INTO "travels"("id", "client_id", "destination", "date") VALUES ($1, $2, $3, $4)', [
      input.id ,
      input.client.id,
      input.destination,
      new Date(input.date)
    ]);
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
