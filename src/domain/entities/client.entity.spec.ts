import { Client, ClientProps } from "./client.entity";

describe('Client Entity', () => {
  const props: ClientProps = {
    name: 'vinicius',
    birth: new Date()
  }
  test('create new client', () => {
    const client = Client.create(props);
    expect(client.toJSON()).toStrictEqual({
      id: client.id,
      ...props,
    });
  });
  test('not create new client if name is empty', () => {
    expect(() => {
      Client.create({
        ...props,
        name: undefined as any
      })
    }).toThrow('Client name is required');
  });
  test('not create new client if birth is empty', () => {
    expect(() => {
      Client.create({
        ...props,
        birth: undefined as any
      })
    }).toThrow('Client birth is required');
  });
  test('updateName method', () => {
    const newName = 'riane';
    const client = Client.create(props);
    client.updateName(newName);
    expect(client.name).toBe(newName);
  });
  test('updateBirth method', () => {
    const newBirth = new Date("2023-04-24");
    const client = Client.create(props);
    client.updateBirth(newBirth);
    expect(client.birth).toBe(newBirth);
  });
});
