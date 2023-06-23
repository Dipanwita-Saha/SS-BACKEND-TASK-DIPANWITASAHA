import {Body, Post, Get, Param} from '@nestjs/common/decorators/http';
import { Controller, UseGuards } from '@nestjs/common';
import { Movie } from '../model/movie.model';
import { MovieService } from 'src/service/movie.service';
import { AdminGuard } from 'src/guard/auth.guard';

@Controller('movie')

export class MovieController{
    constructor(private movieService: MovieService){}

    
        @UseGuards(AdminGuard)
        @Post('/createmovie')
        async CreateMovie(@Body() movie:Movie): Promise<Movie>{
            return this.movieService.CreateMovie(movie);
        }

        @Get('/allmovie')
        FindAllMovie():Promise<Movie[]>{
        return this.movieService.FindAllMovie();
        }

        @Get('/moviebyid/:id')
        FindMovie(@Param('id')id:string):Promise<Movie>{
         return this.movieService.FindMovie(id);

        }

    }
