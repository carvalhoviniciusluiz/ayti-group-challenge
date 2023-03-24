import express, { Express, Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { CreateClientUseCase, FindAllClientsUseCase } from '~/application/usecases/client';
import { CreateTravelUseCase, FindAllTravelsUseCase } from '~/application/usecases/travel';
import { Client, Travel } from '~/domain/entities';
import type { FindAllClientsRepositoryInterface, InsertClientRepositoryInterface } from '~/domain/repositories/clients';
import { FindAllTravelsRepositoryInterface, InsertTravelRepositoryInterface } from '~/domain/repositories/travels';
import { postgresDataSource } from '~/infra/database/repositoreis/typeorm/data-sources';
import { ClientTypeOrmRepository } from '~/infra/database/repositoreis/typeorm/resources/client';
import { TravelTypeOrmRepository } from '~/infra/database/repositoreis/typeorm/resources/travel';

const port = process.env.PORT || 3333;
const app: Express = express();

type ClientRepositoryInterface =
  InsertClientRepositoryInterface & FindAllClientsRepositoryInterface;

type TravelRepositoryInterface =
  InsertTravelRepositoryInterface & FindAllTravelsRepositoryInterface;

let clientRepository: ClientRepositoryInterface;
let travelRepository: TravelRepositoryInterface;

app.use(express.json());

app.post('/travels', async (req: Request, res: Response) => {
  const { travel } = req.body;
  try {
    if(!travel) {
      throw new Error();
    }
    const createTravelUseCase = new CreateTravelUseCase(travelRepository);
    await createTravelUseCase.run(travel)
  } catch (error) {
    console.log({
      path: '#POST /travels',
      params: req.body,
      error
    });
    res.status(400).json({
      error: 'bad request'
    });
  }
  res.status(201).json();
});

app.get('/travels', async (_: Request, res: Response) => {
  const findAllTravelsUseCase = new FindAllTravelsUseCase(travelRepository);
  const output = await findAllTravelsUseCase.findAll({});
  res.status(201).json(output);
});

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

app.get('/clients', async (_: Request, res: Response) => {
  const findAllClientsUseCase = new FindAllClientsUseCase(clientRepository);
  const output = await findAllClientsUseCase.findAll({});
  res.status(201).json(output);
});

postgresDataSource()
.then((dataSource: DataSource) => {
  clientRepository = new ClientTypeOrmRepository(dataSource.getRepository(Client));
  travelRepository = new TravelTypeOrmRepository(dataSource.getRepository(Travel));
});

app.listen(port, () => {
  console.log(`server runnning on ${port}`)
});
