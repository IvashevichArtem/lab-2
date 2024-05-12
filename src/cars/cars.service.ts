import {DatasourceService} from "../datasourse/datasourse.service";
import {HttpStatus, Injectable} from "@nestjs/common";
import { Car } from './car.entity';

@Injectable()
export class CarsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(car: Car) {
        this.datasourceService.getCars().push(car);

        return car;
    }

    findOne(id: number) {
        return this.datasourceService
            .getCars()
            .find((author) => author.id === id);
    }

    findAll(): Car[] {
        return this.datasourceService.getCars();
    }


    update(id: number, updatedAuthor: Car) {
        const index = this.datasourceService
            .getCars()
            .findIndex((author) => author.id === id);
        this.datasourceService.getCars()[index] = updatedAuthor;
        return this.datasourceService.getCars()[index];
}


    remove(id: number) {
        const index = this.datasourceService
            .getCars()
            .findIndex((author) => author.id === id);
        this.datasourceService.getCars().splice(index,1);
        return HttpStatus.OK;
    }

    findByFullname(brand: string): Car {
        return this.datasourceService
            .getCars()
            .find((car) => car.brand === brand);
    }

    findByPrice(price: number): Car[] {
        return this.datasourceService
            .getCars()
            .filter((author) => author.price === price);
    }

}


