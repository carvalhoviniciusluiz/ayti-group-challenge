export interface FindAllTravelsRepositoryInputInterface {}

type ClientProps = {
  id: string;
  name: string;
  birth: Date;
}

export interface FindAllTravelsRepositoryOutputInterface {
  id: string;
  client: ClientProps;
  destination: string;
  date: Date;
}

export interface FindAllTravelsRepositoryInterface {
  findAll(input: FindAllTravelsRepositoryInputInterface): Promise<FindAllTravelsRepositoryOutputInterface[]>
}
