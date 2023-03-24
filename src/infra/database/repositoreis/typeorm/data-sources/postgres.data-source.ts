import { DataSource } from "typeorm";
import { ClientSchema } from "../resources/client";
import { TravelSchema } from "../resources/travel";

export const postgresDataSource = async () => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: '0.0.0.0',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'postgres',
    synchronize: true,
    logging: false,
    entities: [ClientSchema, TravelSchema]
  });
  return dataSource.initialize();
}
