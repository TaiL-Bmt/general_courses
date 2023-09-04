const Job = require('../models/jobs');

//get all jobs => /api/v1/jobs
exports.getJobs = async (req, res, next) => {
    const jobs = await Job.find();
    // console.log(jobs);

    res.status(200).json({
        success: true,
        results: jobs.length,
        data: jobs
    });

    // res.status(200).json({
    //     success: true,
    //     middlewareUser: req.user,
    //     requestMethod: req.requestMethod,
    //     message: 'This route will display all jobs in future 2.'
    // });
}

//create a new job => /api/v1/job/new
exports.newJob = async (req, res, next) => {
    console.log(req.body);
    const job = await Job.create(req.body);
    res.status(200).json({
        success: true,
        message: 'Job created.',
        data: job
    });
};
