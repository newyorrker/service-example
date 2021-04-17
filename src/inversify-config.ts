import { Container } from "inversify";
import { TYPES } from "@/DI/types"

import { IApiService } from '@/Services/ApiService/Interfaces/IApiService'
import { IAnotherService } from '@/Services/AnotherService/Interfaces/IAnotherService'

import { ApiService } from '@/Services/ApiService'
import { AnotherService } from '@/Services/AnotherService'

const myContainer = new Container();

myContainer.bind<IApiService>(TYPES.ApiService).to(ApiService);
myContainer.bind<IAnotherService>(TYPES.AnotherService).to(AnotherService);


export { myContainer };