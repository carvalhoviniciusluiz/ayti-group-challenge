import crypto from 'crypto';

export type ClientProps = {
  name: string;
  birth: Date;
}

type UUID = `${string}-${string}-${string}-${string}-${string}`;

export class Client {
  private constructor(
    private readonly props = {} as ClientProps,
    readonly id = crypto.randomUUID()
  ) {}

  static create(props: ClientProps, id?: UUID) {
    const client = new Client(props, id);
    client.validate();
    return client;
  }

  validate() {
    if(!this.name) {
      throw new Error("Client name is required");
    }
    if(!this.birth) {
      throw new Error("Client birth is required");
    }
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props
    };
  }

  updateName(value: string) {
    this.name = value;
  }

  updateBirth(value: Date) {
    this.birth = value;
  }

  get name() {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  get birth() {
    return this.props.birth;
  }

  private set birth(value: Date) {
    this.props.birth = value;
  }
}
