import {
  Global,
  INestApplication,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async disconnect(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
