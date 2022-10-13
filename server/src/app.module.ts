import { Module, Scope } from "@nestjs/common"
import { APP_INTERCEPTOR } from "@nestjs/core"
import { MorganInterceptor, MorganModule } from "nest-morgan"
import { UserModule } from "./user/user.module"
import { SupplierModule } from "./supplier/supplier.module"
import { ACLModule } from "./auth/acl.module"
import { AuthModule } from "./auth/auth.module"
import { HealthModule } from "./health/health.module"
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { ServeStaticModule } from "@nestjs/serve-static"
import { ServeStaticOptionsService } from "./serveStaticOptions.service"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core"

@Module({
  controllers: [],
  imports: [
    UserModule,
    SupplierModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const introspection = configService.get("GRAPHQL_INTROSPECTION")
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground: false,
          plugins: [ApolloServerPluginLandingPageLocalDefault()],
          introspection,
        }
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
