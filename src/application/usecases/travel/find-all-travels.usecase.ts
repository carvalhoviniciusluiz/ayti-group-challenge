import { FindAllTravelsRepositoryInterface } from "~/domain/repositories/travels";

export interface FindAllTravelsUseCaseInputInterface {}
export interface FindAllTravelsUseCaseOutputInterface {
  id: string;
  destination: string;
  date: Date;
}
export interface FindAllTravelsUseCaseInterface {
  findAll(input: FindAllTravelsUseCaseInputInterface): Promise<FindAllTravelsUseCaseOutputInterface[]>
}

export class FindAllTravelsUseCase implements FindAllTravelsUseCaseInterface {
  constructor(private travelRepository: FindAllTravelsRepositoryInterface) {}

  async findAll(input: FindAllTravelsUseCaseInputInterface) {
    const travels = await this.travelRepository.findAll(input);
    return travels.map(travel => ({
      id: travel.id,
      destination: travel.destination,
      date: travel.date
    }));
  }
}
