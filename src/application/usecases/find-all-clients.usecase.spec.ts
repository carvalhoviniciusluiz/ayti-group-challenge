import { ClientProps } from "~/domain/entities";
import { ClientInMemoryRepository } from "~/infra/database/repositoreis/in-memory";
import { CreateClientUseCase } from "./create-client.usecase";
import { FindAllClientsUseCase } from "./find-all-clients.usecase";

describe('FindAllClientsUseCase Test', () => {
  const props: ClientProps = {
    name: 'vinicius',
    birth: new Date()
  }
  it('should return on all clients', async () => {
    const repository = new ClientInMemoryRepository();
    const createClientUseCase = new CreateClientUseCase(repository);
    const output = await createClientUseCase.run(props);
    const findAllClients = new FindAllClientsUseCase(repository);
    expect(repository.clients).toHaveLength(1);
    const filtered = await findAllClients.findAll({});
    expect(filtered).toHaveLength(1);
    expect(output).toStrictEqual({ ...props, id: output.id });
  });
})
