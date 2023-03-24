export interface FindAllTravelsRepositoryInputInterface {}

export interface FindAllTravelsRepositoryOutputInterface {
  id: string;
  destination: string;
  date: Date;
}

export interface FindAllTravelsRepositoryInterface {
  findAll(input: FindAllTravelsRepositoryInputInterface): Promise<FindAllTravelsRepositoryOutputInterface[]>
}
