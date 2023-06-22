import {Body, Post, Get, Param} from '@nestjs/common/decorators/http';
import { Controller } from '@nestjs/common';
import { Movie } from '../model/movie.model';
import { MovieService } from 'src/service/movie.service';

@Controller('movie')

export class MovieController{
    constructor(private movieService: MovieService){}
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
