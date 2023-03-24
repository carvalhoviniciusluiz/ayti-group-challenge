import crypto from 'crypto';
import { TravelInMemoryRepository } from "~/infra/database/repositoreis/in-memory";
import { CreateTravelUseCase } from "./create-travel.usecase";

describe('CreateTravelUseCase Test', () => {
  it('should create new travel', async () => {
    const repository = new TravelInMemoryRepository();
    const createTravel = new CreateTravelUseCase(repository);
    const props = {
      client: {
        id: crypto.randomUUID()
      },
      destination: 'barramas',
      date: new Date()
    }
    const output = await createTravel.run(props);
    expect(repository.travels).toHaveLength(1);
    expect(output).toStrictEqual({ ...props, id: output.id });
  });
})
