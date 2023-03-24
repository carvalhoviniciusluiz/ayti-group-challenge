import { Repository } from "typeorm";
import { Client } from "~/domain/entities";
import type { InsertClientRepositoryInterface } from "~/domain/repositories/clients";

export class ClientTypeOrmRepository implements InsertClientRepositoryInterface {
  constructor(private readonly repository: Repository<Client>) {}

  async insert(client: Client): Promise<void> {
    await this.repository.save({
      id: client.id,
      name: client.name,
      birth: new Date(client.birth)
    });
  }
}
