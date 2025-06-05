import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import pool from './config/db.js';
import authRoutes from './routes/auth.routes.js';

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || '4fT8$g!9s2@#Ld76z1^&bO9xPq';
const JWT_EXPIRES_IN = '24h';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173',      // Ganti dengan URL frontend kamu
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);

app.post('/api/auth/google', async (req, res) => {
  const { email, name, google_id } = req.body;

  if (!email || !google_id) {
    return res.status(400).json({ message: 'Data tidak lengkap' });
  }

  try {
    // Cek apakah user sudah ada
    const result = await pool.query('SELECT * FROM users WHERE google_id = $1', [google_id]);

    let user;
    if (result.rows.length > 0) {
      user = result.rows[0];
    } else {
      // Insert user baru
      const insertResult = await pool.query(
        'INSERT INTO users (email, name, provider, google_id, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
        [email, name, 'google', google_id]
      );
      user = insertResult.rows[0];
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    });

    return res.json({ user, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});


app.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000');
});
