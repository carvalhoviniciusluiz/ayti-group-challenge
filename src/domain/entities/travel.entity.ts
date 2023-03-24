import crypto from 'crypto';

type UUID = `${string}-${string}-${string}-${string}-${string}`;

type ClientProps = {
  id: string;
  name?: string;
  birth?: Date;
}

export type TravelProps = {
  client: ClientProps;
  destination: string;
  date: Date;
  clients?: ClientProps[]
}

export class Travel {
  private constructor(
    private readonly props = {} as TravelProps,
    readonly id = crypto.randomUUID()
  ) {}

  static create(props: TravelProps, id?: UUID) {
    const travel = new Travel(props, id);
    travel.validate();
    return travel;
  }

  validate() {
    if(!this.client) {
      throw new Error("Travel client is required");
    }
    if(!this.destination) {
      throw new Error("Travel destination is required");
    }
    if(!this.date) {
      throw new Error("Travel date is required");
    }
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props
    };
  }

  updateClient(value: ClientProps) {
    this.client = value;
  }
  updateDestination(value: string) {
    this.destination = value;
  }

  updateDate(value: Date) {
    this.date = value;
  }

  get client() {
    return this.props.client;
  }

  private set client(value: ClientProps) {
    this.props.client = value;
  }

  get destination() {
    return this.props.destination;
  }

  private set destination(value: string) {
    this.props.destination = value;
  }

  get date() {
    return this.props.date;
  }

  private set date(value: Date) {
    this.props.date = value;
  }

  get clients() {
    return this.props.clients || [];
  }

  private set clients(value: ClientProps[]) {
    this.props.clients = value;
  }
}
