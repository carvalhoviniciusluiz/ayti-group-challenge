export interface FindAllClientsRepositoryInputInterface {}

export interface FindAllClientsRepositoryOutputInterface {
  id: string;
  name: string;
  birth: Date;
}

export interface FindAllClientsRepositoryInterface {
  findAll(input: FindAllClientsRepositoryInputInterface): Promise<FindAllClientsRepositoryOutputInterface[]>
}
