export class Product {
  //Using this automatically adds the properties to the class
  constructor(
    public id: string,
    public title: string,
    public desc: string,
    public price: number,
  ) {}
}
