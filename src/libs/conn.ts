import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE || 'db-echo-nest',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  port: Number(process.env.DB_PORT) || 5432,
});

export default pool;
