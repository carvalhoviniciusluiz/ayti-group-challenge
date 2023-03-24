import { ClientProps } from "~/domain/entities";
import { ClientInMemoryRepository } from "~/infra/database/repositoreis/in-memory";
import { CreateClientUseCase } from "./create-client.usecase";

describe('CreateClientUseCase Test', () => {
  const props: ClientProps = {
    name: 'vinicius',
    birth: new Date()
  }
  it('should create new Client', async () => {
    const repository = new ClientInMemoryRepository();
    const createClient = new CreateClientUseCase(repository);
    const output = await createClient.run(props);
    expect(repository.clients).toHaveLength(1);
    expect(output).toStrictEqual({ ...props, id: output.id });
  });
})
