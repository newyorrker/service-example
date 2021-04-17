import { IAnotherService } from './Interfaces/IAnotherService'
import { injectable } from "inversify";

@injectable()
export class AnotherService implements IAnotherService {

  public Compute(a: number, b: number): number {
    return a + b;
  }

}