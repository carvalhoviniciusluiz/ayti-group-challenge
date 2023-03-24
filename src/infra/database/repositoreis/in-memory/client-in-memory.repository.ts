import type { FindAllClientsRepositoryInputInterface, FindAllClientsRepositoryInterface, FindAllClientsRepositoryOutputInterface, InsertClientRepositoryInputInterface, InsertClientRepositoryInterface } from "~/domain/repositories/clients";

export interface ClientDataInterface {
  id: string;
  name: string;
  birth: Date;
}

export class ClientInMemoryRepository implements InsertClientRepositoryInterface, FindAllClientsRepositoryInterface {
  clients: ClientDataInterface[] = [];
  async insert(input: InsertClientRepositoryInputInterface): Promise<void> {
    this.clients.push(input);
  }
  async findAll(input: FindAllClientsRepositoryInputInterface): Promise<FindAllClientsRepositoryOutputInterface[]> {
    return this.clients;
  }
}
