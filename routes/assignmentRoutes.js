// routes/assignmentRoutes.js
const express = require('express');
const router = express.Router();
const { uploadAssignment, getAssignmentsForAdmin, acceptAssignment, rejectAssignment } = require('../controllers/assignmentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/upload', authMiddleware, uploadAssignment);
router.get('/', authMiddleware, getAssignmentsForAdmin);
router.post('/:id/accept', authMiddleware, acceptAssignment);
router.post('/:id/reject', authMiddleware, rejectAssignment);

module.exports = router;
