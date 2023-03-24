export interface InsertClientRepositoryInputInterface {
  id: string;
  name: string;
  birth: Date;
}

export interface InsertClientRepositoryInterface {
  insert(input: InsertClientRepositoryInputInterface): Promise<void>;
}

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
