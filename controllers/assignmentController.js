// controllers/assignmentController.js
const Assignment = require('../models/Assignment');

exports.uploadAssignment = async (req, res) => {
    const { task, adminId } = req.body;

    try {
        const assignment = new Assignment({ userId: req.user.userId, task, adminId });
        await assignment.save();
        res.status(201).json({ message: 'Assignment uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAssignmentsForAdmin = async (req, res) => {
    try {
        const assignments = await Assignment.find({ adminId: req.user.userId }).populate('userId', 'username');
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.acceptAssignment = async (req, res) => {
    try {
        await Assignment.findByIdAndUpdate(req.params.id, { status: 'Accepted' });
        res.json({ message: 'Assignment accepted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.rejectAssignment = async (req, res) => {
    try {
        await Assignment.findByIdAndUpdate(req.params.id, { status: 'Rejected' });
        res.json({ message: 'Assignment rejected' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
