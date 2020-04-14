const express = require('express');
const router = express.Router();
const { createBooking, getBookings, getBookingById, updateBooking, deleteBooking} = require('../../controllers/BookingController');

router.post('/book', createBooking);
router.put('/book', updateBooking);
router.get('/bookings', getBookings);
router.get('/booking', getBookingById);
router.delete('/booking', deleteBooking);

module.exports = router;