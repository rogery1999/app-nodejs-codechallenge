import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { graphqlConfig } from './config/graphql.config';
import { typeormConfig } from './config/typeorm.config';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.local.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      ...graphqlConfig,
    }),
    TypeOrmModule.forRootAsync({ ...typeormConfig }),

    TransactionsModule,
  ],
})
export class AppModule {}
