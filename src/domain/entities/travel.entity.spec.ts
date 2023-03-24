import crypto from 'crypto';
import { Client } from './client.entity';
import { Travel, TravelProps } from "./travel.entity";

describe('Travel Entity', () => {
  const client = Client.create({
    name: 'vinicius',
    birth: new Date()
  });
  const props: TravelProps = {
    client: client.toJSON(),
    destination: 'Parris',
    date: new Date()
  }
  test('create new travel', () => {
    const client = Travel.create(props);
    expect(client.toJSON()).toStrictEqual({
      id: client.id,
      ...props,
    });
  });
  test('not create new travel if client is empty', () => {
    expect(() => {
      Travel.create({
        ...props,
        client: undefined as any
      })
    }).toThrow('Travel client is required');
  });
  test('not create new client if destination is empty', () => {
    expect(() => {
      Travel.create({
        ...props,
        destination: undefined as any
      })
    }).toThrow('Travel destination is required');
  });
  test('not create new client if date is empty', () => {
    expect(() => {
      Travel.create({
        ...props,
        date: undefined as any
      })
    }).toThrow('Travel date is required');
  });
  test('updateUserId method', () => {
    const newClient = Client.create({
      name: 'vinicius',
      birth: new Date()
    });
    const travel = Travel.create(props);
    travel.updateClient(newClient);
    expect(travel.client).toBe(newClient);
  });
  test('updateDestination method', () => {
    const newDestination = 'xpto destination';
    const client = Travel.create(props);
    client.updateDestination(newDestination);
    expect(client.destination).toBe(newDestination);
  });
  test('updateDate method', () => {
    const newDate = new Date();
    const client = Travel.create(props);
    client.updateDate(newDate);
    expect(client.date).toBe(newDate);
  });
});
