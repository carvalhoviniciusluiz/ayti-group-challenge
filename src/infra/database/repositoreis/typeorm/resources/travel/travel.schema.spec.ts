import { DataSource } from "typeorm";
import { Client, Travel } from "~/domain/entities";
import { ClientSchema } from '../client';
import { TravelSchema } from "./travel.schema";

describe('TravelSchema Test', () => {
  test('create', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [TravelSchema, ClientSchema]
    });
    await dataSource.initialize();
    const client = Client.create({
      name: 'vinicius' + new Date(),
      birth: new Date()
    });
    const travel = Travel.create({
      client: client.toJSON(),
      destination: 'Parris',
      date: new Date()
    });
    const clientRepository = dataSource.getRepository(Client);
    const travelRepository = dataSource.getRepository(Travel);
    (await clientRepository.save(client));
    await travelRepository.save(travel);
    const travelFound = await travelRepository.findOneBy({ id: travel.id });
    expect(travel.toJSON().id).toBe(travelFound?.toJSON().id);
  })
})
