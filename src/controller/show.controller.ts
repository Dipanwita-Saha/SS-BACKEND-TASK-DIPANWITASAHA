import {Body, Post, Get, Param} from '@nestjs/common/decorators/http';
import { Controller, UseGuards } from '@nestjs/common';
import { Show } from '../model/tvshow.model';
import { ShowService } from 'src/service/tvshow.service';
import { AdminGuard } from 'src/guard/auth.guard';

@Controller('show')

export class ShowController{
    constructor(private showService: ShowService){}

        @UseGuards(AdminGuard)
        @Post('/createshow')
        async CreateShow(@Body() show:Show): Promise<Show>{
            return this.showService.CreateShow(show);
        }

        @Get('/allshow')
        FindAllShow():Promise<Show[]>{
        return this.showService.FindAllShow();
        }

        @Get('/showbyid/:id')
        FindShow(@Param('id')id:string):Promise<Show>{
         return this.showService.FindShow(id);

        }

    }
