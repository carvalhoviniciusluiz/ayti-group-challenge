import crypto from 'crypto';
import { TravelInMemoryRepository } from "~/infra/database/repositoreis/in-memory";
import { CreateTravelUseCase } from "./create-travel.usecase";
import { FindAllTravelsUseCase } from './find-all-travels.usecase';


describe('FindAllTravelsUseCase Test', () => {
  it('should return on all travels', async () => {
    const repository = new TravelInMemoryRepository();
    const createTravelUseCase = new CreateTravelUseCase(repository);
    const props = {
      client: {
        id: crypto.randomUUID()
      },
      destination: 'barramas',
      date: new Date()
    }
    const output = await createTravelUseCase.run(props);
    const findAllTravels = new FindAllTravelsUseCase(repository);
    expect(repository.travels).toHaveLength(1);
    const filtered = await findAllTravels.findAll({});
    expect(filtered).toHaveLength(1);
    expect(output).toStrictEqual({ ...props, id: output.id });
  });
})
