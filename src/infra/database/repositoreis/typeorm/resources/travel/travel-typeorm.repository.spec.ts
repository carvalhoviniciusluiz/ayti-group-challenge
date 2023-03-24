import crypto from 'crypto';
import { DataSource, Repository } from "typeorm";
import { Client, Travel } from "~/domain/entities";
import { ClientSchema, ClientTypeOrmRepository } from '../client';
import { TravelTypeOrmRepository } from "./travel-typeorm.repository";
import { TravelSchema } from "./travel.schema";

describe('TravelTypeOrmRepository Test', () => {
  it('should insert a new sale product', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [ClientSchema, TravelSchema]
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
    const repositoryClient = dataSource.getRepository(Client);
    const repositoryTravel = dataSource.getRepository(Travel);
    const clientRepository = new ClientTypeOrmRepository(repositoryClient);
    const travelRepository = new TravelTypeOrmRepository(repositoryTravel);
    await clientRepository.insert(client);
    await travelRepository.insert(travel as any);
    const travelFound = await repositoryTravel.findOneBy({ id: travel.id });
    expect(travelFound?.toJSON().id).toBe(travel.id);
  });
});
