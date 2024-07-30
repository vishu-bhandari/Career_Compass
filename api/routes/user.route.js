import express from 'express';
import { test } from '../controllers/user.controller.js';
import { updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { deleteUser } from '../controllers/user.controller.js';


const router=express.Router();

router.get('/test', test );
router.put('/update/:userId',verifyToken,  updateUser );
router.delete('/delete/:userId' , verifyToken , deleteUser );

export default router;