import { Client } from "~/domain/entities";
import { InsertClientRepositoryInterface } from "~/domain/repositories/clients";

export interface CreateClientUseCaseInputInterface {
  name: string;
  birth: Date;
}

export interface CreateClientUseCaseOutputInterface {
  id: string;
  name: string;
  birth: Date;
}

export interface CreateClientUseCaseInterface {
  run(input: CreateClientUseCaseInputInterface): Promise<CreateClientUseCaseOutputInterface>;
}

export class CreateClientUseCase implements CreateClientUseCaseInterface {
  constructor(
    private readonly repository: InsertClientRepositoryInterface
  ){}

  async run(input: CreateClientUseCaseInputInterface): Promise<CreateClientUseCaseOutputInterface> {
    const client = Client.create(input);
    await this.repository.insert(client.toJSON())
    return client.toJSON();
  }
}
