import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import {DatasourceModule} from "./datasourse/datasourse.module";


@Module({
  imports: [CarsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
