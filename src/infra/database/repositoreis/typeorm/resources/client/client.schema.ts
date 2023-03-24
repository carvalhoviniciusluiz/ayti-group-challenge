import { EntitySchema }  from 'typeorm';
import { Client } from '~/domain/entities';

export const ClientSchema = new EntitySchema<Client>({
  name: 'client',
  tableName: 'clients',
  target: Client,
  columns: {
    id: {
      type: 'uuid',
      primary: true
    },
    name: {
      type: String,
      length: 255
    },
    birth: {
      type: Date
    }
  }
});
