import { Travel } from "~/domain/entities";
import { InsertTravelRepositoryInterface } from "~/domain/repositories/travels";

export interface CreateTravelUseCaseInputInterface {
  clientId: string;
  // client: {
  //   id: string;
  // }
  destination: string;
  date: Date;
}

export interface CreateTravelUseCaseOutputInterface {
  id: string;
  destination: string;
  date: Date;
}

export interface CreateTravelUseCaseInterface {
  run(input: CreateTravelUseCaseInputInterface): Promise<CreateTravelUseCaseOutputInterface>;
}

export class CreateTravelUseCase implements CreateTravelUseCaseInterface {
  constructor(private readonly repository: InsertTravelRepositoryInterface){}

  async run(input: CreateTravelUseCaseInputInterface): Promise<CreateTravelUseCaseOutputInterface> {
    const { clientId, date, destination } = input;
    const travel = Travel.create({
      client: {
        id: clientId
      },
      date,
      destination
    });
    await this.repository.insert(travel as any)
    return travel.toJSON();
  }
}
