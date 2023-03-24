import { Repository } from "typeorm";
import { Client } from "~/domain/entities";
import type { FindAllClientsRepositoryInputInterface, FindAllClientsRepositoryOutputInterface, InsertClientRepositoryInterface } from "~/domain/repositories/clients";

export class ClientTypeOrmRepository implements InsertClientRepositoryInterface, FindAllClientsRepositoryInputInterface {
  constructor(private readonly repository: Repository<Client>) {}

  async insert(client: Client): Promise<void> {
    await this.repository.save({
      id: client.id,
      name: client.name,
      birth: new Date(client.birth)
    });
  }
  async findAll(input: FindAllClientsRepositoryInputInterface): Promise<FindAllClientsRepositoryOutputInterface[]> {
    return this.repository.find();
  }
}
