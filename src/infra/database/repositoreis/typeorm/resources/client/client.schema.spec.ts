import { DataSource } from "typeorm";
import { Client } from "~/domain/entities";
import { ClientSchema } from "./client.schema";

describe('ClientSchema Test', () => {
  test('create', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [ClientSchema]
    });
    await dataSource.initialize();
    const client = Client.create({
      name: 'vinicius',
      birth: new Date()
    });
    const clientRepository = dataSource.getRepository(Client);
    await clientRepository.save(client);
    const clientFound = await clientRepository.findOneBy({ id: client.id });
    expect(client).toStrictEqual(clientFound);
  })
})
