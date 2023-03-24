import { EntitySchema }  from 'typeorm';
import { Travel } from '~/domain/entities';

export const TravelSchema = new EntitySchema<Travel>({
  name: 'travel',
  tableName: 'travels',
  target: Travel,
  columns: {
    id: {
      type: 'uuid',
      primary: true
    },
    client: {
      type: 'uuid',
      name: 'client_id',
    },
    destination: {
      type: String,
      length: 255
    },
    date: {
      type: Date
    }
  },
  relations: {
    clients: {
      type: 'many-to-one',
      target: 'Client'
    },
  },
});
