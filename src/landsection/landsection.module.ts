import { Module } from '@nestjs/common';
import { LandsectionService } from './landsection.service';
import { LandsectionResolver } from './landsection.resolver';

@Module({
  providers: [LandsectionResolver, LandsectionService]
})
export class LandsectionModule {}
