import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RtiModule } from './rti/rti.module';
import { UserModule } from './user/user.module';
import { PetroleumModule } from './petroleum/petroleum.module';
import { ZoneinfoModule } from './zoneinfo/zoneinfo.module';
import { OldcopyModule } from './oldcopy/oldcopy.module';
import { UploaderModule } from './uploader/uploader.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { LandsectionModule } from './landsection/landsection.module';
import { VillageModule } from './village/village.module';
import { SurveyModule } from './survey/survey.module';
import { QueryModule } from './query/query.module';
import { DealinghandModule } from './dealinghand/dealinghand.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(process.cwd(), 'public'),
    }),
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    RtiModule,
    UserModule,
    PetroleumModule,
    ZoneinfoModule,
    OldcopyModule,
    UploaderModule,
    AuthModule,
    CommonModule,
    LandsectionModule,
    VillageModule,
    SurveyModule,
    QueryModule,
    DealinghandModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
