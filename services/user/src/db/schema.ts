import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { ulid } from 'ulidx';

export const users = sqliteTable('users', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => ulid()),
  email: text('email').unique().notNull(),
  password: text().notNull(),
  role: text('role', { enum: ['admin', 'customer'] }).notNull(),
  createdAt: text('created_at').$defaultFn(() => new Date().toISOString()),
  updatedAt: text('updated_at'),
});
