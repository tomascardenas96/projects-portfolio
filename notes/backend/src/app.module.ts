import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    NotesModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      // useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'notesapp',
        username: 'root',
        password: 'root',
        entities: [__dirname + '*/**/*.entity{.js,.ts}'],
        synchronize: true,
        // ssl: { rejectUnauthorized: false }
      // }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
