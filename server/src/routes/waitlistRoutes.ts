import { Router } from 'express';
import { createWaitlistEntry, getWaitlistEntries } from '../controllers/waitlistController';

const router = Router();

router.post('/', createWaitlistEntry);
router.get('/', getWaitlistEntries);

export default router;
