import express from 'express';
import { login} from '../controllers/auth.controller.js';

const router = express.Router();
// Route untuk registrasi
/**
 * @route POST /api/auth/register
 * @desc Register a new user (student)
 * @access Public
 */
// router.post('/register', register);

// Route untuk login
/**
 * @route POST /api/auth/login
 * @desc User login
 * @access Public
 */
router.post('/login', login);

// Route untuk logout
/**
 * @route POST /api/auth/logout
 * @desc User logout
 * @access Public
 */
// router.post('/logout', logout);

/**
 * @route GET /api/auth/profile
 * @desc User logout
 * @access Public
 */
// router.get('/profile', profile);

// Ekspor router
export default router;