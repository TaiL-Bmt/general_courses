const express = require('express');
const router = express.Router();

//importing jobs controller methods
const {
    getJobs,
    newJob
} = require('../controllers/jobController');
router.route('/jobs').get(getJobs);
router.route('/job/new').post(newJob);

// router.get('/jobs', (req, res) => {
//     res.status(404).json({
//         success: true,
//         message: 'This route will display all jobs in future'
//     });
// });

module.exports = router;
