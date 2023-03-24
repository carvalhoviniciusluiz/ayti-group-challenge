import crypto from 'crypto';
import { Travel } from "~/domain/entities";
import { TravelInMemoryRepository } from "./travel-in-memory.repository";

describe('ClientInMemoryRepository Test', () => {
  it('should insert a new client', async () => {
    const travel = Travel.create({
      client: {
        id: crypto.randomUUID()
      },
      destination: 'barramas',
      date: new Date()
    });
    const repository = new TravelInMemoryRepository();
    await repository.insert(travel);
    expect(repository.travels).toHaveLength(1);
    expect(repository.travels).toStrictEqual([travel]);
  });
});
