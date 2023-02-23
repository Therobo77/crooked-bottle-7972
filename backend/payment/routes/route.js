import express from  'express';

import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';

const router = express.Router();

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;