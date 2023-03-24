import express, { Express, Request, Response } from 'express';
import { CreateClientUseCase } from '~/application/usecases';
import { ClientInMemoryRepository } from '~/infra/database/repositoreis/in-memory';

const port = process.env.PORT || 3333;
const app: Express = express();
const repository = new ClientInMemoryRepository();

app.use(express.json());

app.post('/clients', async (req: Request, res: Response) => {
  const { client } = req.body;
  try {
    if(!client) {
      throw new Error();
    }
    const createClientUseCase = new CreateClientUseCase(repository);
    await createClientUseCase.run(client)
  } catch (error) {
    res.status(400).json({
      error: 'bad request'
    });
  }
  res.status(201).json();
});

app.listen(port, () => {
  console.log(`server runnning on ${port}`)
});
