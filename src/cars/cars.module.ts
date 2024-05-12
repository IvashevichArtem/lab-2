import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import {DatasourceModule} from "../datasourse/datasourse.module";


@Module({
    controllers: [CarsController],
    providers: [CarsService],
    imports: [DatasourceModule],
})
export class CarsModule {}
