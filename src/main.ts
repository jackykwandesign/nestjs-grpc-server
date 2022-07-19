import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const grpcOptions:GrpcOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, 'hero/hero.proto'),
      url: '0.0.0.0:5000',
    },
  }
  await app.connectMicroservice<MicroserviceOptions>(grpcOptions);
  app.startAllMicroservices();
  // const grpcServer = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, grpcOptions);
  // await app.startAllMicroservices();
  // app.listen(5000)
  // await app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'hero',
  //     protoPath: join(__dirname, 'hero/hero.proto'),
  //     url: 'localhost:5000',
  //   },
  // });
  // app.startAllMicroservices()
  // const app = await NestFactory.create(KafkaGrpcServerModule);
  // const grpcServer = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.GRPC,
  //     options: {
  //       package: 'hero',
  //       protoPath: join(__dirname, 'hero/hero.proto'),
  //     },
  //   },
  // );

  // await app.startAllMicroservices();
  // await app.listen(3000);
}
bootstrap();
