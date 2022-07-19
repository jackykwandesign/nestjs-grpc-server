import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [HeroModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
