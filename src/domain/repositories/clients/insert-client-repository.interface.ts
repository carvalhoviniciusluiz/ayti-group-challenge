export interface InsertClientRepositoryInputInterface {
  id: string;
  name: string;
  birth: Date;
}


export interface InsertClientRepositoryInterface {
  insert(input: InsertClientRepositoryInputInterface): Promise<void>;
}
