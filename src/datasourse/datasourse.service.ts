import { Injectable } from '@nestjs/common';
import { Car } from '../cars/car.entity';


@Injectable()
export class DatasourceService {
    private cars: Car[] = [];

    getCars(): Car[] {
        return this.cars;
    }


}