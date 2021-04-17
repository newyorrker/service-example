import express, { Express } from 'express';

import { injectable, inject } from "inversify";
import "reflect-metadata";

import { IApiService } from './Interfaces/IApiService'

import { IAnotherService } from '@/Services/AnotherService/Interfaces/IAnotherService'
import { TYPES } from '@/DI/types';

@injectable()
export class ApiService implements IApiService {

  private app: Express;
  private _anotherService: IAnotherService;

  constructor(
    @inject(TYPES.AnotherService) anotherService: IAnotherService
  ) {

    this._anotherService = anotherService;
    this.app = express();

    this.SetRoutes();
  }

  public Listen() {
    this.app.listen(3003, () => {

      const computed = this._anotherService.Compute(5, 6);

      console.log(`Example app listening on port 3000! and computed = ${computed}`);
    });
  }

  private SetRoutes() {
    this.app.get('/', (req, res) => {
      const computed = this._anotherService.Compute(5, 6);
      res.send(`Hello World! and computed = ${computed}`);
    });
  }
}