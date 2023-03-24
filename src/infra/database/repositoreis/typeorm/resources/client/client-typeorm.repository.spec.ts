import { DataSource, Repository } from "typeorm";
import { Client } from "~/domain/entities";
import { ClientTypeOrmRepository } from "./client-typeorm.repository";
import { ClientSchema } from "./client.schema";

describe('ClientTypeOrmRepository Test', () => {
  const makeSut = async (): Promise<[ClientTypeOrmRepository, Repository<Client>]> => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [ClientSchema]
    });
    await dataSource.initialize();
    const repository = dataSource.getRepository(Client);
    const clientRepository = new ClientTypeOrmRepository(repository);
    return [clientRepository, repository];
  }
  it('should insert a new client', async () => {
    const [clientRepository, repository] = await makeSut();
    const client = Client.create({
      name: 'vinicius',
      birth: new Date()
    });
    await clientRepository.insert(client);
    const clientFound = await repository.findOneBy({ id: client.id });
    expect(clientFound).toStrictEqual(client);
  });
});
