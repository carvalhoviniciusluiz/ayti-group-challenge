import crypto from 'crypto';
import { TravelInMemoryRepository } from "~/infra/database/repositoreis/in-memory";
import { CreateTravelUseCase } from "./create-travel.usecase";

describe('CreateTravelUseCase Test', () => {
  it('should create new travel', async () => {
    const repository = new TravelInMemoryRepository();
    const createTravelUseCase = new CreateTravelUseCase(repository);
    const props = {
      clientId: crypto.randomUUID(),
      destination: 'barramas',
      date: new Date()
    }
    const output = await createTravelUseCase.run(props);
    expect(repository.travels).toHaveLength(1);
    const { clientId, ...rest } = props;
    expect(output).toStrictEqual({ ...rest, client: { id: clientId }, id: output.id });
  });
})
