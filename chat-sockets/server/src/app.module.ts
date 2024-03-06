import { Module } from '@nestjs/common';
import { WebSocketModule } from './websockets/websocket.module';

@Module({
  imports: [WebSocketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
