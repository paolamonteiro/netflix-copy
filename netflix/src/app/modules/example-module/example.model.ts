export interface IExample {
  id?: string;
  name: string;
  username: string;
  email: string;
}

export enum ExampleLala {
  FIRST_OPTION = 'FIRST_OPTION',
  SECOND_OPTION = 'SECOND_OPTION'
}

export class Example {
  id?: string;
  name: string;
  username: string;
  email: string;

  constructor(data) {
    if (data && data.id) {
      this.id = data?.id || null;
    }

    this.name = data?.name || null;
    this.email = data?.email || null;
    this.username = data?.username || null;
  }
}
