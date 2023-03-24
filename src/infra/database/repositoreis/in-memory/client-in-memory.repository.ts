import type { InsertClientRepositoryInputInterface, InsertClientRepositoryInterface } from "~/domain/repositories/clients";

export interface ClientDataInterface {
  id: string;
  name: string;
  birth: Date;
}

export class ClientInMemoryRepository implements InsertClientRepositoryInterface {
  clients: ClientDataInterface[] = [];
  async insert(input: InsertClientRepositoryInputInterface): Promise<void> {
    this.clients.push(input);
  }
}
