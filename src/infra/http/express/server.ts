import express, { Express, Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { CreateClientUseCase } from '~/application/usecases';
import { Client } from '~/domain/entities';
import type { InsertClientRepositoryInterface } from '~/domain/repositories/clients';
import { postgresDataSource } from '~/infra/database/repositoreis/typeorm/data-sources';
import { ClientTypeOrmRepository } from '~/infra/database/repositoreis/typeorm/resources/client';

const port = process.env.PORT || 3333;
const app: Express = express();
let clientRepository: InsertClientRepositoryInterface;

app.use(express.json());

app.post('/clients', async (req: Request, res: Response) => {
  const { client } = req.body;
  try {
    if(!client) {
      throw new Error();
    }
    const createClientUseCase = new CreateClientUseCase(clientRepository);
    await createClientUseCase.run(client)
  } catch (error) {
    console.log({
      path: '#POST /clients',
      params: req.body,
      error
    });
    res.status(400).json({
      error: 'bad request'
    });
  }
  res.status(201).json();
});

postgresDataSource()
.then((dataSource: DataSource) => {
  clientRepository = new ClientTypeOrmRepository(dataSource.getRepository(Client));
});

app.listen(port, () => {
  console.log(`server runnning on ${port}`)
});
