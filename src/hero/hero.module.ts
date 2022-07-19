import { Module } from '@nestjs/common';
import { HeroesService } from './hero.controller';

@Module({
  controllers: [HeroesService]
})
export class HeroModule {}
