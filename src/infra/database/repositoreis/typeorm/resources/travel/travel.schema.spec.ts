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
      logging: true,
      entities: [ClientSchema, TravelSchema]
    });
    await dataSource.initialize();
    const client = Client.create({
      name: 'vinicius' + new Date(),
      birth: new Date()
    });
    const travel = Travel.create({
      client,
      destination: 'Parris',
      date: new Date()
    });
    const clientRepository = dataSource.getRepository(Client);
    const travelRepository = dataSource.getRepository(Travel);
    await clientRepository.save(client);
    await travelRepository.save({
      id: travel.id,
      destination: travel.destination,
      date: travel.date,
      client: {
        id: travel.client.id
      },
    });
    const travelFound = await travelRepository.findOneBy({ id: travel.id });
    expect(travel.toJSON().id).toBe(travelFound?.toJSON().id);
  })
})
