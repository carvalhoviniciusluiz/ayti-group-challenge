import { Client, ClientProps } from "~/domain/entities";
import { ClientInMemoryRepository } from "./client-in-memory.repository";

describe('ClientInMemoryRepository Test', () => {
  const props: ClientProps = {
    name: 'vinicius',
    birth: new Date()
  }
  it('should insert a new client', async () => {
    const client = Client.create(props);
    const repository = new ClientInMemoryRepository();
    await repository.insert(client);
    expect(repository.clients).toHaveLength(1);
    expect(repository.clients).toStrictEqual([client]);
  });
});
