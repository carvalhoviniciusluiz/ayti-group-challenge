import { FindAllClientsRepositoryInterface } from "~/domain/repositories/clients";

export interface FindAllClientsUseCaseInputInterface {}
export interface FindAllClientsUseCaseOutputInterface {
  id: string;
  name: string;
  birth: Date;
}
export interface FindAllClientsUseCaseInterface {
  findAll(input: FindAllClientsUseCaseInputInterface): Promise<FindAllClientsUseCaseOutputInterface[]>
}

export class FindAllClientsUseCase implements FindAllClientsUseCaseInterface {
  constructor(private clientRepository: FindAllClientsRepositoryInterface) {}

  async findAll(input: FindAllClientsUseCaseInputInterface) {
    const clients = await this.clientRepository.findAll(input);
    return clients.map(client => ({
      id: client.id,
      name: client.name,
      birth: client.birth
    }));
  }
}
