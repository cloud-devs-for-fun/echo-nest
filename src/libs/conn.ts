import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  database: 'db-echo-nest',
  user: 'postgres',
  password: 'root',
  port: 5432,
});

export default pool;
