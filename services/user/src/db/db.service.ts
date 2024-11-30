import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/libsql';

@Injectable()
export class DbService {
  private readonly db: any;

  constructor(private configService: ConfigService) {
    this.db = drizzle({
      connection: {
        url: this.configService.get<string>('DATABASE_URL'),
        authToken: this.configService.get<string>('DATABASE_AUTH_TOKEN'),
      },
    });
  }

  get dbInstance() {
    return this.db;
  }
}
