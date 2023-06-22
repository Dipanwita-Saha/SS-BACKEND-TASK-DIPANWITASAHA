import { Module } from '@nestjs/common';
import { TvShowschema} from './model/tvshow.schema';
import { Movieschema} from './model/movie.schema';
import { Userschema} from './model/user.schema';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieController } from './controller/movie.controller';
import { ShowController } from './controller/show.controller';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { MovieService } from './service/movie.service';
import { ShowService } from './service/tvshow.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{name:"Show", schema:TvShowschema}]),
    MongooseModule.forFeature([{name:"Movie", schema:Movieschema}]),
    MongooseModule.forFeature([{name:"User", schema:Userschema}]),

  ],
  controllers: [MovieController,ShowController,UserController],
  providers: [UserService,MovieService,ShowService],
})
export class AppModule {}
