type ClientProps = {
  id: string;
  name: string;
  birth: Date;
}

export interface InsertTravelRepositoryInputInterface {
  id: string;
  client: ClientProps;
  destination: string;
  date: Date;
}

export interface InsertTravelRepositoryInterface {
  insert(input: InsertTravelRepositoryInputInterface): Promise<void>;
}
