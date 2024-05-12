// authors.controller.ts

import { CarsService } from './cars.service';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Car } from './car.entity';



@Controller('cars')
export class CarsController {
    constructor(private readonly authorsService: CarsService) {}

    @Get()
    findAll() {
        return this.authorsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.authorsService.findOne(+id);
    }

    @Get('brand/:brand')
    findByFullname(@Param('brand') brand: string) {
        return this.authorsService.findByFullname(brand);
    }

    @Get('price/:price')
    findByPosition(@Param('price') price: number) {
        return this.authorsService.findByPrice(price);
    }


    @Put(':id')
    update(@Param('id') id: string, @Body() updateAuthor: Car) {
        return this.authorsService.update(+id, updateAuthor);
    }

    @Post()
    create(@Body() createCar: Car) {
        return this.authorsService.create(createCar);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.authorsService.remove(+id);
    }


}
