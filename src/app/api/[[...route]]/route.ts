import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { handle } from 'hono/vercel'
import cases from './routes/cases';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

// middlewares
app.use(logger());

// routes
app.get('/', (c) => c.json({ message: 'Bun & Hono = 🔥' }));
app.route('/cases', cases);

// not found
app.notFound((c) => c.json({ message: 'Not found 😔'}))


export const GET = handle(app)
export const POST = handle(app)